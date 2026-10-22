- ```encodeURI()```
![](http://upload-images.jianshu.io/upload_images/2381669-ad5a4b65d1847869.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-b1f60a0ec906c540.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

- ```decodeURI()```： 解码一个由 encodeURI 编码过的 URI。
![](http://upload-images.jianshu.io/upload_images/2381669-5bae1e56d9d01d19.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

- ```encodeURIComponent()```
![](http://upload-images.jianshu.io/upload_images/2381669-aa016db5030cacc1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-de3d56c8e656eef5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

- ```decodeURIComponent()```：解码一个由 encodeURIComponent 编码过的字符串。
![](http://upload-images.jianshu.io/upload_images/2381669-a858e460a87b88a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

- ```window.btoa()```：将一个只有 ASCII 字符的字符串或二进制数据转换成一个 base64 编码过的字符串。

![](http://upload-images.jianshu.io/upload_images/2381669-b6975a2c7dd53c1f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>如果想对一个 Unicode 字符串进行编码，可以使用 encodeURIComponent 先对其进行编码，然后再进行 base64 编码。

![](http://upload-images.jianshu.io/upload_images/2381669-b181a5eb5e60ba97.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

- ```window.atob()```： 用来解码被 base64 编码过的数据，直接对 ASCII 字符串进行 base64 解码会出现乱码。
![](http://upload-images.jianshu.io/upload_images/2381669-1edc12cfc9ba739b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


