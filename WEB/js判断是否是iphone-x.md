| 机型        | 倍率           | 分辨率  |pt|
| ------------- |:-------------:| -----:|-----:|
| iPhone X      | 3 | 2436 × 1125 |812 × 375|
| iPhone XS| 3   | 2436 × 1125 |812 × 375|
| iPhone XS Max| 3     |    2688 × 1242 |896 × 414|
| iPhone XR| 2    |   1792 × 828 |896 × 414|
```
function isIphoneX() {
    return ((/iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)) || (/iphone/gi.test(navigator.userAgent) && (screen.height == 896 && screen.width == 414)))
}
```
