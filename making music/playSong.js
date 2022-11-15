let songIndex = 0;
let songItem = Array.from(document.getElementsByClassName("container"));
let songItem2 = Array.from(document.getElementsByClassName("playlist-container"));
// console.log(songItem);
let audioSound = new Audio("navbarSongs/0.mp3");
let playBtn = document.getElementById("playbtn"); 
let progressBar = document.getElementById("progressBar");
// console.log(progressBar.value);
let songs = [
    {
        sNO: "01",
        songName: "On my way",
        songPath: "navbarSongs/0.mp3",
        songCover: "covers/on-my-way.jpg",
        artistName: "Alen Walker"
    },
    {
        sNO: "02",
        songName: "Excuses",
        songPath: "navbarSongs/1.mp3",
        songCover: "covers/excuses.jpeg",
        artistName: "Ap Dhillon"
    },
    {
        sNO: "03",
        songName: "Desh mere",
        songPath: "navbarSongs/2.mp3",
        songCover: "covers/desh-mere.jpg",
        artistName: "Arijit Singh"
    }
    ,
    {
        sNO: "04",
        songName: "Lehraa do",
        songPath: "navbarSongs/3.mp3",
        songCover: "covers/lehra-do.jpg",
        artistName: "Ariit Singh"
    }
    ,
    {
        sNO: "05",
        songName: "Ambar se toda",
        songPath: "navbarSongs/4.mp3",
        songCover: "covers/Ambar-se-toda.jpeg",
        artistName: "M M Keeravaani"
    }
    ,
    {
        sNO: "06",
        songName: "Sada Pyar",
        songPath: "navbarSongs/5.mp3",
        songCover: "covers/sada-pyar.jpg",
        artistName: "Ap Dhillon"
    }
    ,
    {
        sNO: "07",
        songName: "Vibe",
        songPath: "navbarSongs/6.mp3",
        songCover: "covers/vibe.jpg",
        artistName: "Diljit Dosanjh"
    },
    
];
let songs2 = [
  {
    songName: "295",
    songPath: "navbarSongs/7.mp3",
    songCover: "covers/295.jpg",
    artistName: "Sidhu Moosewala"
  },
  {
    songName: "Against All Odds",
    songPath: "navbarSongs/8.mp3",
    songCover: "covers/odd.jpg",
    artistName: "Ap Dhillon"
  },
  {
    songName: "Insane",
    songPath: "navbarSongs/9.mp3",
    songCover: "covers/insane.jpg",
    artistName: "Ap Dhillon"
  },
  {
    songName: "High",
    songPath: "navbarSongs/10.mp3",
    songCover: "covers/high.jpg",
    artistName: "The Chiansmoker"
  },
  {
    songName: "We Rollin",
    songPath: "navbarSongs/11.mp3",
    songCover: "covers/rollin.jpg",
    artistName: "Shubh"
  },
]

songItem.forEach((element, index)=>{
    // console.log(element, index);
    element.querySelectorAll(".sno")[0].innerHTML = songs[index].sNO;
    element.querySelectorAll("img")[0].src = songs[index].songCover;
    element.querySelectorAll(".bold-p")[0].innerHTML = songs[index].songName;
    element.querySelectorAll(".light-p")[0].innerHTML = songs[index].artistName;

})
songItem2.forEach((element, index)=>{
  element.querySelectorAll("img")[0].src= songs2[index].songCover;
  element.querySelectorAll("#songName")[0].innerHTML= songs2[index].songName;
  element.querySelectorAll("#singer")[0].innerHTML= songs2[index].artistName;
})
playBtn.addEventListener("click", ()=>{
    if(audioSound.paused || audioSound.currentTime<0){
        audioSound.play();
        playBtn.classList.add("fa-pause"); 
        playBtn.classList.remove("fa-play"); 
    }
    else{
        audioSound.pause();
        playBtn.classList.add("fa-play"); 
        playBtn.classList.remove("fa-pause"); 
    }
   
})


audioSound.addEventListener("timeupdate", ()=>{
    progres = parseInt((audioSound.currentTime/audioSound.duration)*100);
    progressBar.value = progres;
});

progressBar.addEventListener("change", ()=>{
    audioSound.currentTime = (progressBar.value * audioSound.duration) / 100;
    
})

const makesAllPlays = () => {
    Array.from(document.querySelectorAll(".songItemPlay")).forEach((element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    });
  };


Array.from(document.querySelectorAll(".songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
      makesAllPlays();
      songIndex = parseInt(e.target.id);
    //   console.log(songIndex);
      playBtn.classList.add("fa-pause");
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      audioSound.src = `navbarSongs/${songIndex}.mp3`;
      console.log(audioSound.src);
      audioSound.currentTime = 0;
      audioSound.play();
    });
});
  
// ANOTHER PLAYLIST
Array.from(document.querySelectorAll(".songItem")).forEach((element) => {
  element.addEventListener("click", (e) => {
    // makesAllPlays();
    songIndex = parseInt(e.target.id);
  //   console.log(songIndex);
    playBtn.classList.add("fa-pause");
    audioSound.src = `navbarSongs/${songIndex}.mp3`;
    console.log(audioSound.src);
    audioSound.currentTime = 0;
    audioSound.play();
  });
});

document.getElementById("next").addEventListener("click", (e)=>{
    // console.log("clicked at next");
    if(songIndex >= 11){
      songIndex = 0;
    }
    else{
      songIndex += 1;
    }
    audioSound.src = `navbarSongs/${songIndex}.mp3`;
    audioSound.currentTime = 0;
    audioSound.play();
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
  })

  document.getElementById("previous").addEventListener("click", (e)=>{
    if(songIndex <= 0){
      songIndex = 11;
    }
    else{
      songIndex -= 1;
    }
    audioSound.src = `navbarSongs/${songIndex}.mp3`;
    audioSound.currentTime = 0;
    audioSound.play();
    e.target.classList.remove("fa-play");
  })