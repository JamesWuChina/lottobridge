#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成洞察页面所需的占位图片
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_insight_image(filename, title, size=(400, 300), bg_color=(240, 240, 240)):
    """创建洞察页面占位图片"""
    
    # 创建图片
    img = Image.new('RGB', size, bg_color)
    draw = ImageDraw.Draw(img)
    
    # 尝试加载字体
    try:
        font = ImageFont.truetype("arial.ttf", 20)
    except:
        try:
            font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 20)
        except:
            font = ImageFont.load_default()
    
    # 计算文本位置
    bbox = draw.textbbox((0, 0), title, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (size[0] - text_width) // 2
    y = (size[1] - text_height) // 2
    
    # 绘制文本
    draw.text((x, y), title, fill=(100, 100, 100), font=font)
    
    # 保存图片
    img.save(filename)
    print(f"已生成: {filename}")

def main():
    """主函数"""
    
    # 确保images目录存在
    if not os.path.exists('images'):
        os.makedirs('images')
    
    # 生成洞察页面所需的占位图片
    insight_images = [
        ('images/insight-placeholder.jpg', 'Insight Placeholder'),
        ('images/keno-analysis.jpg', 'Keno Analysis'),
        ('images/africa-digital.jpg', 'Africa Digital'),
        ('images/ai-risk-control.jpg', 'AI Risk Control'),
        ('images/blockchain-transparency.jpg', 'Blockchain Transparency'),
        ('images/japan-scratch.jpg', 'Japan Scratch'),
        ('images/latam-digital.jpg', 'Latam Digital')
    ]
    
    for filename, title in insight_images:
        create_insight_image(filename, title)
    
    print("所有洞察页面占位图片已生成完成！")

if __name__ == "__main__":
    main() 