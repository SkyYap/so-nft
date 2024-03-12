const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'assets/1.png');
const assetsFolder = path.join(__dirname, 'assets');

if (!fs.existsSync(assetsFolder)) {
  fs.mkdirSync(assetsFolder);
}

for (let i = 0; i < 100; i++) {
  const destFile = path.join(assetsFolder, `${i}.png`);
  fs.copyFileSync(sourceFile, destFile);
  console.log(`Copied ${sourceFile} to ${destFile}`);
}

console.log('Generation complete.');
