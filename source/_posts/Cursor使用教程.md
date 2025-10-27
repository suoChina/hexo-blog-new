---
title: Cursor使用教程 - AI编程助手从入门到精通
date: 2025-10-04 12:00:00
updated: 2025-10-04 12:00:00
tags: [Cursor, AI编程, 开发工具, 教程]
categories: [AI工具教程]
description: 全面的Cursor使用教程，从基础安装到高级功能，帮助开发者快速掌握AI辅助编程
keywords: Cursor, AI编程, 代码补全, Chat, Rules, 开发工具
permalink: cursor-tutorial/
cover: /images/cursor/1749179465178.png
toc: true
comments: true
---

# Cursor使用教程 - AI编程助手从入门到精通 🚀

> 简单工作不想做？复杂工作不会做？出现错误不会解决？后端程序员不会写前端？前端程序员不会写后端？可爱的大学生要写期末作业？Cursor来帮你！本教程将带您从零开始，全面掌握这款革命性的AI编程助手。📚

![Cursor概览](/images/cursor/1749179465178.png)

## 📋 目录

- [1. Cursor简介与概述](#1-cursor简介与概述)
  - [1.1 什么是Cursor](#11-什么是cursor)
  - [1.2 核心功能特点](#12-核心功能特点)
  - [1.3 对比其他工具](#13-对比其他工具)

- [2. 安装与配置](#2-安装与配置)
  - [2.1 安装和登录 💿](#21-安装和登录-💿)
  - [2.2 无限续杯技巧 ♾️](#22-无限续杯技巧-♾️)
  - [2.3 基础配置说明 ⚙️](#23-基础配置说明-⚙️)
  - [2.4 VS Code配置迁移 🔄](#24-vs-code配置迁移-🔄)
  - [2.5 Java环境配置 ☕](#25-java环境配置-☕)

- [3. 三大核心功能](#3-三大核心功能)
  - [3.1 Tab键智能补全 ⌨️](#31-tab键智能补全-⌨️)
  - [3.2 Chat对话模式 💬](#32-chat对话模式-💬)
  - [3.3 Ctrl+K内联编辑 ✏️](#33-ctrlk内联编辑-✏️)

- [4. 精准上下文指定](#4-精准上下文指定)
  - [4.1 代码库索引 📚](#41-代码库索引-📚)
  - [4.2 Rules规则配置 📋](#42-rules规则配置-📋)
  - [4.3 @符号使用 🔍](#43-符号使用-🔍)

- [5. 实战案例：Chrome插件开发](#5-实战案例chrome插件开发)
  - [5.1 插件设计 🎨](#51-插件设计-🎨)
  - [5.2 功能实现 ⚡](#52-功能实现-⚡)
  - [5.3 调试与发布 🚀](#53-调试与发布-🚀)

## 1. Cursor简介与概述 🎯

### 1.1 什么是Cursor

Cursor 是一款功能强大的 AI 优先代码编辑器，可增强我们的开发工作流程。主要提供三个核心方向，这些功能可以无缝地协同工作，从而提高工作效率：

- 🤖 **深度集成AI模型**：不是简单地接入模型，而是让AI充当了编译器的核心交互方式。支持代码块对话、项目级对话、模型自由选择。
- 💬 **强上下文理解**：可以自动识别项目文件、代码块、错误信息等等，提供更直观准确的AI修改能力。
- 📚 **对话式开发体验**：仅需用自然语言沟通，Cursor就会根据指令完成布置的任务，使用者可以轻松扮演产品经理，让Cursor理解你的命令自行工作。

### 1.2 核心功能特点

1. **智能代码补全（Tab）**
   - 单行/多行代码智能补全
   - 代码重构和优化建议
   - 多行协同优化能力
   - 智能光标位置预测

2. **AI对话助手（Chat）**
   - Agent代理模式：自主探索和修改代码
   - Ask问答模式：获取解释和建议
   - Manual手动模式：精准编辑控制
   - 支持多种上下文引用

3. **内联编辑（Ctrl+K）**
   - 快速代码生成和修改
   - 自然语言描述转代码
   - 终端命令智能生成
   - 实时编辑预览

### 1.3 对比其他工具

**对比VS Code**
- 基于Visual Studio Code打造而成的AI编程工具
- 界面和基础操作与VS Code高度相似，无缝衔接
- 增加了强大的AI功能，提升开发效率

**对比JetBrains IDEA**
- 提供AI驱动的现代编码体验
- 可以取代JetBrains IDE的大部分功能
- 更轻量级，启动更快，资源占用更少

**对比其他AI工具**
- 原生集成，无需额外配置
- 支持多种编程语言和框架
- 强大的上下文管理能力
- 灵活的规则配置系统

## 2. 安装与配置 ⚙️

### 2.1 安装和登录 💿

#### 2.1.1 安装步骤

1. **下载安装包**
   - 访问 [cursor.com](https://cursor.com/) 并点击 "下载" 按钮
   - 选择对应操作系统版本：
- Windows: cursor-setup.exe
- macOS: cursor.dmg
- Linux: cursor.AppImage

2. **安装过程**
   - 运行安装程序并等待安装完成
   - 通过桌面快捷方式或从应用菜单启动Cursor

#### 2.1.2 登录账号

1. **账号注册**
   - 点击 "注册" 或 "登录" 按钮
   - 可以选择使用邮件，或者注册Google或GitHub账号
   - 新用户将获得14天免费试用期

2. **账号验证**
   - 验证邮箱地址
   - 完成初始设置向导
   - 开始使用Cursor

### 2.2 基础配置说明 ⚙️

#### 2.2.1 配置入口对比

| **对比项**       | **Cursor Settings**                    | **Editor Settings**                |
| ---------------- | -------------------------------------- | ---------------------------------- |
| **功能定位**     | 管理 AI 相关功能和 Cursor 特有设置     | 调整编辑器基础行为和外观           |
| **继承性**       | 与 VS Code 差异较大（Cursor 独有功能） | 大部分继承自 VS Code（如主题设置） |
| **影响范围**     | 影响 AI 代码生成、分析、对话的效果     | 影响代码编辑体验（如排版、颜色）   |
| **典型配置示例** | 调整 AI 模型参数、代码库索引路径       | 修改字体、启用自动保存、更改主题   |

#### 2.2.2 Cursor AI相关设置

通过齿轮图标或 `Cmd/Ctrl + Shift + J` 开启Cursor设置，可进行以下配置：

1. **General（常规）**
   - 账户相关设置和配置同步
   - VS Code配置导入
   - 隐私配置管理

2. **Features（功能）**
   - AI代码补全开关
   - 对话模式（Ask、Edit、Agent）设置
   - 功能参数微调

3. **Models（模型）**
   - AI模型选择（Claude 3.5 Sonnet）
   - API Key配置
   - 模型参数调整

4. **Rules（规则）**
   - 代码检查规则
   - 代码格式规范
   - 操作规则设置

5. **Indexing（索引)**
   - 代码库索引路径
   - 排除规则设置
   - 索引优化配置


#### 2.2.3 编辑器基础设置

1. **访问设置**
   - 通过命令面板：`Cmd/Ctrl + Shift + P`
   - 输入："Preferences: Open Settings (UI)"
   - 或直接使用快捷键：`Cmd/Ctrl + ,`

2. **常用设置项**
   ![编辑器设置](/images/cursor/1748935489544.png)
   - 主题和外观
   - 字体和颜色
   - 编辑器行为
   - 文件处理

3. **设置作用域**
   - **User（用户）**：全局性设置，适用于所有工作空间
   - **Workspace（工作空间）**：仅对当前项目生效

### 2.3 VS Code配置迁移 🔄

#### 2.3.1 一键导入配置

1. **导入步骤**
   - 打开Cursor设置（`Cmd/Ctrl + Shift + J`）
   - 导航到：常规 > 帐户
   - 点击"VS Code Import"下的"导入"按钮
   ![VS Code导入](/images/cursor/1748919880700.png)

2. **导入内容**
   - Extensions（扩展）
   - Themes（主题）
   - Settings（设置）
   - Keybindings（键绑定）

> **注意**：并非所有VS Code扩展都与Cursor兼容。一些依赖VS Code特定API的插件可能导致导入失败。

#### 2.3.2 手动配置迁移

1. **导出VS Code配置**
   - 打开命令面板：`Cmd/Ctrl + Shift + P`
   - 搜索："Preferences: Open Profiles (UI)"
   - 选择要导出的配置文件
   - 导出到本地或GitHub Gist

2. **导入到Cursor**
   - 打开命令面板：`Cmd/Ctrl + Shift + P`
   - 搜索："Preferences: Open Profiles (UI)"
   - 选择"Import Profile"
   - 选择本地文件或粘贴Gist URL

### 2.4 Java环境配置 ☕

#### 2.4.1 环境配置方式

1. **自动读取配置**
   - 系统环境变量中的`JAVA_HOME`和`MAVEN_HOME`
   - 自动识别并应用配置
   - 用于代码编译和项目构建

2. **手动配置**
   ```json
   {
       "java.home": "C:/Program Files/Java/jdk-17",
       "java.configuration.maven.userSettings": "D:/maven/apache-maven-3.8.8-bin/apache-maven-3.8.8/conf/settings.xml"
   }
   ```

#### 2.4.2 Java开发插件

1. **安装方式**
   ![Java插件](/images/cursor/1748938160832.png)
   - 按`Ctrl + Shift + X`打开扩展面板
   - 搜索并安装"Extension Pack for Java"

2. **包含插件**
   - Language Support for Java(TM) by Red Hat
   - Debugger for Java
   - Maven for Java
   - Test Runner for Java
   - Project Manager for Java
   - Gradle for Java

## 3. 三大核心功能 🚀

### 3.1 Tab键智能补全 ⌨️

#### 3.1.1 功能概述

Tab键在Cursor中具有强大的代码自动补全功能，基于选定模型，能根据代码上下文自动预测并生成代码补全建议和代码修复重构。

> 提示：`Tab`键接受建议，`Esc`键拒绝建议。要逐字部分接受建议，请按`Ctrl/⌘ + →`。

#### 3.1.2 主要功能

1. **单行/多行代码补全**
   ```java
   //需求：写一个工具类计算数组平均值
   public class ArrayUtils {
       // 按tab会完成补全
   }
   ```
   补全后：
   ```java
   public class ArrayUtils {
       public static void main(String[] args) {
           int[] nums = {1,2,3,4,5,6,7,8,9,10};
           System.out.println(average(nums));
       }
       public static double average(int[] nums) {
           int sum = 0;
           for (int num : nums) {
               sum += num;
           }
           return (double) sum / nums.length;
       }
   }
   ```

2. **智能代码重写**
   ```java
   // 使用Stream重构
   List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
   List<Integer> evenNumbers = new ArrayList<>();
   for (int num : numbers) {
       if (num % 2 == 0) {
           evenNumbers.add(num);
       }
   }
   ```
   重构后：
   ```java
   List<Integer> evenNumbers = numbers.stream()
       .filter(num -> num % 2 == 0)
       .collect(Collectors.toList());
   ```

3. **多行协同优化**
   ```java
   int count; // 普通变量
   String name; // 姓名
   boolean isValid; // 是否有效
   double price; // 价格
   //tab 会继续联想变量类型
   ```

4. **光标位置预测**
   ![光标预测](/images/cursor/1749222927512.png)

#### 3.1.3 Tab相关配置

配置位置：`cursor settings > features > tab`

1. **基础功能开关**
   - 启用/禁用Cursor Tab功能
   - 控制是否在注释中提供建议
   - 显示空白建议的控制

2. **接受方式设置**
   - 完整接受：`Tab`键
   - 部分接受：`Ctrl+→`
   - 拒绝建议：`Esc`键

3. **特殊功能配置**
   - TypeScript自动导入
   - Python自动导入（测试版）
   - 空白建议显示控制

### 3.2 Chat对话模式 💬

#### 3.2.1 功能概述

Chat是Cursor的AI助手，位于侧边栏中，可让您通过自然语言与代码库进行交互。您可以提出问题、请求代码编辑、获取终端命令建议等。

![Chat概览](/images/cursor/overview.mp4)

**主要功能：**
- 深入理解代码库并进行修改
- 帮助重构和优化代码
- 从零开始搭建项目
- 错误定位和修复

#### 3.2.2 两种对话模式

1. **Agent代理模式（默认）**
   ![Agent模式](/images/cursor/agent.png)
   - 自主探索和理解项目代码
   - 可以直接进行代码修改
   - 启用所有工具权限
   - 识别完整项目结构

2. **Ask问答模式**
   ![Ask模式](/images/cursor/ask.png)
   - "只读"模式，不修改代码
   - 获取代码解释和建议
   - 理解项目结构
   - 适合学习和探索

#### 3.2.3 使用技巧

1. **快速访问**
   - 使用`⌘+L`（Mac）或`Ctrl+L`（Windows/Linux）
   - 使用自然语言描述需求
   - 提供清晰的上下文信息

2. **代码编辑选项**
   - **Review**：查看差异
   ![差异查看](/images/cursor/1749005624183.png)
   
   - **Apply**：应用更改
   ![应用更改](/images/cursor/1749005659532.png)
   
   - **Accept/Reject**：确认或放弃
   ![确认修改](/images/cursor/1749005825535.png)

3. **历史和检查点**
   - 查看历史记录
   ![历史记录](/images/cursor/1749006388841.png)
   
   - 创建新会话
   ![新会话](/images/cursor/1749006447983.png)
   
   - 恢复检查点
   ![检查点](/images/cursor/1749006156466.png)

#### 3.2.4 配置说明

1. **基础设置**
   - 默认对话模式选择
   - 文字大小调整
   - 自动刷新和滚动

2. **Agent模式设置**
   - 自动运行命令
   - 文件保护机制
   - 命令白名单/黑名单

3. **安全设置**
   - 文件删除保护
   - 工作区外保护
   - 点文件保护

### 3.3 Ctrl+K内联编辑 ✏️

#### 3.3.1 功能概述

内联编辑（Cmd/Ctrl+K）允许直接在编辑器窗口中生成新代码或编辑现有代码，特别适合已知并需要精准修改文件内容的场景。

![内联编辑](/images/cursor/regular.png)

#### 3.3.2 使用模式

1. **内联生成**
   - 无选中代码时按`Ctrl/Cmd K`
   - 在提示栏输入需求
   - AI直接生成相应代码
   
   示例：
   ```
   生成一个带点击动画的按钮组件，用JavaScript实现，点击后控制台打印次数
   ```
   ![生成效果](/images/cursor/1749009173764.png)

2. **内联编辑**
   - 选中要修改的代码
   - 按`Ctrl/Cmd K`
   - 在提示栏描述修改需求
   
   示例：
   ```
   方法添加注释和每行代码添加注释说明
   ```
   ![编辑前](/images/cursor/1749009465994.png)
   ![编辑后](/images/cursor/1749009494441.png)

#### 3.3.3 终端命令生成

在Cursor终端中使用`Cmd/Ctrl K`可以：
- 通过自然语言生成命令
- 按`Esc`接受命令
- 使用`Ctrl/⌘ + Enter`直接运行

![终端命令](/images/cursor/1749009824073.png)

#### 3.3.4 最佳实践

1. **提示词技巧**
   - 提供明确的任务类型
   - 包含具体的技术要求
   - 说明代码风格偏好
   - 指定性能或其他约束

2. **使用场景**
   - 生成新的代码片段
   - 重构现有代码
   - 添加注释和文档
   - 修复代码问题
   - 优化代码性能

3. **注意事项**
   - 检查生成代码的正确性
   - 确保代码风格一致性
   - 验证功能完整性
   - 考虑性能影响
## 4. 精准上下文指定 🎯

### 4.1 代码库索引 📚

#### 4.1.1 概念和作用

代码库索引是Cursor理解项目的基础。每个Cursor实例在打开项目时都会初始化该工作区的索引，并在添加新文件时自动更新索引。

主要作用：
- 快速"读懂"项目结构
- 定位相关代码
- 理解代码关系
- 生成更贴合项目的代码

#### 4.1.2 索引配置

![索引配置](/images/cursor/codebase-indexing.png)

配置位置：`cursor settings > indexing`

使用示例：
```
查看当前项目结构，并使用文字图形形式罗列出来！
```

![索引效果](/images/cursor/1749018096565.png)

#### 4.1.3 忽略文件配置

1. **配置方式**
   - 创建`.cursorignore`文件
   - 使用配置界面创建
   ![忽略配置](/images/cursor/1749020017720.png)

2. **配置示例**
   ```
   # Add directories or file patterns to ignore during indexing
   index.html
   style.css
   main.js
   ```

3. **效果验证**
   ![忽略效果](/images/cursor/1749020220373.png)

### 4.2 Rules规则配置 📋

#### 4.2.1 规则介绍

Rules用于给Cursor AI功能添加规则和限制，确保生成的代码符合团队规范。

**主要作用：**
- 约束代码风格
- 限定技术选型
- 指定核心参数

**规则类型对比：**

| **维度**     | **项目规则（Project Rules）**                | **用户规则（User Rules）**           |
| ------------ | -------------------------------------------- | ------------------------------------ |
| **作用范围** | 仅对当前项目生效，团队成员共享相同规则       | 对所有项目生效，个人专属配置         |
| **存储位置** | 项目根目录下的 `.cursor/rules/随意.mdc` 文件 | 用户配置目录（如 `~/.cursor/rules`） |
| **同步方式** | 随项目代码提交到版本库（如 Git），团队共享   | 仅本地生效，不随项目同步             |
| **适用场景** | 统一团队编码规范（如函数注释格式、依赖版本） | 个人习惯（如快捷键、AI 响应风格）    |

#### 4.2.2 规则配置示例

1. **创建规则文件**
   ![创建规则](/images/cursor/1749025679441.png)

2. **编写规则内容**
```markdown
   ---
   description: "团队前端项目规范"
   priority: 1000
   ---
   
   # 代码风格
   1. 函数必须包含 JSDoc 注释
   2. 禁止使用 `var`，统一用 `const`/`let`
   3. 函数命名必须添加 zwf_前缀， 例如：zwf_login
   
   # 依赖管理
   - 优先使用项目内已有的工具函数
   - 禁止引入低版本的 lodash（<4.0.0）
```

3. **规则生效效果**
   ![规则效果](/images/cursor/1749026002745.png)

#### 4.2.3 RIPER-5 高级规则框架

**RIPER-5** 是一套为高级AI助手设计的严格行为协议和工作流框架，特别适合在Cursor中使用。它通过强制性的、分阶段的流程来约束AI的行为，确保执行复杂编码任务时的每一步操作都安全、可控且符合预期。

**GitHub仓库：** [NeekChaw/RIPER-5](https://github.com/NeekChaw/RIPER-5)

**核心特点：**
- 🎯 **行为约束**：通过严格的工作流约束AI行为
- 🔒 **安全可控**：确保AI操作的安全性和可预测性
- 📋 **分阶段执行**：将复杂任务分解为可管理的步骤
- 🛡️ **错误预防**：避免AI随意创建文件、忽视现有架构等问题

**RIPER-5 规则配置示例：**

```markdown
---
description: "RIPER-5 AI编码行为协议"
priority: 2000
---

# RIPER-5 行为协议

## 核心原则
1. 在执行任何编码任务前，必须先进行需求分析和架构设计
2. 严格遵循五阶段工作流：分析(Research) → 规划(Plan) → 实施(Implement) → 验证(Verify) → 优化(Optimize)
3. 禁止随意创建新文件，必须先检查现有代码结构
4. 所有代码修改必须包含详细的注释和文档

## 工作流要求
- 分析阶段：深入理解需求和现有代码结构
- 规划阶段：制定详细的实施计划和技术方案
- 实施阶段：严格按照规划执行，避免偏离目标
- 验证阶段：全面测试和代码审查
- 优化阶段：性能优化和代码重构

## 代码规范
- 所有函数必须包含JSDoc注释
- 变量命名必须具有描述性
- 代码结构必须清晰，避免过度嵌套
- 必须考虑错误处理和边界情况
```

**Claude Code 专用提示词集合：**

RIPER-5仓库还包含多个针对特定场景的优化提示词：

| 模块 | 描述 | 适用场景 |
|------|------|----------|
| **Kiro需求收集与规划** | 三阶段工作流，将模糊想法转化为完整开发文档 | 项目规划和需求分析 |
| **Linux之父帮你重构代码** | 模拟Linus Torvalds的思维模式审查代码 | 代码审查和重构 |
| **让Claude更靠谱的Workflow** | 五步工作流约束AI行为 | 日常开发任务 |
| **专业高效提交Git** | Commit-as-Prompt理念，结构化提交信息 | Git版本管理 |
| **超深度思考** | 多代理协作工作流，模拟专家团队 | 复杂问题解决 |

**使用建议：**
1. 将RIPER-5规则设置为项目规则，确保团队统一使用
2. 根据具体任务选择合适的Claude Code提示词
3. 定期更新和优化规则内容
4. 结合团队实际情况调整规则细节

### 4.3 @符号使用 🔍

#### 4.3.1 符号类型

![符号基础](/images/cursor/@-symbols-basics.png)

支持的@符号：
- @Files - 引用特定文件
- @Folders - 引用整个文件夹
- @Code - 引用代码片段
- @Docs - 访问文档
- @Git - 访问git历史
- @Web - 参考网络资源
- @Lint Errors - 引用lint错误

#### 4.3.2 使用示例

1. **@Files使用**
   ```
   帮我总结下 @main.js 中包含哪些方法？
   ```
   ![Files使用](/images/cursor/1749032749858.png)

2. **@Code使用**
   ```
   帮我逐行解释下 @zwf_register 代码的含义！
   ```
   ![Code使用](/images/cursor/1749033073362.png)

3. **@Docs使用**
   ![Docs配置](/images/cursor/@docs-add.png)
   ```
   基于 @MyBatis-plus 查询下乐观锁插件如何使用
   ```
   ![Docs使用](/images/cursor/1749088442648.png)

4. **@Web使用**
   ```
   @Web React 19 的最新性能优化
   ```
   ![Web使用](/images/cursor/1749089800111.png)

#### 4.3.3 最佳实践

1. **选择合适的符号**
   - @Files：需要访问完整文件
   - @Code：引用特定代码片段
   - @Docs：查询官方文档
   - @Web：获取最新信息

2. **提供准确上下文**
   - 指定正确的文件路径
   - 选择相关的代码片段
   - 引用适当的文档
   - 使用精确的搜索词

3. **组合使用技巧**
   - 多个符号配合使用
   - 按需提供上下文
   - 避免过度引用
   - 保持提示简洁

## 5. 实战案例：Chrome插件开发 🚀

### 5.1 插件设计 🎨

#### 5.1.1 需求分析

**功能需求：**
1. 解释选中的段落或关键词
2. 翻译选中的段落或关键词（中英互译）
3. 朗读选中的段落或关键字
4. 润色和替换选中的文本文案

**细节要求：**
1. 选中文本时显示悬浮插件
2. 结果显示在悬浮窗口下方
3. 翻译支持语言选择
4. 润色结果可编辑和替换
5. 使用Kimi API实现核心功能
6. 使用Chrome内置API实现朗读

#### 5.1.2 UI设计

**基础悬浮菜单：**
```
+------------------------+
|     功能按钮组         |
+------------------------+
| [解释] [翻译] [朗读] [润色] |
+------------------------+
```

**功能展示区域：**
```
+------------------------+
|     功能按钮组         |
+------------------------+
| [解释] [翻译] [朗读] [润色] |
+------------------------+
|     结果展示区域        |
|                        |
|                        |
+------------------------+
```

### 5.2 功能实现 ⚡

#### 5.2.1 项目初始化

1. **创建项目结构**
   ```
   chrome-plugin/
   ├── manifest.json
   ├── popup/
   │   ├── popup.html
   │   ├── popup.css
   │   └── popup.js
   ├── content/
   │   ├── content.css
   │   └── content.js
   ├── background/
   │   └── background.js
   └── config.js
   ```

2. **配置manifest.json**
```json
   {
     "manifest_version": 3,
     "name": "AI文本助手",
     "version": "1.0",
     "description": "一款强大的文本处理Chrome插件",
     "permissions": [
       "activeTab",
       "storage",
       "tts"
     ],
     "action": {
       "default_popup": "popup/popup.html"
     },
     "content_scripts": [
       {
         "matches": ["<all_urls>"],
         "css": ["content/content.css"],
         "js": ["content/content.js"]
       }
     ],
     "background": {
       "service_worker": "background/background.js"
     }
   }
```

#### 5.2.2 核心功能实现

1. **Kimi API配置**
   ```javascript
   // config.js
   const config = {
       kimi: {
           apiUrl: 'https://api.moonshot.cn/v1',
           apiKey: 'YOUR_KIMI_API_KEY'
       },
       defaults: {
           translationTarget: 'zh',
           speechLanguage: 'zh'
       }
   };
   ```

2. **文本选择监听**
   ```javascript
   // content.js
   document.addEventListener('mouseup', function(e) {
       const selectedText = window.getSelection().toString().trim();
       if (selectedText) {
           showToolbar(e.pageX, e.pageY, selectedText);
       }
   });
   ```

3. **功能实现示例**
   ```javascript
   // 文本解释
   async function explainText(text) {
       const response = await fetch(`${config.kimi.apiUrl}/explain`, {
           method: 'POST',
           headers: {
               'Authorization': `Bearer ${config.kimi.apiKey}`,
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({ text })
       });
       return response.json();
   }
   ```

### 5.3 调试与发布 🚀

#### 5.3.1 本地调试

1. **加载插件**
   - 打开Chrome扩展程序页面
   - 启用开发者模式
   - 加载已解压的扩展程序
   - 选择插件目录

2. **调试技巧**
   - 使用Chrome DevTools
   - 查看Console输出
   - 测试各项功能
   - 检查API响应

#### 5.3.2 问题修复

1. **图片资源问题**
   ![图片错误](/images/cursor/1749113898720.png)
   - 添加必要的图标文件
   - 确保路径正确

2. **模块导入错误**
   ![导入错误](/images/cursor/1749114738303.png)
   ```javascript
   // 修改为
   import { config } from './config.js';
   // 改为
   const config = window.config;
   ```

3. **功能验证**
   ![功能测试](/images/cursor/1749114867360.png)
   - 测试文本选择
   - 验证API调用
   - 检查UI显示
   - 确认功能正常

## 📚 延伸阅读

- [Git操作指南](/git操作指南/) - 学习版本控制基础
- [函数式编程](/函数式编程/) - 提升代码质量和可维护性
- [近期规划](/20251002近期规划_新/) - 了解学习路线图

## 💡 学习建议

1. **循序渐进**
   - 先掌握基础功能(Tab补全、Chat对话)
   - 再学习高级特性(Rules、@符号)
   - 最后尝试实战项目

2. **实践为主**
   - 在日常开发中多使用
   - 从简单任务开始
   - 逐步挑战复杂项目

3. **善用文档**
   - 经常查阅官方文档
   - 关注版本更新
   - 参与社区讨论

4. **知识整合**
   - 结合版本控制(Git)
   - 配合函数式编程思想
   - 融入开发工作流

## 🔗 相关资源

1. **官方资源**
   - [Cursor官网](https://cursor.sh)
   - [Cursor文档](https://cursor.sh/docs)
   - [GitHub仓库](https://github.com/getcursor/cursor)

2. **社区资源**
   - [Discord社区](https://discord.gg/cursor)
   - [Reddit论坛](https://www.reddit.com/r/cursor)
   - [Stack Overflow](https://stackoverflow.com/questions/tagged/cursor-editor)

3. **中文资源**
   - [掘金专栏](https://juejin.cn/tag/Cursor)
   - [知乎话题](https://www.zhihu.com/topic/cursor)
   - [B站教程](https://search.bilibili.com/all?keyword=cursor%20ai)