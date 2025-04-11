const fs = require('fs');
const path = require('path');

const imagePaths = [
  'src/assets/images/about-hero.jpg',
  'src/assets/images/services/general-pest.jpg',
  'src/assets/images/services/scorpion.jpg',
  'src/assets/images/services/rodents.jpg',
  'src/assets/images/services/mosquito.jpg',
  'src/assets/images/services/commercial.jpg',
  'src/assets/images/services/bedbugs.jpg',
];

imagePaths.forEach((imagePath) => {
  const fullPath = path.join(__dirname, imagePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing file: ${imagePath}`);
  } else {
    console.log(`File exists: ${imagePath}`);
  }
});
