import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, "../src/assets");
const out = join(__dirname, "../src/assets/responsive");

mkdirSync(out, { recursive: true });

const jobs = [
  // Hero image — full-width on all viewports, generate 640w and 1000w variants
  { input: "shopzoomed.webp", output: "shopzoomed-640.webp", width: 640 },
  { input: "shopzoomed.webp", output: "shopzoomed-1000.webp", width: 1000 },
  // Shop interior — half-width on desktop, full-width on mobile
  { input: "shop-upclose.webp", output: "shop-upclose-640.webp", width: 640 },
  { input: "shop-upclose.webp", output: "shop-upclose-1000.webp", width: 1000 },
  // Nav/footer logo — max ~187px wide at display size, generate 2x for retina
  { input: "burnsautologo white.webp", output: "logo-400.webp", width: 400 },
  // Banner logos — small fixed display size, just properly sized for 2x retina
  { input: "Shell_logo.svg.webp", output: "shell-logo-242.webp", width: 242 },
  {
    input: "ASE-Logo_190312_132616.webp",
    output: "ase-logo-224.webp",
    width: 224,
  },
  { input: "bumper2bumper.webp", output: "bumper2bumper-412.webp", width: 412 },
  {
    input: "confidencePlus.webp",
    output: "confidenceplus-400.webp",
    width: 400,
  },
  { input: "SURECRITIC.webp", output: "surecritic-480.webp", width: 480 },
];

for (const { input, output, width } of jobs) {
  await sharp(join(src, input))
    .resize(width)
    .webp({ quality: 82 })
    .toFile(join(out, output));
  console.log(`✓ ${output}`);
}

console.log("\nAll responsive images generated.");
