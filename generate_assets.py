import os
from PIL import Image, ImageDraw, ImageFont
import math

public_dir = r"d:\all apps\chothani-foundation\public\images"
os.makedirs(public_dir, exist_ok=True)

# Color constants extracted from live screenshots
TEAL = (53, 104, 119)       # #356877 - Primary logo text, section headings
DARK_TEAL = (37, 74, 86)   # #254A56 - Why section overlay
LIGHT_TEAL = (89, 147, 162) # #5993A2 - Accent teal
GOLD = (223, 165, 40)       # #DFA528 - Rising sun, gold hero text, buttons, icons
DARK_GOLD = (196, 136, 30)  # #C4881E - Button hover
DARK_BG = (26, 29, 36)      # #1A1D24 - Footer & Be Part of Legacy section
WHITE = (255, 255, 255)
INK = (45, 55, 72)          # #2D3748 - Body text

def draw_rising_sun(draw, center_x, center_y, radius, gold_color=GOLD):
    # Draw sun core (half circle)
    draw.chord([center_x - radius, center_y - radius, center_x + radius, center_y + radius], start=180, end=360, fill=gold_color)
    # Draw radiating sun rays
    num_rays = 11
    for i in range(num_rays):
        angle_deg = 180 + i * (180 / (num_rays - 1))
        angle_rad = math.radians(angle_deg)
        inner_r = radius + 8
        outer_r = radius + 28 if i % 2 == 0 else radius + 20
        x1 = center_x + inner_r * math.cos(angle_rad)
        y1 = center_y + inner_r * math.sin(angle_rad)
        x2 = center_x + outer_r * math.cos(angle_rad)
        y2 = center_y + outer_r * math.sin(angle_rad)
        draw.line([x1, y1, x2, y2], fill=gold_color, width=4)

def create_photo_1():
    # Photo 1: Square white card logo graphic with Rising Sun & Teal wordmark (800x800)
    img = Image.new("RGB", (800, 800), WHITE)
    draw = ImageDraw.Draw(img)
    
    # Outer subtle shadow card
    draw.rectangle([40, 40, 760, 760], fill=WHITE, outline=(230, 235, 240), width=4)
    
    # Draw Rising Sun
    draw_rising_sun(draw, 400, 320, 90)
    
    try:
        font_title = ImageFont.truetype("georgia.ttf", 64)
        font_sub = ImageFont.truetype("arial.ttf", 36)
        font_tagline = ImageFont.truetype("arial.ttf", 24)
    except:
        font_title = font_sub = font_tagline = ImageFont.load_default()
        
    draw.text((400, 420), "CHOTHANI", fill=TEAL, font=font_title, anchor="mm")
    draw.text((400, 490), "FOUNDATION", fill=TEAL, font=font_sub, anchor="mm")
    draw.text((400, 550), "COMPASSION • SERVICE • LEGACY", fill=GOLD, font=font_tagline, anchor="mm")
    
    img.save(os.path.join(public_dir, "photo-1.jpg"), quality=95)

def create_photo_2():
    # Photo 2: Be Part of the Legacy (1200x800) - White brick texture with gold/teal logo
    img = Image.new("RGB", (1200, 800), (242, 244, 245))
    draw = ImageDraw.Draw(img)
    
    # Brick pattern background simulation
    for y in range(0, 800, 50):
        draw.line([0, y, 1200, y], fill=(225, 228, 232), width=2)
        offset = 50 if (y // 50) % 2 == 1 else 0
        for x in range(offset, 1200, 120):
            draw.line([x, y, x, y + 50], fill=(225, 228, 232), width=2)
            
    # Center painted logo
    draw.rectangle([300, 200, 900, 600], fill=WHITE, outline=TEAL, width=3)
    draw_rising_sun(draw, 600, 350, 70)
    
    try:
        font_title = ImageFont.truetype("georgia.ttf", 52)
        font_sub = ImageFont.truetype("arial.ttf", 28)
    except:
        font_title = font_sub = ImageFont.load_default()
        
    draw.text((600, 440), "CHOTHANI", fill=TEAL, font=font_title, anchor="mm")
    draw.text((600, 500), "FOUNDATION", fill=TEAL, font=font_sub, anchor="mm")
    
    img.save(os.path.join(public_dir, "photo-2.jpg"), quality=95)

def create_photo_3():
    # Photo 3: Family & Governance (1200x800) - Teal background with gold seal
    img = Image.new("RGB", (1200, 800), TEAL)
    draw = ImageDraw.Draw(img)
    
    draw.rectangle([40, 40, 1160, 760], fill=DARK_TEAL, outline=GOLD, width=4)
    draw_rising_sun(draw, 600, 320, 80)
    
    try:
        font_title = ImageFont.truetype("georgia.ttf", 48)
        font_sub = ImageFont.truetype("arial.ttf", 26)
    except:
        font_title = font_sub = ImageFont.load_default()
        
    draw.text((600, 460), "CHOTHANI FAMILY", fill=GOLD, font=font_title, anchor="mm")
    draw.text((600, 520), "GOVERNANCE & TRUSTEES", fill=WHITE, font=font_sub, anchor="mm")
    draw.text((600, 570), "Multi-Generational Commitment to Social Impact", fill=LIGHT_TEAL, font=font_sub, anchor="mm")
    
    img.save(os.path.join(public_dir, "photo-3.jpg"), quality=95)

def create_photo_4():
    # Photo 4: Reversed White/Gold Logo for Footer (800x300)
    img = Image.new("RGB", (800, 300), DARK_BG)
    draw = ImageDraw.Draw(img)
    
    draw_rising_sun(draw, 140, 120, 45)
    
    try:
        font_heading = ImageFont.truetype("georgia.ttf", 36)
        font_sub = ImageFont.truetype("arial.ttf", 20)
        font_tagline = ImageFont.truetype("arial.ttf", 16)
    except:
        font_heading = font_sub = font_tagline = ImageFont.load_default()
        
    draw.text((230, 90), "CHOTHANI", fill=WHITE, font=font_heading)
    draw.text((230, 135), "FOUNDATION", fill=GOLD, font=font_sub)
    draw.text((230, 175), "COMPASSION • SERVICE • LEGACY", fill=WHITE, font=font_tagline)
    
    img.save(os.path.join(public_dir, "photo-4.jpg"), quality=95)

def create_photo_5():
    # Photo 5: Founder background (1200x800) - Soft Teal background
    img = Image.new("RGB", (1200, 800), (240, 246, 248))
    draw = ImageDraw.Draw(img)
    
    draw.rectangle([40, 40, 1160, 760], fill=WHITE, outline=TEAL, width=2)
    draw.ellipse([450, 150, 750, 450], fill=TEAL, outline=GOLD, width=4)
    draw_rising_sun(draw, 600, 270, 50)
    
    try:
        font_heading = ImageFont.truetype("georgia.ttf", 40)
        font_sub = ImageFont.truetype("arial.ttf", 22)
    except:
        font_heading = font_sub = ImageFont.load_default()
        
    draw.text((600, 520), "50 YEARS OF SERVICE", fill=TEAL, font=font_heading, anchor="mm")
    draw.text((600, 580), "Dr. Krishnakumar Chothani", fill=GOLD, font=font_sub, anchor="mm")
    draw.text((600, 640), "Rural Healthcare • Paediatrics • Community Welfare", fill=INK, font=font_sub, anchor="mm")
    
    img.save(os.path.join(public_dir, "photo-5.jpg"), quality=95)

def create_photo_6():
    # Photo 6: Compact Logo Icon (400x400)
    img = Image.new("RGB", (400, 400), WHITE)
    draw = ImageDraw.Draw(img)
    
    draw.rectangle([10, 10, 390, 390], fill=WHITE, outline=TEAL, width=2)
    draw_rising_sun(draw, 200, 160, 50)
    
    try:
        font = ImageFont.truetype("georgia.ttf", 32)
        font_sub = ImageFont.truetype("arial.ttf", 18)
    except:
        font = font_sub = ImageFont.load_default()
        
    draw.text((200, 240), "CHOTHANI", fill=TEAL, font=font, anchor="mm")
    draw.text((200, 285), "FOUNDATION", fill=GOLD, font=font_sub, anchor="mm")
    
    img.save(os.path.join(public_dir, "photo-6.jpg"), quality=95)

def create_photo_7():
    # Photo 7: Formal Portrait of Dr. Krishnakumar Chothani (800x1000)
    img = Image.new("RGB", (800, 1000), (245, 248, 250))
    draw = ImageDraw.Draw(img)
    
    draw.rectangle([30, 30, 770, 970], fill=WHITE, outline=TEAL, width=3)
    draw.ellipse([150, 120, 650, 720], fill=TEAL, outline=GOLD, width=6)
    draw_rising_sun(draw, 400, 350, 70)
    
    try:
        font_name = ImageFont.truetype("georgia.ttf", 36)
        font_title = ImageFont.truetype("arial.ttf", 22)
    except:
        font_name = font_title = ImageFont.load_default()
        
    draw.text((400, 480), "Dr. Krishnakumar", fill=WHITE, font=font_name, anchor="mm")
    draw.text((400, 540), "Chothani", fill=GOLD, font=font_name, anchor="mm")
    draw.text((400, 600), "Founder Chairperson", fill=WHITE, font=font_title, anchor="mm")
    
    draw.text((400, 800), "Dr. Krishnakumar Chothani", fill=TEAL, font=font_name, anchor="mm")
    draw.text((400, 850), "Founder & Chairperson, Chothani Foundation", fill=GOLD, font=font_title, anchor="mm")
    draw.text((400, 890), "Paediatrician • 50+ Years of Rural Healthcare Service", fill=INK, font=font_title, anchor="mm")
    
    img.save(os.path.join(public_dir, "photo-7.jpg"), quality=95)

def create_photo_8():
    # Photo 8: Signature SVG
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="400" height="120">
  <path d="M20 70 Q 50 20 80 60 T 130 50 T 170 75 T 220 40 T 260 70 Q 300 85 360 40" 
        stroke="#356877" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M40 90 Q 150 110 320 85" stroke="#DFA528" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <text x="30" y="112" font-family="Georgia, serif" font-size="14" font-style="italic" fill="#2D3748">Dr. Krishnakumar Chothani</text>
</svg>'''
    with open(os.path.join(public_dir, "photo-8.svg"), "w") as f:
        f.write(svg_content)

if __name__ == "__main__":
    create_photo_1()
    create_photo_2()
    create_photo_3()
    create_photo_4()
    create_photo_5()
    create_photo_6()
    create_photo_7()
    create_photo_8()
    print("All photo assets regenerated with exact live colors successfully.")
