# 微信旧岛小程序

## 1. 起步
### 1.1 开发环境配置

1. 到官方网址下载[微信小程序开发工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)
1. 申请微信小程序开发账号

一个邮箱只能申请一个微信小程序账号,只能申请开发一个微信小程序,目前微信小程序开发注册机制是这样的,有点不太友好.
[https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)
申请好微信小程序开发账号进入之后,左侧菜单栏->设置->找到账号信息,有appID,这是我们要使用的,请保存好不要告诉别人

3. 使用微信开发者工具创建一个项目,填入appid,一个项目就创建了
3. 使用第三方开发工具进行开发只能进行编辑工作,其他测试发布等等,都还要使用微信开发者工具
  1. vscode: 安装`minapp`或者`小程序开发助手`插件,即可正常查看文件以及代码提示等等
### 1.2. 项目结构
一个良好的项目结构,可以让我们的开发与维护变得更简单,使用组件化开发可以提高我们的开发效率
![QQ截图20190920095947.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568944836016-5fb00169-866d-40e0-adf7-a6790cd695da.png#align=left&display=inline&height=518&name=QQ%E6%88%AA%E5%9B%BE20190920095947.png&originHeight=518&originWidth=1042&size=616973&status=done&width=1042)
```js
| --components // 组件 |
| -------------------- |     | behaviors // 共享行为(组件间代码共享,包括属性、数据、生命周期函数和方法...) |
| -------------------- | --- |//定义的组件文件
|--docs  // 项目文档(api,接口测试...)
|--images  // 全局图片
|--models  // 模型(数据模型->api接口封装,模型数据处理)
|--pages   // 页面
|--utils   // 工具库
|--.gitignore// git忽略文件
|--app.js  // 项目根文件
|--app.json  // 全局配置文件
|--app.less  // 全局less文件(预编译文件)
|--app.wxss  // 全局style文件
|--config.js // 全局自定义配置文件(统一的请求网址...)
|--project.config.json  // 项目配置文件,一般不用动
|--README.md // 项目的说明文档
|--sitemap.json // 是否允许被微信索引
```
### 1.3 完成页面/组件/功能
#### 页面
* 期刊页面: "pages/classic/classic",
* 喜欢页面: "pages/my/my",
* 书籍页面: "pages/book/book",
* 书籍详情: "pages/book-detail/book-detail",
*    关于:  "pages/about/about",
*    学习:  "pages/course/course",
* 期刊详情: "pages/classic-detail/index"

#### 组件
* 书籍列表<v-book>: components/book/index.wxml
* 搜索书籍<v-search>: components/book/search/index.wxml 高级组件,搜索组件
* 期刊句子组件<v-essay>: /components/classic/essay/index
* 期刊电影组件<v-movie>: /components/classic/movie/index
* 期刊音乐组件<v-music>: components/classic/music/index
* 期刊号组件<v-episode>: /components/episode/index
* 期刊导航组件<v-navi>:  /components/navi/index
* 喜欢组件<v-like>: /components/like/index
* 按钮组件<v-button>: /components/image-button/index

#### 功能
1. 期刊页面
  1. 期刊列表
  2. 期刊音乐播放
2. 书单页面
  3. 书单列表
  4. 搜索书籍功能
  5. 书籍详情
  6. 添加书籍评论
3. 喜欢页面
  7. 用户授权
  8. 用户信息展示
4. 通用功能
  9. 喜欢功能
  10. 分享功能

## 2. 项目开发
### 2.1 app.json
先学习下`app.json`的[配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)
1. pages 用于指定小程序由哪些页面组成
2. window 用于设置小程序的状态栏、导航条、标题、窗口背景色。
3. tabBar 用于切换页面

### 2.2 代码规范
[小程序开发规范](https://www.yuque.com/ynzy/xiaochengxu/guifan)

订制一个规范要基于这样几个标准
* 保证不会出现代码错误
* 要在一个大规范的前提下订制规范

### 2.3 组件使用
1. 创建
使用微信开发者工具创建一个components,一般创建一个components文件夹,存放所有公共组件,比如: `components/like`
2. 引用组件
在pages页面要使用组件的页面中的`.json`文件中进行引用
> pages/classic/classic.json
引用路径要使用绝对路径:
```json
{
  "usingComponents": {
    "v-like": "/components/like/index"
  }
}
```
### 2.4 page上应用样式
* 小程序页面渲染时会自动包裹page元素,在page节点上设置的样式可以全局应用
例如: 设置苹方字体
```css
page {
  font-family: 'PingFangSC-Thin';
  font-size: 32rpx
}
```

### 2.5组件事件与事件处理

## 背景音乐播放API
`wx.getBackgroundAudioManager`

返回值

BackgroundAudioManager

属性: 

* string src 音频的数据源,当设置了新的 src 时，会自动开始播放
* boolean paused 当前是否暂停或停止。（只读）

方法: 

* play()  播放
* pause() 暂停
* stop()  停止
* onPlay() 播放事件
* onPause() 暂停事件
* onStop() 停止事件

## 代码编写风格
* https://github.com/airbnb/javascript

主要查看
1. Types
2. References
3. Objects
4. Arrays
5. Destructuring
6. Strings
7. Functions
8. Arrow Functions
9. Classes & Constructors
10. Modules
11. Properties
12. Variables
13. Blocks
