动态修改Animationplayer中的某一个帧动画

```
#修改动画中的某一帧
func modify_animation(obj, animation_name, time, key, value):
	var anim_player:AnimationPlayer = obj
	var anim:Animation = anim_player.get_animation(animation_name)
	if anim == null: return

	var target_track_idx:int = -1
	for track_idx in range(anim.get_track_count()):
		var track_path = anim.track_get_path(track_idx)
		if track_path.get_concatenated_subnames() == key:
			target_track_idx = track_idx
			break
	if target_track_idx == -1: return

	var key_idx = anim.track_find_key(target_track_idx, time)
	if key_idx == -1:
		print("没有找到关键帧")
		return
		
	anim.track_set_key_value(target_track_idx, key_idx, value)
```

```
modify_animation($Control/AnimationPlayer, "scale", 0.5, "scale", Vector2(scale_offset, scale_offset))
```

![](https://upload-images.jianshu.io/upload_images/2381669-9234bfa228facb61.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
