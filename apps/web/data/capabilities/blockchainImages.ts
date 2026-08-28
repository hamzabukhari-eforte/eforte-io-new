import fs from "fs";
import path from "path";

const RELATIVE_DIR = "public/assets/final-images/capabilities/blockchain";
const PUBLIC_BASE = "/assets/final-images/capabilities/blockchain";

const IMAGE_EXT = /\.(jpe?g|png|webp|svg|gif)$/i;

/** Feature id → filename keywords (matched against folder assets). */
const FEATURE_KEYWORDS: Record<string, string[]> = {
  "blockchain-dev": ["blockchain_development", "blockchain-development"],
  "smart-contracts": ["smart-contract", "smart_contract"],
  integration: ["blockchain-integration", "blockchain_integration"],
  security: ["security-and-auditing", "security_and_auditing", "security"],
  tokenization: ["tokenization"],
  testing: ["testing_quality", "testing-quality", "testing"],
  infrastructure: ["infrastructure"],
  monitoring: ["monitoring_maintenance", "monitoring-maintenance", "monitoring"],
  consulting: ["consulting"],
};

function resolveBlockchainDir(): string | null {
  const candidates = [
    path.join(process.cwd(), RELATIVE_DIR),
    path.join(process.cwd(), "apps/web", RELATIVE_DIR),
  ];
  return candidates.find((dir) => fs.existsSync(dir)) ?? null;
}

function fileUrl(dir: string, file: string): string {
  const stat = fs.statSync(path.join(dir, file));
  return `${PUBLIC_BASE}/${file}?v=${Math.floor(stat.mtimeMs)}`;
}

/**
 * Maps blockchain feature ids to public URLs from the folder.
 * Re-reads each call so new/replaced assets apply immediately.
 * Skips hero/banner filenames (wired separately when added).
 */
export function getBlockchainImages(): Record<string, string> {
  const map: Record<string, string> = {};
  const dir = resolveBlockchainDir();
  if (!dir) return map;

  const files = fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXT.test(file) && !/hero|banner/i.test(file));

  for (const [featureId, keywords] of Object.entries(FEATURE_KEYWORDS)) {
    const file = files.find((name) => {
      const lower = name.toLowerCase();
      return keywords.some((kw) => lower.includes(kw.toLowerCase()));
    });
    if (file) map[featureId] = fileUrl(dir, file);
  }

  return map;
}

/** Optional hero/banner when a matching file is added to the folder. */
export function getBlockchainHeroImage(): string | undefined {
  const dir = resolveBlockchainDir();
  if (!dir) return undefined;

  for (const file of fs.readdirSync(dir)) {
    if (!IMAGE_EXT.test(file)) continue;
    if (!/hero|banner/i.test(file)) continue;
    return fileUrl(dir, file);
  }

  return undefined;
}
