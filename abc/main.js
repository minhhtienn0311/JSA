// tao danh sach chua lyrics
const lyrics = [
  "You're on the phone with your girlfriend, she's upset",
  "She's going off about something that you said",
  "'Cause she doesn't get your humor like I do",
  "I'm in the room, it's a typical Tuesday night",
  "I'm listening to the kind of music she doesn't like",
  "And she'll never know your story like I do",
];

// tao vong lap in loi bai hat =>  in len html file
// tao element cho html (DOM)
const words = document.getElementById("words");
function createElement (lyric) {
    words.innetHTML += `<p>${lyric}</p>`;
}

//setTimeout

// tao loi bai hat lien tuc (cach 1 giay)
var count = 0;
const show_lyrics = setInterval(function () {
    createElement(lyrics[count]);
    count++;

    if (count === lyrics.lenght -1) {
        clearInterval(show_lyrics);
    }
}, 1000);