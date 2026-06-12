import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, "../src/assets");
const out = join(__dirname, "../src/assets/responsive");

mkdirSync(out, { recursive: true });

const jobs = [
  // Hero (shopzoomed) — full-width on all viewports
  // 640w: 1× DPR mobile; 800w: 2× DPR small phones; 1000w: high-DPR mobile / slow-network desktop
  { input: "shopzoomed.webp", output: "shopzoomed-640.webp", width: 640, quality: 72 },
  { input: "shopzoomed.webp", output: "shopzoomed-800.webp", width: 800, quality: 72 },
  { input: "shopzoomed.webp", output: "shopzoomed-1000.webp", width: 1000, quality: 72 },
  // Shop interior (shop-upclose) — 50vw on desktop, 100vw on mobile
  { input: "shop-upclose.webp", output: "shop-upclose-640.webp", width: 640, quality: 72 },
  { input: "shop-upclose.webp", output: "shop-upclose-800.webp", width: 800, quality: 72 },
  { input: "shop-upclose.webp", output: "shop-upclose-1000.webp", width: 1000, quality: 72 },
  // Nav/footer logo — max ~187px wide at display size (60px tall × aspect ratio)
  { input: "burnsautologo white.webp", output: "logo-400.webp", width: 400, quality: 75 },
  // About page photos — 811×613 originals; 640w covers 1x DPR mobile and low-DPR desktop
  { input: "Burns-Auto_Founder_Gray.webp", output: "founder-640.webp", width: 640, quality: 72 },
  { input: "Burns-Auto_Old-Pic-Large.webp", output: "group-640.webp", width: 640, quality: 72 },
  // Banner logos — displayed at fixed small sizes
  { input: "Shell_logo.svg.webp", output: "shell-logo-242.webp", width: 242, quality: 75 },
  { input: "ASE-Logo_190312_132616.webp", output: "ase-logo-224.webp", width: 224, quality: 75 },
  { input: "bumper2bumper.webp", output: "bumper2bumper-412.webp", width: 412, quality: 75 },
  { input: "confidencePlus.webp", output: "confidenceplus-400.webp", width: 400, quality: 75 },
  { input: "SURECRITIC.webp", output: "surecritic-480.webp", width: 480, quality: 75 },
];

for (const { input, output, width, quality } of jobs) {
  await sharp(join(src, input))
    .resize(width)
    .webp({ quality })
    .toFile(join(out, output));
  console.log(`✓ ${output}`);
}

console.log("\nAll responsive images generated.");
