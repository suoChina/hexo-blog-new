# 🚀 Hexo博客部署指南

## 📋 部署前准备

本博客包含一个Stream API速查表（stream.html），需要特殊处理以确保部署后链接正常工作。

### 🔧 自动部署（推荐）

使用以下命令进行一键部署：

```bash
npm run deploy
```

这个命令会自动：
1. 将 `stream.html` 复制到 `public` 目录
2. 执行 `hexo deploy` 部署到GitHub

### 🛠️ 手动部署

如果需要分步执行：

```bash
# 1. 准备stream.html文件
npm run deploy:setup

# 2. 生成静态文件
npx hexo generate

# 3. 部署到GitHub
npx hexo deploy
```

## 📁 文件结构说明

```
hexo-blog-new/
├── source/
│   └── _posts/
│       └── 函数式编程.md    # 包含stream.html的链接
├── public/
│   └── stream.html         # 部署时自动复制到这里
├── deploy-setup.js         # 部署准备脚本
└── package.json           # 包含部署脚本
```

## 🔗 链接说明

博客中的Stream API链接使用绝对路径 `/stream.html`，这样部署后可以正确访问：
- 本地开发：`http://localhost:4000/stream.html`
- 生产环境：`https://suochina.github.io/stream.html`

## ⚠️ 注意事项

1. **首次部署**：确保GitHub仓库已正确配置
2. **文件更新**：每次更新stream.html后，需要重新运行部署命令
3. **路径检查**：部署后请检查链接是否正常工作

## 🐛 故障排除

### 问题1：stream.html链接404
**解决方案**：运行 `npm run deploy:setup` 重新复制文件

### 问题2：部署失败
**解决方案**：检查GitHub仓库权限和网络连接

### 问题3：链接路径错误
**解决方案**：确认使用绝对路径 `/stream.html` 而不是相对路径

## 📞 技术支持

如有问题，请检查：
1. Node.js版本是否兼容
2. Hexo插件是否正确安装
3. GitHub仓库配置是否正确
