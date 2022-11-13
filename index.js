console.log("Welcomr to jsify");
let audioElement = new Audio('my_songs/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let master = document.querySelector('#master1');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar')
let songinfo = document.getElementsByClassName('songInfo')
let songItem = Array.from(document.getElementsByClassName('songItem'))
let songIndex = 0;

let songs = [
    { songName: "Kahriyat-Chichore Movie", filePath: "my_songs/0.mp3", coverPath: "images/k.jpg" },
    { songName: "Woh din - Chichore Movie", filePath: "my_songs/1.mp3", coverPath: "images/w.jpg" },
    { songName: "Desh Mere -Bhuj Movie", filePath: "my_songs/2.mp3", coverPath: "images/d.jpg" },
    { songName: "Rait Zara Si - Atrangi Re", filePath: "my_songs/3.mp3", coverPath: "images/a.jpg" },
    { songName: "Kesariya-Brahmashtra Movie", filePath: "my_songs/4.mp3", coverPath: "images/ke.jpg" },
    { songName: "Agar Tum-Tamasha Movie", filePath: "my_songs/5.mp3", coverPath: "images/ag.jpg" },
    { songName: "Tera yaar Hun Mai-SKTKS  Movie", filePath: "my_songs/6.mp3", coverPath: "images/t.jpg" },
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

const masterPause = (n) => {
    Array.from(document.getElementsByClassName('master')).forEach((element) => {
        if(n == element.id){
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
        }
    });
};

const masterPlays = (n) => {
    Array.from(document.getElementsByClassName('master')).forEach((element) => {
        if(n == element.id){
            element.classList.remove('fa-play');
            element.classList.add('fa-pause');
        }
    });
};

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        masterPlays(songIndex)
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.src = "images/2.gif";


    }
    else if (audioElement.currentTime > 0) {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        masterPause(songIndex);
        gif.src = "images/music.png";


    }

});


audioElement.addEventListener('timeupdate', () => {
    // updating seek bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    if (myProgressBar.value == 100) {
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');

        master.classList.add('fa-play');
        master.classList.remove('fa-pause');
        gif.style.opacity = 0;
    }

});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

});
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('master')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
};


Array.from(document.getElementsByClassName('master')).forEach((element) => {

    element.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            makeAllPlays();
            songIndex = e.target.id
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            
            masterSongName.innerText = songs[songIndex].songName;
            bottomGifChange.src = songs[songIndex].coverPath;

            gif.src = "images/2.gif";
            audioElement.src = `my_songs/${songIndex}.mp3`;
            console.log(audioElement.src);
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }else{
            audioElement.pause();
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.src = "images/music.png";


        }

    });
});

const preNextPlays = (n) => {
    Array.from(document.getElementsByClassName('master')).forEach((element) => {
        if(n == element.id){
            console.log("hari",element.id)
            element.classList.remove('fa-play');
            element.classList.add('fa-pause');
            // element.

        }
    });
};

const currPlays = (n) => {
    Array.from(document.getElementsByClassName('master')).forEach((element) => {
        if(n == element.id){
            console.log("hari",element.id)
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
            // element.

        }
    });
};


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex > 9) {
        songIndex = 0;
    }
    else {
        currPlays(songIndex);

        songIndex -= 1;
    }
    preNextPlays(songIndex)
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `my_songs/${songIndex}.mp3`;
    console.log(audioElement.src);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.src = "images/2.gif";
    bottomGifChange.src = songs[songIndex].coverPath;


});


document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 9) {
        songIndex = 0;
    }
    else {
        currPlays(songIndex);
        songIndex++;
    }
    preNextPlays(songIndex);
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `my_songs/${songIndex}.mp3`;
    console.log(audioElement.src);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.src = "images/2.gif";
    bottomGifChange.src = songs[songIndex].coverPath;


});