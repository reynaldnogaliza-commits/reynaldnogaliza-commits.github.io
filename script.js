const bgMusic = document.getElementById("bgMusic");
const popup = document.getElementById("popup");
const video = document.getElementById("popupVideo");

bgMusic.volume = 0.2;

function playHappy() {
    bgMusic.pause();
    video.src = "assets/vid1.mp4";
    popup.style.display = "flex";
    video.play();
}


function playSad() {
    bgMusic.pause();
    video.src = "assets/bg4.mp4";
    popup.style.display = "flex";
    video.play();
}

function closeVideo() {
    video.pause();
    video.currentTime = 0;
    popup.style.display = "none";
    bgMusic.play();
}



