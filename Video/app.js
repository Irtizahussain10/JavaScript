var playVideo = document.getElementById("Play");
var pauseVideo = document.getElementById("Pause");
var reload = document.getElementById("Reload");
var Video = document.getElementById("video");

playVideo.onclick = () => {
    PlayVideo();
}

pauseVideo.onclick = () => {
    PauseVideo();
}

reload.onclick = () => {
    ReloadVideo();
}

function PlayVideo() {
    Video.play();
}

function PauseVideo() {
    Video.pause();
}

function ReloadVideo() {
    Video.load();
} 