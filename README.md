# headhunter-ui

这是一个使用 React + Vite 制作的“猎头库职位”前端练习项目。页面数据目前全部是 mock 数据，不需要后端或数据库。

## 第一次运行

1. 打开 [Node.js 官网](https://nodejs.org/)，下载并安装 LTS 长期支持版。安装后在 PowerShell 输入 `node -v`，看到版本号即成功。
2. 打开 PowerShell，进入项目文件夹：`cd "C:\Users\WIN10\Documents\ChatGPT\猎头库在线编辑器"`
3. 执行 `npm install`。它会按照 `package.json` 下载 React、Vite 等工具并生成 `node_modules`。
4. 执行 `npm run dev`，把终端显示的 `http://localhost:5173` 复制到浏览器打开。
5. 停止程序：回到运行 Vite 的窗口，按 `Ctrl + C`。

## 小白修改指南

- 职位：编辑 `src/data/jobs.js`。每个 `{ ... }` 是一条职位，复制一条并改文字即可增加。
- 筛选项目：编辑 `src/config/filters.js` 中对应的 `options` 数组。
- Logo：编辑 `src/components/Header.jsx` 中的 `apollo`。
- 顶部菜单：编辑 `src/config/filters.js` 的 `topNavItems`。
- 页面颜色：编辑 `src/styles/global.css`，主橙色是 `#ff6308`，背景是 `#eef1f9`。

页面支持搜索职位名/公司名、地点筛选、职位类别筛选、清空条件、checkbox 切换、职位收藏和详情弹窗。

## 构建检查

`npm run build` 会检查并打包项目，生成的 `dist` 文件夹不需要上传。

## 发布到 GitHub

先在 GitHub 新建一个空仓库，例如 `headhunter-ui`，再在项目目录逐行执行：

```powershell
git init
git add .
git commit -m "创建猎头库职位界面"
git branch -M main
git remote add origin https://github.com/你的用户名/headhunter-ui.git
git push -u origin main
```

`git init` 初始化仓库；`git add .` 把修改放入待提交区（`.gitignore` 会排除依赖和垃圾文件）；`git commit` 保存版本；`git branch -M main` 命名主分支；`git remote add origin` 绑定 GitHub 地址；`git push` 上传代码。把网址中的“你的用户名”替换为自己的用户名。

以后修改后执行：

```powershell
git add .
git commit -m "描述这次修改"
git push
```
