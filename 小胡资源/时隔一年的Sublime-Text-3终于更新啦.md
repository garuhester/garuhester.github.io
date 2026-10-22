作为自己最爱的一款编辑器，自从2016年9月23日开始，Sublime Text 3 的版本就一直是3126版本（很多bug）

![](http://upload-images.jianshu.io/upload_images/2381669-d09c8436cc43979a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

虽然官方不停的在刷预览版，但是正式的版本一直没有更新，还以为它放弃维护了呢
但是在昨天（2017年9月13日）
Sublime Text 3时隔了一年终于迎来了正式版的更新

![](http://upload-images.jianshu.io/upload_images/2381669-442cb7b177a069bb?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在Sublime Text 3 Build 3143版本中
更新的东西还是挺多的
首先就是Sublime Text 3 的Logo 发生了改变，下图是新的Logo

![](http://upload-images.jianshu.io/upload_images/2381669-0c2580a506994fd7?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-0bf0948c17b6a148.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后呢，编辑器内部的一些UI风格也发生了改变

![](http://upload-images.jianshu.io/upload_images/2381669-f0ce67969a34f9e7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-5d960cbabd84628a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

还有就是编辑器的主题有了一点变化

![](http://upload-images.jianshu.io/upload_images/2381669-6cc104bb82867b5d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-eda9b336507a6666.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

还有很多的变更等着你去发现
总之Sublime Text 3是一款十分强大且好看好用的编辑器
之前还有介绍过Sublime Text 3的一些强大的功能
而且这次更新修复了很多的bug
小伙伴们可以用用，不会让你失望滴
Sublime Text 3 官网：https://www.sublimetext.com/

**（手动华丽的分割线，以下是更新日志，可跳过= =）**
***
>Changelog
3.0 (BUILD 3143)
13 September 2017
See also the [Announcement Post](https://www.sublimetext.com/blog/articles/sublime-text-3-point-0)
Refreshed UI theme, including full high DPI support
New icon
Added alternate theme, Adaptive, that inherits colors from the color scheme
Added new color schemes *Breakers*, *Mariana* and *Sixteen*, derived from the excellent work of Chris Kempson and Dmitri Voronianski
Added color scheme and theme switchers with live preview via the command palette
Windows: Added touch input
Linux: Added [repositories](https://www.sublimetext.com/docs/3/linux_repositories.html) for apt, yum and pacman
Mac: Added Touch Bar support
Mac: Support for custom color window title bars on OS X 10.10+
Many additions and bug fixes to the theme engine, plus [full documentation](https://www.sublimetext.com/docs/3/themes.html)
Significant improvements to Markdown syntax highlighting, with thanks to [keith-hall](https://github.com/keith-hall)
Significant improvements to C# syntax highlighting, with thanks to [gwenzek](https://github.com/gwenzek)
Significant improvements to Java syntax highlighting, with thanks to [djspiewak](https://github.com/djspiewak)
Significant improvements to Python syntax highlighting, with thanks to [FichteFoll](https://github.com/FichteFoll)
Significant improvements for R syntax highlighting, with thanks to [randy3k](https://github.com/randy3k)
Markdown: Improved symbol handling
C#: Improved symbol handling
Many other syntax highlighting improvements
Various bugs with the syntax highlighting engine have been resolved
Fixed several crash issues
Improved responsiveness when the system is under high CPU load
High DPI textures are used on Windows and Linux when the DPI scale is greater than 1.0
Improved font selection on all platforms, allowing selection of different weights by name
Added setting theme_font_options
 to control font rendering of UI elements
Improved auto indent rules for HTML and PHP
Font geometry issues that prevent bold or italics are now printed in the console
Fixed flash-of-white that could occur when the auto complete window is closed
Disable scroll animation when animation_enabled
 is false in settings
Files can now be renamed when only the case has changed
New windows start with an empty find history
Find in Files panel now responds to find_all
 and replace_all
 commands
Various regex handling improvements in the Find panel
Fixed text widgets cutting off the bottom pixel of their selection border
Fixed an issue with close_windows_when_empty
 in empty session
Fixed empty panes on startup when hot_exit
 was set to false
Fix Open Containing Folder on Windows with a folder containing a comma
Fix multi-cursor pasting when clipboard contains one or more full lines
Prevent UNC paths from being mangled by edit_settings
Prevent a crash when a malformed regex is used in indentation settings
Improved rendering performance with a large number of gutter icons
Gutter icons are now sized properly on Windows and Linux high DPI screens
Improved sidebar performance when folders contain many thousands of files
Improved inline error message style
Fixed an issue where multiple indexing status windows could be shown
Windows: Font rendering defaults to DirectWrite unless using Consolas or Courier New
Windows: Added support for no_antialias
 font option when using DirectWrite
Windows: Improved touch pad scrolling
Windows: Improved file change detection robustness
Windows: Improved font selection logic
Windows: Fix ctrl+` shortcut for UK (ISO) keyboards
Windows: Improved fallback font handling in UI elements
Windows: The subl executable on OS X and plugin_host.exe on Windows are now signed
Windows: sublime_text.exe now has CompanyName set in VERSIONINFO
Mac: Handle layout changes due to macOS Sierra tabs
Mac: Improved default web browser detection
Mac: OS X 10.11 and macOS 10.12+ default to using San Francisco for the UI font
Mac: Fixed file change notifications from freezing UI on macOS Sierra
Mac: the user's default shell is executed and environmental variables are set in the plugin Python environment
Linux: Update X11 selection on clipboard every time selection changes
Linux: Improved MOD3
 modifier key handling
minihtml: Added support for borders
minihtml: Respects font_options
 from the settings
minihtml: Fixed layout of html popups on Windows and Linux under High DPI
minihtml: Fixed crash when doctype is present
minihtml: Fixed a crash from non-existent CSS vars
minihtml: Fixed a crash triggered by bad image paths
API: Add View.text_to_window()
 and View.layout_to_window()
API: All API functions now accept and return device-independent-pixels
API: Fixed input panel not running on_cancel
 when re-showing the input panel
API: Fixed selector scoring with the & operator
API: Fixed a bug causing incorrect phantom contents
API: Fixed crash in Window.set_view_index()
API: Updated OpenSSL to 1.0.2k, SQLite to 3.16.02


在线工具服务网站Loveconvert网址：[http://www.loveconvert.com](http://www.loveconvert.com/)
欢迎关注微信：小胡资源
![小胡资源](http://upload-images.jianshu.io/upload_images/2381669-333693eebfd1d314.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
