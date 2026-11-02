from PIL import Image, ImageDraw

W, H = 1200, 1200
img = Image.new('RGB', (W, H), '#f5efe5')
d = ImageDraw.Draw(img)

for y in range(0, H, 140):
    fill = '#0b2235' if (y // 140) % 2 == 0 else '#d9d3c5'
    d.rectangle([0, y, W, y + 140], fill=fill)

for y in range(520, H, 70):
    fill = (25, 125, 90) if (y // 70) % 2 == 0 else (30, 67, 101)
    d.rectangle([0, y, W, y + 50], fill=fill)

shirt = Image.new('RGB', (W, H), 'white')
sd = ImageDraw.Draw(shirt)
sd.ellipse((220, 430, 980, 1170), fill='#9bddf9')
for x in range(0, W, 34):
    fill = (100, 160, 190) if (x // 34) % 2 == 0 else (130, 211, 228)
    sd.rectangle([x, 370, x + 18, H], fill=fill)

mask = Image.new('L', (W, H), 0)
md = ImageDraw.Draw(mask)
md.ellipse((200, 420, 1000, 1170), fill=255)
img.paste(shirt, (0, 0), mask)

head_mask = Image.new('L', (W, H), 0)
hd = ImageDraw.Draw(head_mask)
hd.ellipse((260, 140, 940, 810), fill=255)

face = Image.new('RGBA', (W, H), (0, 0, 0, 0))
fd = ImageDraw.Draw(face)
fd.ellipse((260, 140, 940, 810), fill=(224, 184, 148, 255))
fd.rectangle((430, 660, 770, 900), fill=(224, 184, 148, 255))
fd.ellipse((300, 365, 355, 440), fill=(216, 167, 127, 255))
fd.ellipse((845, 365, 900, 440), fill=(216, 167, 127, 255))
fd.ellipse((260, 110, 940, 430), fill=(16, 24, 32, 255))
fd.ellipse((330, 80, 870, 325), fill=(16, 24, 32, 255))
fd.rectangle((450, 40, 750, 190), fill=(11, 19, 32, 255))
fd.ellipse((520, 420, 680, 520), fill=(220, 170, 150, 255))
fd.rectangle((565, 330, 635, 490), fill=(215, 162, 123, 255))
fd.ellipse((415, 350, 495, 430), fill=(255, 255, 255, 255))
fd.ellipse((700, 350, 780, 430), fill=(255, 255, 255, 255))
fd.ellipse((445, 375, 470, 405), fill=(27, 27, 27, 255))
fd.ellipse((730, 375, 755, 405), fill=(27, 27, 27, 255))
fd.arc((420, 470, 780, 620), start=170, end=10, fill=(122, 77, 56, 255), width=12)
fd.arc((390, 480, 810, 640), start=200, end=-20, fill=(220, 164, 124, 255), width=8)
fd.rectangle((530, 780, 670, 920), fill=(231, 247, 255, 255))
fd.polygon([(580, 780), (625, 820), (590, 990), (540, 930)], fill=(29, 68, 97, 255))

# Soft highlights to give the illustration more depth
for cx, cy, r in [(510, 300, 70), (690, 300, 70)]:
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(255, 255, 255, 60))
    face = Image.alpha_composite(face, glow)

img.paste(face, (0, 0), head_mask)
img = img.crop((150, 0, 1050, 1200)).resize((1200, 1200), Image.LANCZOS)
img.save('assets/jimkuta-portrait.jpg', quality=92)
print('updated assets/jimkuta-portrait.jpg')
