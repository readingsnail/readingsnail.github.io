---
layout: post
title: Pontoon Install (en)
categories: Article
tags: Heroku Pontoon
---

Pontoon installing & usage manual

Pontoon is Online Co-Operation Translation Platform, brought by [Mozilla](https://www.mozilla.org/). it's using Python(Django), Git and etc. and working on [Heroku](https://www.heroku.com/) Platforms. of course, working Docker or VirtualEnv. but pontoon is design by Heroku Platform, so in Document, recommand only Heroku

anyway, Pontoon's Deploy is very simple and easy.

![Pontoon-Install.png](https://raw.githubusercontent.com/readingsnail/readingsnail.github.io/master/_screenshots/Pontoon-install.png)

in Official Github Page, support 'Deploy' Button of Pontoon. Click to Deploy Button, and fill the contents.

![create-new-App.png](https://raw.githubusercontent.com/readingsnail/readingsnail.github.io/master/_screenshots/Create-New-App.png)

First, configure app name, and region of heroku instance. very easy, huh?

and second, very important thing is showing.
![caution-deploy.png](https://raw.githubusercontent.com/readingsnail/readingsnail.github.io/master/_screenshots/caution-deploy.png)

Site_URL, and SSH Setting is that it. first Site_URL is Django's HTTP Host header attack Count-Attack thing, so corretly write URL. For example using myapp.herokuapp.com, need full url. and SSH Config is also important. Pontoon is using and Based VCS(Version Control System). it's support Git, Mecurial(HG) and Subversion. but I using git, so writed git config.

    Host github.com
	     User git
	     HostName github.com
	     IdentityFile ~/.ssh/id_rsa
	     StrictHostKeyChecking no
         batchmode yes
         
First Need is SSH Key fair. make SSH Key fair is refer to [Github's Help Page](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). `StrictHostKeyChecking no` setting is important, this setting is disable checking host key in SSH. and `batchmode yes` is need passwordless login.
 
write git config, and write SSH Private key. this key is very important. so caution! end of this process, open the public key(*.pub), using text editor or notepad and registered Github or etc services.

That's it Folks, end tern to click Deploy app button.
