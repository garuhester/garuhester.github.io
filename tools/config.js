'use strict';

/**
 * 站点配置：想改站点信息、分类名称/图标/描述、子分类规则、标签词库，都在这个文件里改。
 * 新增文章只需要把 .md 丢进对应目录（或者新建一个目录），重新运行 `npm run build` 即可。
 */

module.exports = {
  site: {
    title: '小胡笔记',
    subtitle: '折腾过的技术、游戏开发与效率技巧',
    description: '简书文章汇总：前端 / Web、Godot 游戏开发、Linux 运维、AI 工具、效率技巧等。',
    author: '小胡',
    // 页脚、关于页里展示的一句话
    intro:
      '这里汇总了我这些年写在简书上的文章，按主题整理成分类与标签，方便自己回查，也方便别人少踩坑。',
  },

  // 扫描哪些目录作为文章源（相对仓库根目录）；留空表示自动扫描根目录下所有目录
  sourceDirs: null,
  // 这些目录不当作文章分类
  excludeDirs: ['blog', 'tools', 'node_modules', '.git', '.github', 'assets', 'dist', '.vscode'],
  outputDir: 'blog',

  /**
   * 分类展示信息。key 必须与目录名一致；没有列出的目录会自动生成默认样式，
   * 所以新建目录后即使不配置也能正常显示。
   */
  categories: {
    WEB: {
      name: 'Web 前端',
      slug: 'web',
      icon: '🌐',
      color: '#4f6bed',
      desc: 'JavaScript、CSS、Vue、Node、小程序、Electron、Git 与各种踩坑记录',
      order: 1,
    },
    Godot: {
      name: 'Godot 游戏开发',
      slug: 'godot',
      icon: '🎮',
      color: '#38a1f3',
      desc: 'Godot 引擎教程、UI 系统、粒子特效与游戏素材',
      order: 2,
    },
    Godot4: {
      name: 'Godot 4 实践',
      slug: 'godot4',
      icon: '🕹️',
      color: '#30b8a0',
      desc: '迁移到 Godot 4 之后的写法变化与实测经验',
      order: 3,
    },
    '技术': {
      name: 'Linux 与运维',
      slug: 'linux',
      icon: '🐧',
      color: '#e8a33d',
      desc: '服务器搭建、Linux 命令、Nginx、防火墙与科学上网',
      order: 4,
    },
    AI: {
      name: 'AI 与大模型',
      slug: 'ai',
      icon: '🤖',
      color: '#8b5cf6',
      desc: '本地部署、MCP 服务、Harness 插件与工具链折腾',
      order: 5,
    },
    MyApp: {
      name: 'App 开发',
      slug: 'app',
      icon: '📱',
      color: '#3f9142',
      desc: 'Android 界面开发与 Java 后端小工具',
      order: 6,
    },
    Blender: {
      name: 'Blender',
      slug: 'blender',
      icon: '🧊',
      color: '#ea7a3c',
      desc: '三维建模、骨骼绑定等使用记录',
      order: 7,
    },
    '刷机': {
      name: '刷机与折腾',
      slug: 'flash',
      icon: '📲',
      color: '#e05d6f',
      desc: '一加 / 联想平板刷机、降级、回锁与救砖实录',
      order: 8,
    },
    '小胡资源': {
      name: '资源分享',
      slug: 'resources',
      icon: '🎁',
      color: '#c2681f',
      desc: '软件推荐、模板素材、设计灵感库与视频笔记',
      order: 9,
    },
    '技巧': {
      name: '效率技巧',
      slug: 'tips',
      icon: '✨',
      color: '#0ea5b7',
      desc: 'Windows 与常用软件的顺手指南',
      order: 10,
    },
  },

  /**
   * 二级子分类规则：按顺序匹配文章文件名（不含扩展名，匹配前会转小写），
   * 命中第一条即归类。没写规则、或全部未命中的分类会平铺展示。
   */
  subcategoryRules: {
    WEB: [
      { name: '微信与小程序', match: /微信|小程序/ },
      { name: 'Vue 与组件库', match: /^vue|^element|element-ui|elementui|electron-vue/ },
      { name: 'Electron 桌面端', match: /^electron|^nw-js/ },
      { name: 'Git 与协作', match: /^git|github|gitee|fork/ },
      { name: '博客与建站', match: /^hexo|图床|简书/ },
      { name: '图表与可视化', match: /^echarts|^bpmn/ },
      {
        name: 'Node 与服务端',
        match: /^node|^npm|^mongoose|^connect-mongo|mongodb|^ejs|nodemailer|nodemon|forever|^docker|nssm|node_modules|ejs/,
      },
      { name: '构建与工程化', match: /^grunt|^gulp|^webpack|^vite|vitest|conventional|^安装grunt|^创建自己的npm/ },
      {
        name: '设备与兼容',
        match: /^web|^ie|移动端|常见设备|判断网页|判断是否是iphone|^img|^gif|^使用html5-dialog|^iframe|^利用javascript给iframe|^关闭chrome|^添加fork/,
      },
      { name: 'CSS 与布局', match: /^css|^scss|^sass|^纯css|^margin|^div|^html|^select|^textarea|^input|^子div|^侵占浮动|^禁止div|^无js实现|mdui|响应式/ },
      {
        name: 'JavaScript',
        match: /^js|^javascript|^jquery|^canvas|settimeout|setinterval|localstorage|宏任务|微任务|^实现|^利用js|^自动计算|聊天室|高德|地图/,
      },
      { name: '编辑器与开发环境', match: /^vscode|^sublime|^webstorm|^chrome|^快速删除|^查看和修改/ },
      { name: '随手记', match: /^\d{4}[-_.]\d{1,2}[-_.]\d{1,2}/ },
    ],
    Godot: [
      { name: '系列教程', match: /graphedit|从零开始|土豆兄弟|物品栏系统|rpg文字对话框|^【godot4】/ },
      { name: '素材资源', match: /素材/ },
      { name: '踩坑与排错', match: /踩坑|不生效|不影响|不工作|失效|问题|报错|无法|影响/ },
      { name: '特效与渲染', match: /粒子|火焰|烟雾|下雨|灯光|阴影|描边|light2d|过渡|冷却|遮罩|动画|传送带/ },
      { name: 'UI 与界面', match: /进度条|对话框|物品栏|血量|弹窗|记事本|计算器|界面|摇杆|ui|tab/ },
      { name: '脚本与数据', match: /http|json|保存|加载|延迟|节点|窗口|实例|帧/ },
      { name: '社区与其他', match: /社区|邀请|图床/ },
    ],
    '技术': [
      { name: 'Linux 与服务器', match: /linux|ubuntu|centos|搬瓦工|nginx|jexus|ftp|mongodb|权限|端口/ },
      { name: '命令行与脚本', match: /shell|cmd|iptables|python|php/ },
      { name: '建站与网络', match: /域名|网站|上线|shadowsocks|翻墙|微博|视频解析|快照|snapshot/ },
      { name: '环境与软件安装', match: /安装|卸载|升级|sublime|node|npm|包/ },
    ],
  },

  /**
   * 标签词库：match 命中文件名时得 3 分，命中正文得 1 分；总分 >= 3 才会打上该标签，
   * 每篇文章最多保留 5 个标签。想加标签在这里加一条即可。
   */
  tags: [
    { name: 'JavaScript', match: /javascript|\bjs\b|es6|promise|原型|闭包|数组|对象/ },
    { name: 'CSS', match: /\bcss\b|scss|sass|样式|布局|flex|grid/ },
    { name: 'HTML', match: /\bhtml\b|html5|标签/ },
    { name: 'Vue', match: /vue|vuex|element/ },
    { name: 'React', match: /react/ },
    { name: 'Node.js', match: /node|npm|express|koa/ },
    { name: '小程序', match: /小程序|wxml|wxss/ },
    { name: '微信生态', match: /微信|公众号/ },
    { name: 'Electron', match: /electron|nw-js/ },
    { name: 'Git', match: /\bgit\b|github|gitee|分支|rebase/ },
    { name: 'Hexo', match: /hexo/ },
    { name: 'Canvas', match: /canvas|绘图|涂鸦/ },
    { name: 'ECharts', match: /echarts/ },
    { name: 'MongoDB', match: /mongo/ },
    { name: 'Docker', match: /docker/ },
    { name: 'Nginx', match: /nginx/ },
    { name: 'Linux', match: /linux|ubuntu|centos|shell|iptables/ },
    { name: '服务器运维', match: /服务器|搬瓦工|部署|防火墙|端口|域名|快照/ },
    { name: '科学上网', match: /shadowsocks|翻墙|代理|clash/ },
    { name: '命令行', match: /cmd|命令行|命令|shell/ },
    { name: '性能优化', match: /性能|优化|动画帧|requestanimationframe|缓存/ },
    { name: '兼容性', match: /兼容|ie\b|ios|android|踩坑|失效|报错|问题/ },
    { name: '移动端', match: /移动端|手机端|响应式|横屏|竖屏/ },
    { name: 'Godot', match: /godot/ },
    { name: '游戏开发', match: /游戏|rpg|角色|关卡|玩家/ },
    { name: '粒子特效', match: /粒子|特效|火焰|烟雾|下雨/ },
    { name: 'UI 界面', match: /\bui\b|界面|弹窗|对话框|进度条|物品栏|按钮/ },
    { name: 'Shader', match: /shader|着色器|描边/ },
    { name: '3D', match: /3d|模型|骨骼|摄像机/ },
    { name: 'Blender', match: /blender/ },
    { name: 'Android', match: /android|drawerlayout|fragment/ },
    { name: 'Java', match: /java\b|mysql/ },
    { name: 'Python', match: /python/ },
    { name: 'PHP', match: /php/ },
    { name: 'AI', match: /\bai\b|大模型|llm|deepseek|ollama|mcp|gpt/ },
    { name: '刷机', match: /刷机|coloros|救砖|降级|回锁|bl\b/ },
    { name: '软件推荐', match: /推荐|神器|软件|工具|资源/ },
    { name: '效率技巧', match: /技巧|快捷键|效率|右键菜单|开机/ },
    { name: '设计', match: /设计|灵感|ppt|模板|配色/ },
    { name: '视频剪辑', match: /ableton|obs|audition|剪辑|录制|推流/ },
    { name: '教程', match: /教程|从零开始|手把手|教你|入门|学习记录/ },
    { name: '踩坑记录', match: /踩坑|报错|错误|失败|坑|解决/ },
  ],

  // 首页展示的精选分类顺序之外，还可以指定置顶文章（填文件名，不含 .md）
  featured: [
    '【Godot4】【从零开始制作土豆兄弟】教程简书合集！（持续更新）',
    'Linux下安装node及npm',
    'SCSS学习记录',
  ],
};
