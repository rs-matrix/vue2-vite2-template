# vite-admin-template

> 这是一个极简的 vite vue admin 管理后台。它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。

> **该项目改编自`panjiachen`的vue-element-template，面向技术栈和UI框架为Vue2和Element UI，但是无法忍受`vue-cli`的开发速度的开发人员。**

> 项目仅对vue-cli相关devDependencies进行拆解重构，替换为vite相关的devDependencies，src内部逻辑无改动。


## 相关项目

- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

- [electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin)

- [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template)

- [awesome-project](https://github.com/PanJiaChen/vue-element-admin/issues/2312)

## Build Setup

推荐使用 node16+ 版本来安装依赖。

```bash
# 进入项目目录
cd your-project

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```
## 开发说明

### echarts

脚手架内置了`echarts`，并提供按需引入的方式。配置文件位于`src/utils/echarts.js`，目前默认引入了`BarChart`、`LineChart`、`PieChart`，如果需要用到其他图表，在该文件下引入并注册即可。

### UI库

脚手架内置了`element-ui`组件库，并提供按需引入的方式。配置文件位于`src/utils/element-ui.js`，为了方便使用，默认引入了全部组件，可以在vue模板文件中直接使用任意组件。

### 请求接口

脚手架内置了`axios`库，并封装为`request`函数。新增的接口请求方法在`api`文件夹下新增对应模块的js文件，可以参考`user.js`里面的写法。

### 路由

脚手架内置了`vue-router`，如果要新增路由，直接在`src/router/index.js`文件内按照格式新增即可。

### 图标

在前端页面中使用图标有两种快捷方式：

- 直接使用element-ui提供的Icon组件，可以很方便的为按钮添加图标；
- 脚手架封装了SvgIcon组件，方便使用从外部导入的图标。使用步骤为：
  - 在`src/icons/svg`文件夹下添加需要使用的svg图标；
  - 在需要使用的地方按照类似方式使用：`<svg-icon icon-class="eye" />`，其中`icon-class`的属性值与svg图标文件名保持一致；
  - 海量svg图标可以在[iconfont](https://www.iconfont.cn/)下载。

### 样式

脚手架内置了`sass`，便于编写嵌套样式。vue模板组件内的样式采用scoped + 命名空间的方式编写，防止样式冲突。可复用的全局样式放置在`src/styles`文件夹下。

### 图片资源

项目中新增的图片统一放置在`assets`文件夹下，禁止放在`src`外的文件夹内。因为vite只会处理`src`目录下的静态资源。

### 公共逻辑

可以复用的公共逻辑放置在`utils`文件夹下。如果需要增加模板文件的复用逻辑，可以在`src`下新增`mixins`文件夹，在该文件夹下新增公共逻辑。

### 视图层

项目中新增的模板文件统一放置在`views`文件夹下。请按照模块新增目录。

### webGIS

脚手架内置了webGIS的前端库，包括`openlayers`、`turf`、`jsts`。具体使用方式可以参考`idps-portal`仓库。

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```