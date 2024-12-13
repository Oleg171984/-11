
const imageCount = 9;
const randomIndex = Math.floor(Math.random() * imageCount) + 1;
const imagePath = `images/${randomIndex}.jpg`;
const imageElement = document.getElementById('random-image');
imageElement.src = imagePath;
imageElement.alt = `Random Image ${randomIndex}`;
