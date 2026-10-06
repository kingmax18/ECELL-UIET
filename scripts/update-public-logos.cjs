const fs = require('fs');
const path = require('path');
const sharp = require('c:/Users/laksh/OneDrive/Documents/Ecell website/node_modules/sharp');

const inputPath = 'C:/Users/laksh/.gemini/antigravity-ide/brain/439d4a02-280e-4a09-a092-a9cd8b70848b/.user_uploaded/media_1791196158868.jpg';
const publicDir = 'c:/Users/laksh/OneDrive/Documents/Ecell website/public';

async function generateAll() {
  console.log('Processing uploaded image...');
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // 1. Identify outside background using flood fill from edges
  const isBgCandidate = (x, y) => {
    const idx = (y * w + x) * 3;
    const lum = (data[idx] + data[idx+1] + data[idx+2]) / 3;
    return lum > 175;
  };

  const isOutside = new Uint8Array(w * h);
  const queue = [];

  for (let x = 0; x < w; x++) {
    if (isBgCandidate(x, 0)) { isOutside[x] = 1; queue.push(x, 0); }
    if (isBgCandidate(x, h - 1)) { isOutside[(h - 1) * w + x] = 1; queue.push(x, h - 1); }
  }
  for (let y = 0; y < h; y++) {
    if (isBgCandidate(0, y) && !isOutside[y * w]) { isOutside[y * w] = 1; queue.push(0, y); }
    if (isBgCandidate(w - 1, y) && !isOutside[w - 1 + y * w]) { isOutside[w - 1 + y * w] = 1; queue.push(w - 1, y); }
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    const neighbors = [[cx+1, cy], [cx-1, cy], [cx, cy+1], [cx, cy-1]];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const nidx = ny * w + nx;
        if (!isOutside[nidx] && isBgCandidate(nx, ny)) {
          isOutside[nidx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  const out = Buffer.alloc(w * h * 4);
  const BLUE_R = 18, BLUE_G = 71, BLUE_B = 107;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const pIdx = y * w + x;
      const sIdx = pIdx * 3;
      const dIdx = pIdx * 4;
      const r = data[sIdx], g = data[sIdx+1], b = data[sIdx+2];
      const lum = (r * 0.299 + g * 0.587 + b * 0.114);

      if (isOutside[pIdx]) {
        out[dIdx] = 0;
        out[dIdx+1] = 0;
        out[dIdx+2] = 0;
        out[dIdx+3] = 0;
      } else {
        const t = Math.max(0, Math.min(1, (lum - 75) / (215 - 75)));
        out[dIdx] = Math.round(BLUE_R * (1 - t) + 255 * t);
        out[dIdx+1] = Math.round(BLUE_G * (1 - t) + 255 * t);
        out[dIdx+2] = Math.round(BLUE_B * (1 - t) + 255 * t);
        out[dIdx+3] = 255;
      }
    }
  }

  // Smooth outer edge transition against transparent background
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const pIdx = y * w + x;
      if (!isOutside[pIdx]) {
        const nbs = [pIdx-1, pIdx+1, pIdx-w, pIdx+w];
        let outsideCount = 0;
        for (const nb of nbs) {
          if (isOutside[nb]) outsideCount++;
        }
        if (outsideCount > 0) {
          const lum = (data[pIdx*3] + data[pIdx*3+1] + data[pIdx*3+2]) / 3;
          const alpha = Math.max(0, Math.min(255, Math.round((240 - lum) / (240 - 75) * 255)));
          out[pIdx * 4 + 3] = alpha;
        }
      }
    }
  }

  // Find tight bounding box
  let minX = w, maxX = 0, minY = h, maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (out[(y * w + x) * 4 + 3] > 20) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const logoW = maxX - minX + 1;
  const logoH = maxY - minY + 1;
  console.log(`Logo bounds: ${logoW}x${logoH}`);

  const rawExtracted = await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: minX, top: minY, width: logoW, height: logoH })
    .png()
    .toBuffer();

  // 1. Create logo-icon.png (512x512 square with slight breathing room padding)
  const iconSize = 512;
  const iconPad = 28;
  const maxIconDim = iconSize - iconPad * 2;
  const iconScale = Math.min(maxIconDim / logoW, maxIconDim / logoH);
  const iconW = Math.round(logoW * iconScale);
  const iconH = Math.round(logoH * iconScale);

  const scaledIcon = await sharp(rawExtracted)
    .resize(iconW, iconH, { kernel: 'lanczos3' })
    .toBuffer();

  const iconSquare = await sharp({
    create: {
      width: iconSize,
      height: iconSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([{
    input: scaledIcon,
    left: Math.floor((iconSize - iconW) / 2),
    top: Math.floor((iconSize - iconH) / 2)
  }])
  .png()
  .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'logo-icon.png'), iconSquare);
  console.log('Updated public/logo-icon.png');

  // 2. Create logo.png
  fs.writeFileSync(path.join(publicDir, 'logo.png'), iconSquare);
  console.log('Updated public/logo.png');

  // 3. Create favicon.png
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), iconSquare);
  console.log('Updated public/favicon.png');

  // 4. Update logo-full.png with the new icon and the text
  // Target dimensions: 830 x 396
  const fullTargetW = 830;
  const fullTargetH = 396;
  const fullIconMaxDim = 370;
  const fullIconScale = Math.min(fullIconMaxDim / logoW, fullIconMaxDim / logoH);
  const fullIconW = Math.round(logoW * fullIconScale);
  const fullIconH = Math.round(logoH * fullIconScale);

  const scaledFullIcon = await sharp(rawExtracted)
    .resize(fullIconW, fullIconH, { kernel: 'lanczos3' })
    .toBuffer();

  // Read existing text portion
  const textBuffer = fs.readFileSync(path.join(publicDir, 'assets/logo-text-only.png'));

  const fullComposite = await sharp({
    create: {
      width: fullTargetW,
      height: fullTargetH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    {
      input: scaledFullIcon,
      left: Math.floor((340 - fullIconW) / 2),
      top: Math.floor((fullTargetH - fullIconH) / 2)
    },
    {
      input: textBuffer,
      left: 340,
      top: 0
    }
  ])
  .png()
  .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'logo-full.png'), fullComposite);
  console.log('Updated public/logo-full.png');

  console.log('All public logo assets successfully generated!');
}

generateAll().catch(console.error);
