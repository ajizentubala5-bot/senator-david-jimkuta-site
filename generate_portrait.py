from PIL import Image, ImageDraw, ImageFont

out = r'C:\Users\DELL\Documents\senator-david-jimkuta-site\assets\jimkuta-portrait.jpg'
img = Image.new('RGB', (1200, 1200), (18, 31, 52))
draw = ImageDraw.Draw(img)

for y in range(0, 1200, 4):
    color = (20 + int((y / 1200) * 40), 35 + int((y / 1200) * 55), 70 + int((y / 1200) * 90))
    draw.line((0, y, 1200, y), fill=color)

for y in range(0, 1200, 160):
    if y < 400:
        draw.rectangle((0, y, 1200, y + 80), fill=(17, 31, 52))
    elif y < 800:
        draw.rectangle((0, y, 1200, y + 80), fill=(0, 118, 65))
    else:
        draw.rectangle((0, y, 1200, y + 80), fill=(255, 255, 255))

shirt = (123, 207, 220)
draw.ellipse((350, 220, 850, 910), fill=shirt)
draw.rectangle((430, 540, 770, 1000), fill=shirt)
draw.rectangle((455, 700, 745, 980), fill=shirt)

skin = (210, 170, 130)
neck = (190, 147, 112)
draw.ellipse((430, 180, 770, 620), fill=skin)
draw.rectangle((535, 500, 665, 640), fill=neck)

cap = (20, 18, 20)
draw.ellipse((400, 120, 800, 350), fill=cap)
draw.rectangle((420, 140, 780, 260), fill=cap)

for x in (500, 700):
    draw.ellipse((x-22, 350, x+22, 390), fill=(255, 255, 255))
    draw.ellipse((x-10, 360, x+10, 380), fill=(17, 17, 17))

draw.arc((560, 380, 640, 460), start=140, end=360, fill=(120, 96, 80), width=8)
draw.arc((520, 430, 680, 520), start=25, end=155, fill=(140, 90, 80), width=8)

for x1, x2 in [(410, 520), (680, 790)]:
    draw.rectangle((x1, 620, x2, 700), fill=(26, 36, 52), outline=(26, 36, 52))

text_color = (255, 255, 255)
name = 'Sen. David S.U Jimkuta'
sub = 'Chairman Senate Committee on FCT and Ancillary Matters'
sub2 = 'Senator Representing Taraba South'

font_path = r'C:\Windows\Fonts\arial.ttf'
try:
    name_font = ImageFont.truetype(font_path, 76)
    sub_font = ImageFont.truetype(font_path, 32)
except Exception:
    name_font = ImageFont.load_default()
    sub_font = ImageFont.load_default()

bbox = draw.textbbox((0, 0), name, font=name_font)
name_w = bbox[2] - bbox[0]
name_x = (1200 - name_w) / 2
text_y = 850

draw.text((name_x, text_y), name, fill=text_color, font=name_font)
draw.text((120, text_y + 110), sub, fill=(255, 255, 255), font=sub_font)
draw.text((200, text_y + 155), sub2, fill=(255, 255, 255), font=sub_font)

img.save(out, quality=95)
print('Saved:', out)
