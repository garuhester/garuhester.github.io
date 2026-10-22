## 功能：
滚动页面时div到达顶部时固定在顶部

## 原生实现：
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		#title{
			background: #ddd;
	        width: 100%;
	        padding:30px;
        	box-sizing: border-box;
		}
	</style>
</head>
<body>
<div class="a" style="height:200px;"></div>
<div id="title">hello world</div>
<div class="d" style="height: 1000px;"></div>
<script>
	var a;
	var title = document.getElementById('title');
	var v = title.offsetTop;//存储原来的距离顶部的距离
	window.onscroll = function(){
		a = document.documentElement.scrollTop;//存储滚动高度
		if(a>v){
			title.style.position = 'fixed';
			title.style.top = 0;
		}else if(title.style.position != 'static'){
			title.style.position = 'static';
		}
	}
</script>
</body>
</html>
```

## jquery实现：
```
<!DOCTYPE html>
<html>

<head>
    <title></title>
    <style type="text/css">
    #text {
        background: #ffffff;
        width: 100%;
        padding:30px;
    }
    </style>
</head>

<body style="margin:0px;">
    <div style="height:300px;background:lightcoral"></div>
    <div id="text">div顶部吸附</div>
    <div style="height:2000px;background:lightblue"></div>
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
    $(function() {
        var ie6 = document.all;
        var dv = $('#text');
        var st;
        dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
        $(window).scroll(function() {
            st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (st > parseInt(dv.attr('otop'))) {
                if (ie6) { //IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
                    dv.css({ position: 'absolute', top: st });
                } else if (dv.css('position') != 'fixed'){
                	dv.css({ 'position': 'fixed', top: 0 });
                } 
            } else if (dv.css('position') != 'static') {
            	dv.css({ 'position': 'static' });
            }
        });
    });
    </script>
</body>

</html>
```
