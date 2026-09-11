"""Remove the large flat black plate behind PulseLink devices; keep devices intact."""
from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public/assets/final-images/industries/healthcare/PulseLink.png"
DEST = ROOT / "public/assets/final-images/industries/healthcare/pulselink-mhealth-clear.png"
TAB = ROOT / "public/assets/final-images/industries/healthcare/pulselink-mhealth-tab.png"


def is_plate(px, x: int, y: int) -> bool:
    r, g, b, a = px[x, y]
    if a < 128:
        return False
    if r > 24 or g > 24 or b > 24:
        return False
    # Flat near-gray plate (~15,15,15), not tinted UI chrome
    if max(abs(r - g), abs(g - b), abs(r - b)) > 6:
        return False
    return True


def main() -> None:
    im = Image.open(SRC).convert("RGBA")
    px = im.load()
    w, h = im.size

    visited = [[False] * h for _ in range(w)]
    components: list[list[tuple[int, int]]] = []

    for y in range(h):
        for x in range(w):
            if visited[x][y] or not is_plate(px, x, y):
                continue
            comp: list[tuple[int, int]] = []
            q: deque[tuple[int, int]] = deque([(x, y)])
            visited[x][y] = True
            while q:
                cx, cy = q.popleft()
                comp.append((cx, cy))
                for nx, ny in (
                    (cx + 1, cy),
                    (cx - 1, cy),
                    (cx, cy + 1),
                    (cx, cy - 1),
                ):
                    if (
                        0 <= nx < w
                        and 0 <= ny < h
                        and not visited[nx][ny]
                        and is_plate(px, nx, ny)
                    ):
                        visited[nx][ny] = True
                        q.append((nx, ny))
            components.append(comp)

    components.sort(key=len, reverse=True)
    print("components:", len(components), "sizes:", [len(c) for c in components[:8]])

    removed = 0
    for i, comp in enumerate(components):
        # Only wipe huge background plate; keep small dark fragments
        if len(comp) < 5000:
            continue
        for x, y in comp:
            r, g, b, _a = px[x, y]
            px[x, y] = (r, g, b, 0)
            removed += 1
        print(f"removed component {i} size={len(comp)}")

    im.save(DEST, "PNG")
    im.save(TAB, "PNG")
    print("saved", DEST.name, "and", TAB.name, "removed", removed)
    print("plate-was alpha", px[400, 155][3])
    print("laptop-ui", px[576, 400])


if __name__ == "__main__":
    main()
