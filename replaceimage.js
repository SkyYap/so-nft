const fs = require('fs');

// Provided image hash and link
const providedImageHash = "3787ef1ac5cec40dbd4dda4020f31ea79a4126b763df3d5c6c563943d4126c46";
const providedImageLink = "https://arweave.net/dshvQfsmenLrzc8wCHFEGhWyja3QpLGH1wdD9X2joYE?ext=gif";

// Read addanimationdata.json
const jsonData = JSON.parse(fs.readFileSync('addanimationdata.json', 'utf-8'));

// Replace image_hash and image_link for all entries
for (let i = 0; i < 100; i++) {
    const id = i.toString();
    if (jsonData.hasOwnProperty(id)) {
        jsonData[id].image_hash = providedImageHash;
        jsonData[id].image_link = providedImageLink;
    }
}

// Updated jsonData with new image_hash and image_link
const updatedJsonData = JSON.stringify(jsonData, null, 2);

// Write updated jsonData to finaldata.json
fs.writeFileSync('finaldata.json', updatedJsonData);

console.log('Final JSON data with replaced image_hash and image_link written to finaldata.json');
