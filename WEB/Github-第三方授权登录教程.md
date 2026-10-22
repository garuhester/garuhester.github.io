#### 大致流程图

![cmd-markdown-logo](http://upload-images.jianshu.io/upload_images/2381669-b4d62aa0fed075f2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 1.首先注册一个github帐号,Applications>Developer applications>Register a new application.

![cmd-markdown-logo](http://upload-images.jianshu.io/upload_images/2381669-11e11a0cbe658044.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![cmd-markdown-logo](http://upload-images.jianshu.io/upload_images/2381669-36f539b09907a1ec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.填入参数

*   **Application name－－应用名称,随意填**

*   **Homepage URL－－如上图可以填本地地址进行测试,127.0.0.1:port/xx/xx**

*   **Application description－－应用描述,随意填**

*   **Authorization callback URL－－后端回调url,最重要的一环因为github那边回调会传你一个code参数,下面会提到.提交申请**

*   **注册之后会得到 github提供的client id和client secret有了这两个东东就可以换取更多的信息了,不要交给坏人0.0**

![cmd-markdown-logo](http://upload-images.jianshu.io/upload_images/2381669-8be14857c6a66274.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 3.用户点击github登录本地应用引导用户跳转到第三方授权页 跳转地址为:

[https://github.com/login/oauth/authorize?client_id=xxxxx&state=xxx&redirect_uri=xxxx](https://github.com/login/oauth/authorize?client_id=xxxxx&state=xxx&redirect_uri=xxxx);

(client_id 上面已经拿到了,state参数随便传多少,redirect_uri 就是你上面填的Authorization callback URL)

#### 4.授权成功后会回调我们平台,会重定向带参数访问我们上面的redirect_uri,后台接收code这个参数,我们带着这个code再次访问github 地址:

[https://github.com/login/oauth/access_token?client_id=xxx&client_secret=xxx&code=xxx&redirect_uri=http://127.0.0.1:8080/cqput-bbs/User/RegisteredByGithub.do](https://github.com/login/oauth/access_token?client_id=xxx&client_secret=xxx&code=xxx&redirect_uri=http://127.0.0.1:8080/cqput-bbs/User/RegisteredByGithub.do)

（这次会得到响应的access_token）

#### 5.成功获取access_token后就可以换取用户信息了地址：

[https://api.github.com/user?access_token=xxx](https://api.github.com/user?access_token=xxx);

#### （注意一下,这里会有个坑,4,5步骤都尽量用get请求去访问,第5步骤后端必须是模拟http get请求才能正确访问拿到返回值,post 请求 直接报404）

#### 6.得到github授权用户的个人信息,就可以插入到我们的数据库中去了,授权登录成功,跳转主页

![cmd-markdown-logo](http://upload-images.jianshu.io/upload_images/2381669-844acbaa886d0269.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
