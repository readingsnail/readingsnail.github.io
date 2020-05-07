[클라우드플레어](https://www.cloudflare.com)(Cloudflare)는 다들 알다시피 DNS랑 CDN을 제공해주는 서비스이다. 아 물론, SSL도 공짜로 지원해주고 말이다. 그래서 대다수가 많이 쓰는 서비스라고 볼 수 있겠다.

Heroku에서 쓸라면 다음과 같은 작업들이 필요하다. 아 물론, 여기서는 2가지 방법을 다 설명할 것이다.

	 1. Heroku Hobby Tier 일 경우
	 2. Heroku Free Tier 일 경우 - 공짜 점심
	 
1번은 쉽다. 매우 쉽다.
![Heroku's Custom Domain](https://raw.githubusercontent.com/readingsnail/readingsnail.github.io/master/_screenshots/custom-domain.png)다음과 같이 루트 도메인과 더불어 사용할 서브도메인(www가 아니어도 상관없다. 아니 www도 어찌보면 서브 도메인이다.)을 적어준다. 그리고 클라우드플레어에다가 저 DNS Target을 적어주면 끝!

이렇게 하면 Heroku의 ACM(Automated Certificate Management)의 Let's Encrypt가 동작하여 클라우드플레어와 꽉 물리게 된다. 그러니까 풀 모드로 말이다.

만일, 이렇게 안하면 클라우드플레어 측에서 525 에러, 그러니까 SSL 핸드쉐이크 에러가 퍽퍽 떠서 매우 짜증나게 된다. 솔직히 짜증나는건 다들 싫어하지 않나?

근데, 우리는 공짜에서도 HTTPS를 쓰고 싶다. 그리고 *.herokuapp.com 은 Heroku의 자체 인증서로 HTTPS 처리 되어 있다. 이걸 이용할수 없을까?

간단하다. 이용하면 된다(...)

2번인 공짜 점심은 Heroku 측에서 권장하지 않지만, 엄연히 동작한다. 그리고 앞으로도 진행될 가능성이 높다.

![Old-Custom-Domain](https://raw.githubusercontent.com/readingsnail/readingsnail.github.io/master/_screenshots/old-custom-domain.png)Heroku 측은 이전에 CNAME으로 *.herokuapp.com 을 던져준적이 있었다. 물론 지금은 윗과 같은 형태로 변했지만, 여튼간에 Heroku측은 울면서 겨자를 먹고 있다. 그리고 이 인증서는 Cloudflare에서 잘 먹힌다.

그래서 사용하는 Heroku 애플리케이션을 CNAME에다가 적어주면 끝~! 아 물론, CSP(Content Security Policy, 컨텐츠 보안 정책)이 빡센경우 계속 525 에러가 함께할것이니, 이 경우에 공짜 점심을 먹을려면 CSP를 조져놔야 한다. CSP를 조지는 방법은 알아서 잘 하겠쥬?
