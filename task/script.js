const images = [
"img1.jpg",
"img2.jpg",
"img3.jpg",
"img4.jpg",
"img5.jpg"
];


let remainingImages = [...images];
let startTime = Date.now();
let shownCount = 0;


function nextImage() {
if (remainingImages.length === 0) return;


const randomIndex = Math.floor(Math.random() * remainingImages.length);
const selected = remainingImages[randomIndex];


document.getElementById("taskImage").src = "images/" + selected;


remainingImages.splice(randomIndex, 1);
shownCount++;


document.getElementById("counter").innerText = `Картинка ${shownCount} из 5`;


if (shownCount === 5) {
document.getElementById("nextBtn").style.display = "none";
document.getElementById("timeBtn").style.display = "inline-block";
}
}


function showTime() {
const endTime = Date.now();
const seconds = Math.round((endTime - startTime) / 1000);
document.getElementById("timeResult").innerText = `Ваше время: ${seconds} сек.`;
}


// Показать первую картинку сразу
nextImage();
