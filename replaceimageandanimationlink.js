const fs = require('fs');
const path = require('path');

// Provided image and animation links
const providedImageLink = "https://bafybeicf6xd73inioboi55ktt65xnetczctjdoamrk3ahitxlqbvce52ie.ipfs.nftstorage.link/?filename=chicken.gif";
const providedAnimationLink = "https://bafybeiawlxb4xewh6ditsywdl4w5774zm34a6caru526nbwwmw5yjnd22e.ipfs.nftstorage.link/?filename=chicken.mp4";

// Create the final folder if it doesn't exist
const finalFolderPath = './final';
if (!fs.existsSync(finalFolderPath)) {
    fs.mkdirSync(finalFolderPath);
}

// Loop through assets/0.json to assets/99.json
for (let i = 0; i < 100; i++) {
    const fileName = `assets/${i}.json`;
    const finalFilePath = path.join(finalFolderPath, `${i}.json`);

    // Check if the file exists
    if (fs.existsSync(fileName)) {
        // Read the JSON file
        let jsonData = JSON.parse(fs.readFileSync(fileName, 'utf-8'));

        // Replace image and animation links if they exist in the JSON
        if (jsonData.hasOwnProperty("image") && jsonData.image === "chicken.gif") {
            jsonData.image = providedImageLink;
        }
        if (jsonData.hasOwnProperty("animation_url") && jsonData.animation_url === "chicken.mp4") {
            jsonData.animation_url = providedAnimationLink;
        }

        // Update properties files if they contain "chicken.mp4" or "chicken.gif"
        if (jsonData.hasOwnProperty("properties") && jsonData.properties.hasOwnProperty("files")) {
            const files = jsonData.properties.files;
            for (let j = 0; j < files.length; j++) {
                if (files[j].uri === "chicken.mp4") {
                    files[j].uri = providedAnimationLink;
                }
                if (files[j].uri === "chicken.gif") {
                    files[j].uri = providedImageLink;
                }
            }
        }

        // Write updated jsonData to final file
        fs.writeFileSync(finalFilePath, JSON.stringify(jsonData, null, 2));

        console.log(`Updated ${fileName} with new image and animation links.`);
        console.log(`Final JSON data written to ${finalFilePath}`);
    } else {
        console.log(`File ${fileName} not found.`);
    }
}

console.log('All files updated with new image and animation links in the final folder.');
