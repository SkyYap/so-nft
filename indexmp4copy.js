const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'assets/chicken.mp4');
const assetsFolder = path.join(__dirname, 'assets');

if (!fs.existsSync(assetsFolder)) {
  fs.mkdirSync(assetsFolder);
}

for (let i = 0; i < 100; i++) {
  const destFile = path.join(assetsFolder, `${i}.mp4`);
  fs.copyFileSync(sourceFile, destFile);
  console.log(`Copied ${sourceFile} to ${destFile}`);
}

console.log('Generation complete.');
