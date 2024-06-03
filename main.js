let letter = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letter);
let letterContainer = document.querySelector(".letters");
lettersArray.forEach((letter) => {
  let lSpan = document.createElement("span");
  let lSpanText = document.createTextNode(letter);
  lSpan.className = "letter-box";
  lSpan.appendChild(lSpanText);
  letterContainer.appendChild(lSpan);
});

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

let allKeys = Object.keys(words); //programing,movies....
let propNumber = Math.floor(Math.random() * allKeys.length); //0-3 indexof allkeys
let propName = allKeys[propNumber]; //programing
let propValue = words[propName]; //'Syria', 'Palestine', 'Yemen', 'Egypt', 'Bahrain', 'Qatar']
let propValueNumber = Math.floor(Math.random() * propValue.length); //index of propValue
let propValueValue = propValue[propValueNumber]; //Egypt
console.log(propValueValue);

let categoreySpan = document.querySelector(".info-game .category span");
categoreySpan.innerHTML = propName;

let guessSpanContainer = document.querySelector(".guess-span");
let letterAndSpace = Array.from(propValueValue.toLowerCase());
letterAndSpace.forEach((letter) => {
  let gSpan = document.createElement("span");
  guessSpanContainer.appendChild(gSpan);
  if (letter === " ") {
    gSpan.className = "with-space";
  }
});
let guessSpans = document.querySelectorAll(".guess-span span");

let wrongAttemps = 0;
let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let theStatus = false;

  if ((e.target.className = "letter-box")) {
    e.target.classList.add("clicked");

    let clickedLetter = e.target.innerHTML.toLowerCase();
    let chossenWord = Array.from(propValueValue.toLowerCase());
    chossenWord.forEach((wLetter, wIndex) => {
      if (clickedLetter == wLetter) {
        theStatus = true;
        guessSpans.forEach((span, sIndex) => {
          if (wIndex === sIndex) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });
    if (theStatus !== true) {
      wrongAttemps++;
      theDraw.classList.add(`wrong-${wrongAttemps}`);
      document.getElementById("fail").play();
      if (wrongAttemps === 9) {
        endGame();
        letterContainer.classList.add("finished");
      }
    } else {
      document.getElementById("sucess").play();
    }
  }
});

function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Game over the word is ${propValueValue}`
  );
  div.appendChild(divText);
  div.className = "pop-up";
  document.body.appendChild(div);
}
