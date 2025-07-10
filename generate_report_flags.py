from PIL import Image, ImageDraw, ImageFont

# 图片参数
WIDTH, HEIGHT = 400, 240
FONT_SIZE = 48
FONT_PATH = "arial.ttf"  # Windows下常见字体

# 国家配色和标签
flags = [
    ("report-uzbekistan.jpg", (30, 182, 231), (255, 255, 255), (61, 181, 74), "乌兹别克斯坦"),
    ("report-nigeria.jpg", (0, 135, 83), (255, 255, 255), (0, 135, 83), "尼日利亚"),
    ("report-vietnam.jpg", (218, 37, 29), (255, 255, 0), (218, 37, 29), "越南"),
    ("report-mexico.jpg", (0, 104, 71), (255, 255, 255), (206, 17, 38), "墨西哥"),
    ("report-philippines.jpg", (0, 56, 168), (255, 255, 255), (206, 17, 38), "菲律宾"),
    ("report-kenya.jpg", (61, 181, 74), (255, 255, 255), (255, 0, 0), "肯尼亚"),
]

for filename, color1, color2, color3, label in flags:
    img = Image.new("RGB", (WIDTH, HEIGHT), color1)
    draw = ImageDraw.Draw(img)
    # 三色条
    draw.rectangle([0, HEIGHT//3, WIDTH, 2*HEIGHT//3], fill=color2)
    draw.rectangle([0, 2*HEIGHT//3, WIDTH, HEIGHT], fill=color3)
    # 文字
    try:
        font = ImageFont.truetype(FONT_PATH, FONT_SIZE)
    except:
        font = ImageFont.load_default()
    w, h = draw.textsize(label, font=font)
    draw.text(((WIDTH-w)//2, (HEIGHT-h)//2), label, fill=(255,255,255), font=font)
    img.save(f"images/{filename}") 