let songIndex = 0;
let audioElement = new Audio("../Songs/1.mp3");
let Play = document.getElementById("Play");
let ProgressBar = document.getElementById("ProgressBar");
let gif = document.getElementById("gif");
let SongsNames = document.getElementById("SongsNames");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "Beiman Piya Re", filePath:"../Songs/1.MP3" , coverPath: "../Covers/beiman piya re.png" },
    { songName: "Bole chudiyan", filePath:"../Songs/2.mp3" , coverPath: "../Covers/bole chudiyan.png" },
    { songName: "Chanda Sitare", filePath:"../Songs/3.mp3" , coverPath: "../Covers/chanda sitare.jpg" },
    { songName: "Chhatri na khol", filePath:"../Songs/4.mp3" , coverPath: "../Covers/chatri na khol.jpg" },
    { songName: "Dekha Hai Pehli Bar", filePath:"../Songs/5.mp3" , coverPath: "../Covers/dekha hai pahli bar.jpg" },
    { songName: "Dheere Dheere Se", filePath:"../Songs/6.mp3" , coverPath: "../Covers/dheere dheere se.jpg" },
    { songName: "Dil Ka Aalam", filePath:"../Songs/7.mp3" , coverPath: "../Covers/dil ka aalam.jpg" },
    { songName: "Ghungat Mein Chand", filePath:"../Songs/8.mp3" , coverPath: "../Covers/ghungat mai chand hoga.jpg" },
    { songName: "Mai Tuzse Aisi Milu", filePath:"../Songs/9.mp3" , coverPath: "../Covers/mai tuz se aise.jpg" },
    { songName: "Tukur Tukur Dekhate", filePath:"../Songs/10.mp3" , coverPath: "../Covers/tukur tukur.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

Play.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        Play.classList.remove("fa-play-circle");
        Play.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        Play.classList.remove("fa-pause-circle");
        Play.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener("change", () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
})

const AllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        AllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `../Songs/${songIndex + 1}.mp3`;
        SongsNames.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        Play.classList.remove("fa-play-circle");
        Play.classList.add("fa-pause-circle");
    })
})

document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `../Songs/${songIndex + 1}.mp3`;
    SongsNames.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    Play.classList.remove("fa-play-circle");
    Play.classList.add("fa-pause-circle");
})

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `../Songs/${songIndex + 1}.mp3`;
    SongsNames.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    Play.classList.remove("fa-play-circle");
    Play.classList.add("fa-pause-circle");
})