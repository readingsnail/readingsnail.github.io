---
layout: post
title: Pontoon Install (Ko)
categories: Article
tags: Heroku Pontoon 삽질
---

Pontoon 사용기 혹은 개 삽질기 Pt. 1 (한국어 버전)

Pontoon 은 [Mozilla](https://www.mozilla.org/ko/) 에서 개발한 온라인 협업 번역 플랫폼입니다. 파이썬 Django, Git 등등을 사용해서 [Heroku](https://www.heroku.com/) 플랫폼에서 전용으로 돌아가게 설계가 되어 있지요. 물론 도커나 VirtualEnv 에서 돌릴수 있지만, 프로덕션 단계에서 돌리기엔 영 그렇습니다. 설계 자체가 Heroku의 파일 시스템을 기반으로 만들어졌거든요. 그래서 설명서도 Heroku만 설명하고 땡입니다. 다른 설명서는 실행은 되는데, 실사용으로 돌리기엔 매우 부적절 합니다.

여튼간에, 추천을 받고 설정에 나섰는데, 배치 자체는 매우 쉽습니다.

![Pontoon-Install.png](https://raw.githubusercontent.com/readingsnail/readingsnail.github.io/master/_screenshots/Pontoon-install.png)

조금 스크롤을 내려서 Deploy 버튼을 누르면 되거든요. Deploy 버튼을 누르면 여러가지 설정들이 나오는데, 내용들을 채워주면 됩니다.

![create-new-App.png](https://raw.githubusercontent.com/readingsnail/readingsnail.github.io/master/_screenshots/Create-New-App.png)

일단 이름과 지역을 선택해줍니다. 아주 쉽죠?

그런후에 아래에 중요한게 나옵니다.
![caution-deploy.png](https://raw.githubusercontent.com/readingsnail/readingsnail.github.io/master/_screenshots/caution-deploy.png)

바로 Site_URL 과 더불어 SSH 설정입니다. 이 2개가 여기서 제일 중요한 것중 하나인데, 하나는 Django는 Allowed Sites 라는 CSRF(Cross-site request forgery)공격 대비책을 갖고 있습니다. 이걸 등록하기 위해 **끝까지 적어주셔야 합니다**. 예를들어, myapp.herokuapp.com 으로 하실라면, myapp만 적는게 아니라 다 적어야 한다는 거죠. 그리고 SSH 설정도 중요한데, Pontoon은 VCS(버전 관리 시스템, Version Control System)을 기반으로 움직입니다. Git만 지원하는게 아니라 다른 것도 지원하지만 여기서 다 살펴볼건 아니고, 중요한 설정만 훑고가죠. 일단 전 이 설정을 사용중에 있습니다.

    Host github.com
	     User git
	     HostName github.com
	     IdentityFile ~/.ssh/id_rsa
	     StrictHostKeyChecking no
         batchmode yes
         
 일단 SSH 키를 만들어 둡니다. SSH 키를 만드는 방법은 [Github의 도움말 페이지](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)에 잘 설명되어 있습니다. 이대로 따라하시면 됩니다. 그런후 중요한게 `StrictHostKeyChecking no` 인데, 이 설정은 일일히 호스트 키를 저장했는지 확인을 꺼두는 설정입니다. 네, SSH에 호스트키가 없더라도 작동을 하게 만드는 구성요소지요. 그리고 아래의 `batchmode yes` 항목은 비번을 안적고도 로그인을 할수 있도록 하는 설정입니다.
 
 그리고, 만든 SSH 비밀키를 아래 적어준후, 공개키(*.pub)를 텍스트 에디터같은 걸로 열어서 Github나 기타 서비스에 등록시켜 줍니다.
 
 자 여기까지가 기본 설정이었습니다.
