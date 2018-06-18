// Video Controls

$('video, audio').mediaelementplayer({
  features: ['playpause', 'tracks', 'progress', 'volume', 'fullscreen', 'skipback'],
  startLanguage: 'en',
  skipBackInterval: 10,
});

// Variables

let vid = document.getElementById('vid');
let ctext = document.querySelectorAll('.ctext');
let paragraphs = document.getElementsByClassName('.paragraphs');


vid.addEventListener("timeupdate", () => {
for (let i = 0; i < ctext.length; i += 1) {
   if(vid.currentTime > ctext[i].getAttribute('data-start') && vid.currentTime <= ctext[i].getAttribute('data-end')) {
   ctext[i].classList.add('orangeText');
   }
    else {
   ctext[i].classList.remove('orangeText');
    }
   }
});
