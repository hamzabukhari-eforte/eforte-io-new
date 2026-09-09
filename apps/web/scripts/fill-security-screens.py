from collections import deque
from PIL import Image, ImageDraw, ImageFont

SRC = r"apps/web/public/assets/final-images/industries/security/banner-sunlight-v3.png"
OUT = r"apps/web/public/assets/final-images/industries/security/banner-sunlight-v5.png"

img = Image.open(SRC).convert("RGB")
w, h = img.size
px = img.load()


def is_screen_white(x, y):
    r, g, b = px[x, y]
    return r > 210 and g > 210 and b > 210 and max(r, g, b) - min(r, g, b) < 28


visited = [[False] * w for _ in range(h)]
blobs = []

# Ignore window glare on the far left and edges.
x0, x1 = int(w * 0.28), int(w * 0.92)
y0, y1 = int(h * 0.18), int(h * 0.78)

for y in range(y0, y1):
    for x in range(x0, x1):
        if visited[y][x] or not is_screen_white(x, y):
            continue
        q = deque([(x, y)])
        visited[y][x] = True
        minx = maxx = x
        miny = maxy = y
        count = 0
        while q:
            cx, cy = q.popleft()
            count += 1
            minx = min(minx, cx)
            maxx = max(maxx, cx)
            miny = min(miny, cy)
            maxy = max(maxy, cy)
            for nx, ny in ((cx - 1, cy), (cx + 1, cy), (cx, cy - 1), (cx, cy + 1)):
                if nx < x0 or ny < y0 or nx >= x1 or ny >= y1 or visited[ny][nx]:
                    continue
                if is_screen_white(nx, ny):
                    visited[ny][nx] = True
                    q.append((nx, ny))
                else:
                    visited[ny][nx] = True
        bw, bh = maxx - minx + 1, maxy - miny + 1
        if count > 800 and bw > 70 and bh > 40:
            blobs.append((minx, miny, maxx, maxy, count, bw, bh))

blobs.sort(key=lambda b: b[4], reverse=True)
print("blobs", [(b[0], b[1], b[2], b[3], b[4], b[5], b[6]) for b in blobs[:8]])

# Only desk screens (right half), skip window glare on the left.
screen_blobs = [b for b in blobs if b[0] > w * 0.55]
print("screens", [(b[0], b[1], b[2], b[3], b[4]) for b in screen_blobs[:4]])


def make_dashboard(dw, dh):
    dash = Image.new("RGB", (dw, dh), (12, 22, 48))
    d = ImageDraw.Draw(dash)
    try:
        title_font = ImageFont.truetype("arial.ttf", max(10, dh // 14))
        small = ImageFont.truetype("arial.ttf", max(8, dh // 20))
    except OSError:
        title_font = ImageFont.load_default()
        small = title_font

    d.rectangle([0, 0, dw - 1, dh - 1], outline=(40, 70, 130))
    d.text((8, 6), "Control status", fill=(255, 255, 255), font=title_font)

    chip_y = 8
    d.rounded_rectangle([dw - 168, chip_y, dw - 90, chip_y + dh // 12], radius=6, fill=(10, 70, 160))
    d.text((dw - 160, chip_y + 2), "ISO 27001", fill=(255, 255, 255), font=small)
    d.rounded_rectangle([dw - 82, chip_y, dw - 8, chip_y + dh // 12], radius=6, fill=(10, 70, 160))
    d.text((dw - 76, chip_y + 2), "SOC 2", fill=(255, 255, 255), font=small)

    cols = ["Tenant A", "Tenant B", "Tenant C"]
    col_w = (dw - 24) // 3
    top = dh // 5
    for i, name in enumerate(cols):
        x = 8 + i * col_w
        d.rounded_rectangle([x, top, x + col_w - 8, dh - 8], radius=8, fill=(18, 32, 64))
        d.text((x + 8, top + 6), name, fill=(190, 210, 255), font=small)
        for j, row in enumerate(["Access", "Encryption", "Logging"]):
            ry = top + dh // 6 + j * (dh // 7)
            d.ellipse([x + 8, ry, x + 8 + dh // 22, ry + dh // 22], fill=(46, 196, 110))
            d.text((x + 18 + dh // 22, ry), row, fill=(230, 235, 245), font=small)
    return dash


out = img.copy()
for blob in screen_blobs[:2]:
    minx, miny, maxx, maxy, *_ = blob
    pad_x = 1
    pad_y = 1
    box = (minx + pad_x, miny + pad_y, maxx - pad_x, maxy - pad_y)
    dw, dh = box[2] - box[0], box[3] - box[1]
    if dw < 40 or dh < 28:
        continue
    dash = make_dashboard(dw, dh)
    out.paste(dash, box)

out.save(OUT, quality=95)
print("wrote", OUT)
