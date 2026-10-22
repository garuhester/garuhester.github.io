## 代码
```
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    //配置发送者的邮箱服务器和登录信息
    service:'163',//163、qq等
    auth:{
        user:'xxxxxx@163.com',//邮箱
        pass:'*******'//邮箱密码或授权码
    }
});
var mailOptions = {
    from:'15111823732@163.com',//发送者
    to:'815621501@qq.com',//接受者
    subject:'hello body',//主题名
    text:'hello nodemailer',//文本
    html:`<h2>nodemailer基本使用</h2>`,//内容,
    //附件
    attachments:[
        {
            //当前目录下的文件
            filename:'package.json',
            path:'./package.json'
        },
        {
            //创建一个文件
            filename:'hello.txt',
            content:'hello nodemailer'
        }
    ]
}
transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err);
        return;
    }
    console.log("发送成功");
});
```
