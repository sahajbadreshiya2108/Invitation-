import fitz

doc = fitz.open(r"C:\Users\HP\Downloads\D & I Logo.pdf")
page = doc[0]
drawings = page.get_drawings()

def drawing_to_shifted_d(d, ox, oy):
    parts = []
    for it in d['items']:
        cmd = it[0]
        if cmd == 'l':
            p1, p2 = it[1], it[2]
            if not parts or parts[-1] == 'Z':
                parts.append(f'M {p1.x - ox:.2f} {p1.y - oy:.2f}')
            parts.append(f'L {p2.x - ox:.2f} {p2.y - oy:.2f}')
        elif cmd == 'c':
            p1, p2, p3, p4 = it[1], it[2], it[3], it[4]
            if not parts or parts[-1] == 'Z':
                parts.append(f'M {p1.x - ox:.2f} {p1.y - oy:.2f}')
            parts.append(f'C {p2.x - ox:.2f} {p2.y - oy:.2f} {p3.x - ox:.2f} {p3.y - oy:.2f} {p4.x - ox:.2f} {p4.y - oy:.2f}')
        elif cmd == 're':
            r = it[1]
            parts.append(f'M {r.x0 - ox:.2f} {r.y0 - oy:.2f} H {r.x1 - ox:.2f} V {r.y1 - oy:.2f} H {r.x0 - ox:.2f} Z')
    if parts and parts[-1] != 'Z':
        parts.append('Z')
    return ' '.join(parts)

bbox = fitz.Rect()
for idx in [4, 5, 6]:
    bbox.include_rect(drawings[idx]['rect'])

padding = 10
ox = bbox.x0 - padding
oy = bbox.y0 - padding
w = bbox.width + padding * 2
h = bbox.height + padding * 2

shifted_combined = ' '.join([drawing_to_shifted_d(drawings[idx], ox, oy) for idx in [4, 5, 6]])

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.2f} {h:.2f}" fill="currentColor">
  <path d="{shifted_combined}" fill-rule="evenodd" />
</svg>
'''

with open(r'c:\Users\HP\Downloads\invetation\public\di-logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print(f"Generated SVG: {w:.2f}x{h:.2f}, path length: {len(shifted_combined)}")

