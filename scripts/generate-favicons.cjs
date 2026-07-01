const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SVG_PATH = path.join(__dirname, '..', 'src', 'assets', 'bitsquid-favicon.svg');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
];

async function generateFavicons() {
  const svgBuffer = fs.readFileSync(SVG_PATH);
  
  for (const { name, size } of sizes) {
    const outputPath = path.join(PUBLIC_DIR, name);
    
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Generated ${name} (${size}x${size})`);
  }
}

generateFavicons()
  .then(() => console.log('✅ All favicons generated successfully!'))
  .catch(err => console.error('❌ Error:', err));