const fs = require('fs');

// Input your shared animation_hash and animation_link
const sharedAnimationHash = "3787ef1ac5cec40dbd4dda4020f31ea79a4126b763df3d5c6c563943d4126c46";
const sharedAnimationLink = "https://arweave.net/CuiGVD-kO_UR4zIknBe5ykHu890OIgkqlbPQSUizUUg?ext=mp4";

// Read updatedwithmetadata.json
const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

// Add animation_hash and animation_link after onChain for all entries
for (let i = 0; i < 100; i++) {
    const id = i.toString();
    if (jsonData.hasOwnProperty(id)) {
        jsonData[id].animation_hash = sharedAnimationHash;
        jsonData[id].animation_link = sharedAnimationLink;
    }
}

// Updated jsonData with animation_hash and animation_link
const updatedJsonData = JSON.stringify(jsonData, null, 2);

// Write updated jsonData to finaldata.json
fs.writeFileSync('addanimationdata.json', updatedJsonData);

console.log('Final JSON data with animation_hash and animation_link written to addanimationdata.json');
