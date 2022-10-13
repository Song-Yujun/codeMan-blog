[参考文档](https://cli.vuejs.org/zh/guide/installation.html)</br>

[模板地址](url)

## 安装vue
>通过npm安装   `npm install -g vue`</br>
>通过yarn安装  `yarn global add vue`</br>
>查看vue版本号 `vue --version`

## 创建项目
> `vue create '项目名称'`

1. 这里是选择一个预设：（通过键盘上下键选择，回车选中）</br>
 - Vue3（Babel + ESLint）</br>
 - Vue2（Babel + ESLint）</br>
 - 手动选择特性（面向生产项目的需要，更加符合Vue的渐进式特性）

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49785b478094410f86ed78b2c415432f~tplv-k3u1fbpfcp-watermark.image?)</br>

2. 这里是根据你的项目需求选择你需要配置的特性(通过空格选中，回车确认所有已选中)</br>
- Progressive Web App (PWA) Support---支持渐进式Web应用程序（PWA）</br>
- Linter / Formatter---代码风格检查和格式化</br>
- Unit Testing---单元测试</br>
- E2E Testing---e2e测试</br>

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab9138d7d8c14a20a1c82101c7f29d28~tplv-k3u1fbpfcp-watermark.image?)

3. 选择你需要的vue版本

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e156380ff80a4e50bffbd6b21b449d1c~tplv-k3u1fbpfcp-watermark.image?)

4. 选择路由的模式（这里我输入的是n）
- 输入Y表示history模式
- 输入n表示默认模式

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a26828b8e1b243b8b33f7ca7e82bbdc2~tplv-k3u1fbpfcp-watermark.image?)

5. 选择css预处理器（这里我选择的是scss）
- 关于dart-sass可以[参考文档](https://sass.bootcss.com/dart-sass)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1c0c9f8470b4087827fe8c7cbd4479b~tplv-k3u1fbpfcp-watermark.image?)

6. 自动代码格式检测（这里我选择的是ESLint + Prettier）

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/824e0425fc3d4f7eba719b53bab896b4~tplv-k3u1fbpfcp-watermark.image?)

7. 自动代码格式检测时间（这里我选择的是Lint on save）
- Lint on save（保存时检测）
- Lint and fix on commit（提交的时候检测）

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8e59507f95d4a6f9805b10af79fbd73~tplv-k3u1fbpfcp-watermark.image?)

8. 将配置文件放在哪里（我选择的是单独文件保存）
- 单独文件保存配置文件
- 保存在package.json中

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9dcd2283965416888f2112168b017ef~tplv-k3u1fbpfcp-watermark.image?)

9. 是否记住以上配置，方便下次直接创建（我选择的是y）

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88959d7221fa4a11969833dccd6a19a4~tplv-k3u1fbpfcp-watermark.image?)

10. 为你保存的配置命名，然后选择yarn还是npm（我选择的是yarn）

## 启动项目
1. 进入目录文件
> `cd my-blog`

2. 快速通过vscode打开(不能使用此方法打开的话，乖乖导入文件)
> `code ./`

2. 启动项目

> `yarn serve`
