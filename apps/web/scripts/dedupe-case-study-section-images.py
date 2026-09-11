"""Force unique images across intro/challenge/solution sections."""
from pathlib import Path
import re

OVERRIDES = Path("apps/web/data/enterpriseCaseStudyOverrides.ts")
text = OVERRIDES.read_text(encoding="utf-8")

# Split by study keys while keeping separators
parts = re.split(r'(\n  "[a-z0-9-]+": \{)', text)
out = [parts[0]]
fixed = 0
for i in range(1, len(parts), 2):
    key = parts[i]
    body = parts[i + 1] if i + 1 < len(parts) else ""
    # Ensure challenge uses screen-1
    body = re.sub(
        r'(challenge:\s*\{[\s\S]*?image:\s*asset\("[^"]+",\s*")[^"]+(")',
        r"\1screen-1.png\2",
        body,
        count=1,
    )
    # Rewrite each solution item image in order to screen-2/3/4
    imgs = iter(["screen-2.png", "screen-3.png", "screen-4.png"])

    def repl_item(m: re.Match[str]) -> str:
        try:
            img = next(imgs)
        except StopIteration:
            img = "screen-4.png"
        return f'{m.group(1)}"{img}"'

    body2, n = re.subn(
        r'(items:\s*\[[\s\S]*?)(?=results:)',
        lambda m: re.sub(
            r'(image:\s*asset\("[^"]+",\s*)"[^"]+"',
            repl_item,
            m.group(1),
        ),
        body,
        count=1,
    )
    if n:
        fixed += 1
        body = body2
    out.append(key)
    out.append(body)

OVERRIDES.write_text("".join(out), encoding="utf-8")
print(f"fixed studies={fixed}")

# Verify one sample
sample = OVERRIDES.read_text(encoding="utf-8")
m = re.search(
    r'"cobalt-digital-bank": \{[\s\S]*?challenge:[\s\S]*?image: asset\("[^"]+", "([^"]+)"\)[\s\S]*?items: \[([\s\S]*?)\],\s*results:',
    sample,
)
if m:
    item_imgs = re.findall(r'image: asset\("[^"]+", "([^"]+)"\)', m.group(2))
    print("cobalt challenge=", m.group(1), "items=", item_imgs)
