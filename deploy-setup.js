#!/usr/bin/env node

/**
 * Hexo部署前准备脚本
 * 用于将stream.html复制到public目录，确保部署后链接正常工作
 */

const fs = require('fs');
const path = require('path');

// 获取项目根目录
const rootDir = path.resolve(__dirname);
const publicDir = path.join(rootDir, 'public');
const streamSource = path.join(rootDir, '..', 'stream.html');
const streamTarget = path.join(publicDir, 'stream.html');

console.log('🚀 开始准备Hexo部署...');

// 检查stream.html源文件是否存在
if (!fs.existsSync(streamSource)) {
    console.error('❌ 错误：找不到源文件 stream.html');
    console.log('   请确保 stream.html 文件位于 central-expansion 目录下');
    process.exit(1);
}

// 确保public目录存在
if (!fs.existsSync(publicDir)) {
    console.log('📁 创建 public 目录...');
    fs.mkdirSync(publicDir, { recursive: true });
}

try {
    // 复制stream.html到public目录
    fs.copyFileSync(streamSource, streamTarget);
    console.log('✅ 成功复制 stream.html 到 public 目录');
    console.log(`   源文件：${streamSource}`);
    console.log(`   目标文件：${streamTarget}`);
    
    // 验证文件是否复制成功
    if (fs.existsSync(streamTarget)) {
        const stats = fs.statSync(streamTarget);
        console.log(`📊 文件大小：${stats.size} 字节`);
        console.log('🎉 部署准备完成！现在可以运行 npx hexo deploy');
    } else {
        console.error('❌ 复制失败：目标文件不存在');
        process.exit(1);
    }
    
} catch (error) {
    console.error('❌ 复制文件时出错：', error.message);
    process.exit(1);
}
