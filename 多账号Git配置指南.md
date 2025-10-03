# 多 GitHub 账号配置指南

## 📋 概述

本指南说明如何在一台电脑上管理多个 GitHub 账号，实现不同账号的 pull 和 push 操作。

## 🔧 方案一：SSH 密钥配置（推荐）

### 步骤 1: 生成多个 SSH 密钥

```bash
# 为第一个账号（suoChina）生成密钥
ssh-keygen -t rsa -b 4096 -C "suoChina@example.com" -f ~/.ssh/id_rsa_suoChina

# 为第二个账号（其他账号）生成密钥
ssh-keygen -t rsa -b 4096 -C "other@example.com" -f ~/.ssh/id_rsa_other
```

### 步骤 2: 配置 SSH Config 文件

创建或编辑 `~/.ssh/config` 文件：

```ssh
# suoChina 账号配置
Host github-suoChina
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_suoChina
    IdentitiesOnly yes

# 其他账号配置
Host github-other
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_other
    IdentitiesOnly yes
```

### 步骤 3: 添加公钥到 GitHub

```bash
# 查看 suoChina 账号的公钥
cat ~/.ssh/id_rsa_suoChina.pub

# 查看其他账号的公钥
cat ~/.ssh/id_rsa_other.pub
```

分别将公钥添加到对应的 GitHub 账号：
- suoChina 账号：https://github.com/settings/keys
- 其他账号：https://github.com/settings/keys

### 步骤 4: 测试连接

```bash
# 测试 suoChina 账号连接
ssh -T git@github-suoChina

# 测试其他账号连接
ssh -T git@github-other
```

### 步骤 5: 使用不同的 Host 克隆仓库

```bash
# 克隆 suoChina 的仓库
git clone git@github-suoChina:suoChina/hexo-blog-new.git

# 克隆其他账号的仓库
git clone git@github-other:其他用户名/其他仓库.git
```

## 🔧 方案二：Personal Access Token 配置

### 步骤 1: 生成 Token

为每个账号生成 Personal Access Token：
- suoChina 账号：https://github.com/settings/tokens
- 其他账号：https://github.com/settings/tokens

选择权限：`repo`, `workflow`

### 步骤 2: 配置全局 Git 用户信息

```bash
# 设置全局用户信息（用于默认账号）
git config --global user.name "suoChina"
git config --global user.email "suoChina@example.com"
```

### 步骤 3: 为特定仓库配置用户信息

```bash
# 进入其他账号的仓库
cd 其他账号的仓库

# 设置该仓库的用户信息
git config user.name "其他用户名"
git config user.email "其他邮箱@example.com"
```

### 步骤 4: 使用 HTTPS 克隆

```bash
# 克隆 suoChina 的仓库
git clone https://github.com/suoChina/hexo-blog-new.git

# 克隆其他账号的仓库
git clone https://github.com/其他用户名/其他仓库.git
```

### 步骤 5: 配置凭据存储

```bash
# Windows 系统
git config --global credential.helper manager-core

# 或者使用 Windows 凭据管理器
git config --global credential.helper wincred
```

## 🎯 实际使用示例

### 场景 1: 使用 SSH 密钥

```bash
# 工作流程
# 1. 克隆 suoChina 的仓库
git clone git@github-suoChina:suoChina/hexo-blog-new.git
cd hexo-blog-new

# 2. 正常操作
git add .
git commit -m "更新内容"
git push origin main

# 3. 克隆其他账号的仓库
git clone git@github-other:其他用户名/其他仓库.git
cd 其他仓库

# 4. 正常操作
git add .
git commit -m "其他账号的更新"
git push origin main
```

### 场景 2: 使用 Personal Access Token

```bash
# 工作流程
# 1. 克隆 suoChina 的仓库
git clone https://github.com/suoChina/hexo-blog-new.git
cd hexo-blog-new

# 2. 正常操作（使用 suoChina 的凭据）
git add .
git commit -m "suoChina 的更新"
git push origin main

# 3. 克隆其他账号的仓库
git clone https://github.com/其他用户名/其他仓库.git
cd 其他仓库

# 4. 设置该仓库的用户信息
git config user.name "其他用户名"
git config user.email "其他邮箱@example.com"

# 5. 正常操作（使用其他账号的凭据）
git add .
git commit -m "其他账号的更新"
git push origin main
```

## ⚠️ 注意事项

### 1. SSH 密钥方案
- ✅ 安全性高
- ✅ 使用方便
- ✅ 支持多个账号
- ❌ 配置稍复杂

### 2. Personal Access Token 方案
- ✅ 配置简单
- ✅ 支持 HTTPS
- ✅ 易于管理
- ❌ 需要定期更新 Token

### 3. 常见问题

#### 问题 1: 权限被拒绝
```bash
# 检查 SSH 密钥是否正确
ssh-add -l

# 添加密钥到 SSH agent
ssh-add ~/.ssh/id_rsa_suoChina
ssh-add ~/.ssh/id_rsa_other
```

#### 问题 2: 推送到错误的账号
```bash
# 检查当前仓库的远程地址
git remote -v

# 修改远程地址
git remote set-url origin git@github-suoChina:suoChina/hexo-blog-new.git
```

#### 问题 3: 用户信息混乱
```bash
# 检查当前仓库的用户配置
git config user.name
git config user.email

# 检查全局用户配置
git config --global user.name
git config --global user.email
```

## 🔍 验证配置

### 检查 SSH 配置
```bash
# 查看 SSH 配置
cat ~/.ssh/config

# 测试连接
ssh -T git@github-suoChina
ssh -T git@github-other
```

### 检查 Git 配置
```bash
# 查看全局配置
git config --global --list

# 查看当前仓库配置
git config --list
```

## 📚 相关链接

- [GitHub SSH 密钥文档](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Personal Access Token 文档](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [Git 凭据存储文档](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage)

---

**最后更新**: 2025-01-02  
**版本**: v1.0  
**作者**: suoChina
