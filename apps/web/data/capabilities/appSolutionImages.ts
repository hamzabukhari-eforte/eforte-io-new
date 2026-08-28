import fs from "fs";
import path from "path";

const RELATIVE_DIR = "public/assets/final-images/capabilities/app-solution";
const PUBLIC_BASE = "/assets/final-images/capabilities/app-solution";

const IMAGE_EXT = /\.(jpe?g|png|webp|svg|gif)$/i;

function resolveAppSolutionDir(): string | null {
  const candidates = [
    path.join(process.cwd(), RELATIVE_DIR),
    path.join(process.cwd(), "apps/web", RELATIVE_DIR),
  ];
  return candidates.find((dir) => fs.existsSync(dir)) ?? null;
}

/**
 * Maps numbered files in app-solution/ (e.g. `0-foo.jpeg`, `3-_bar.png`)
 * to public URLs. Re-reads the folder each call so newly added assets
 * are picked up without code changes. Appends `?v=mtime` to bust caches.
 *
 * Naming: `{index}-{anything}.{ext}` where index matches feature slots:
 * 0 case study · 1 mobile app · 2 SDK · 3 testing · 4 consultancy ·
 * 5 discovery · 6 device integration · 7 store positioning
 *
 * Hero: any file whose name contains `hero` or `banner`.
 */
export function getAppSolutionImages(): Record<number, string> {
  const map: Record<number, string> = {};
  const dir = resolveAppSolutionDir();
  if (!dir) return map;

  for (const file of fs.readdirSync(dir)) {
    if (!IMAGE_EXT.test(file)) continue;
    const match = file.match(/^(\d+)[-_]/);
    if (!match) continue;

    const index = Number(match[1]);
    const stat = fs.statSync(path.join(dir, file));
    map[index] = `${PUBLIC_BASE}/${file}?v=${Math.floor(stat.mtimeMs)}`;
  }

  return map;
}

/** Optional hero/banner asset if filename contains hero or banner. */
export function getAppSolutionHeroImage(): string | undefined {
  const dir = resolveAppSolutionDir();
  if (!dir) return undefined;

  for (const file of fs.readdirSync(dir)) {
    if (!IMAGE_EXT.test(file)) continue;
    if (!/hero|banner/i.test(file)) continue;

    const stat = fs.statSync(path.join(dir, file));
    return `${PUBLIC_BASE}/${file}?v=${Math.floor(stat.mtimeMs)}`;
  }

  return undefined;
}
