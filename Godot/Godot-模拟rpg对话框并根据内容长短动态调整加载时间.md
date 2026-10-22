![](https://upload-images.jianshu.io/upload_images/2381669-6ce4a85d1a8e6b8a.gif?imageMogr2/auto-orient/strip)

## **scene:**
![](https://upload-images.jianshu.io/upload_images/2381669-a5d5510b5bdd24c0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## **script:**
```
extends Control

var txt

func _on_Button_pressed():
	showText()
	pass

func showText():
#	txt = "哈哈哈哈哈哈哈哈哈哈哈哈" # 短字符串
	txt = "尽管角色扮演游戏的形式多样，例如某些交换卡片游戏、战争游戏甚至动作游戏都可能含有角色扮演元素，包括人物升级、故事推进，但分类时却不包括在角色扮演游戏之内。" # 长字符串
	var speed = 0.02 # 单个字符显示所需时间
	var time = speed * txt.length() # 根据字数动态调整动画时间
	$dialogbox/RichTextLabel.bbcode_text = txt
	$dialogbox/RichTextLabel.percent_visible = 0
	$dialogbox/Tween.interpolate_property($dialogbox/RichTextLabel,"percent_visible",0,1,time,Tween.TRANS_LINEAR,Tween.EASE_IN_OUT)
	$dialogbox/Tween.start()
	pass

```
