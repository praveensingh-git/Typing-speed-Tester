const typingText = document.querySelector(".typing-text p");
const input = document.querySelector(".container .input-field");
const time = document.querySelector(".time span b");
const mistake1 = document.querySelector(".mistake span");
const wpm = document.querySelector(".wpm span");
const cpm = document.querySelector(".cpm span");
const tryBtn = document.querySelector("#try-again");
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIdx = 0;
let mistakes = 0;
let isTyping = false;

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "JavaScript is a versatile language.",
  "Creating random text can be useful for testing.",
  "Coding is both challenging and rewarding.",
  "The sun rises in the east and sets in the west.",
  "Dogs are great companions for outdoor activities.",
  "Learning to code opens many opportunities.",
  "It's important to write clean and maintainable code.",
  "Mountains are majestic and inspire a sense of awe.",
  "A balanced diet is crucial for maintaining good health.",
  "Technology is evolving at a rapid pace.",
  "Books are a window into different worlds and perspectives.",
  "The ocean is vast and full of mysteries.",
  "Exercise is essential for a healthy lifestyle.",
  "Music has the power to evoke deep emotions.",
  "Exploring new places can broaden your horizons.",
  "Sustainable living is important for our future.",
  "Patience is a virtue that can lead to great rewards.",
  "Time management is key to productivity.",
  "Understanding different cultures fosters global harmony.",
  "Even when a balloon is half inflated, it is completely full.",
  "Does a straw have one hole, or two?",
  "If James Bond is the most famous spy, wouldn't that also make him the worst spy?",
  "If Earth was flat, the edge would probably be a tourist attraction. ",
  "Which orange came first – the color, or the fruit?",
  "If tomatoes are fruit, then ketchup is jam.",
  "One day, you'll be someone's ancestor.",
  "The number of people older than you never goes up.",
];

const randomParagraph = () => {
  const rndPara = Math.floor(Math.random() * sentences.length);
  typingText.innerHTML = "";

  for (const para of sentences[rndPara]) {
    typingText.innerHTML += `<span>${para}</span>`;
  }
  typingText.querySelectorAll("span")[0].classList.add("active");

  document.addEventListener("click", () => {
    input.focus();
  });
};

// handling user Input
let typing = () => {
  const char = typingText.querySelectorAll("span");
  const typedChar = input.value.charAt(charIdx);
  if (charIdx < char.length && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }

    if (char[charIdx].innerText === typedChar) {
      char[charIdx].classList.add("correct");
      console.log("correct");
    } else {
      mistakes++;
      char[charIdx].classList.add("incorrect");
      console.log("incorrect");
    }
    charIdx++;
    mistake1.innerText = mistakes;
    char[charIdx].classList.add("active");
    cpm.innerText = charIdx - mistakes;

    if (charIdx >= char.length) {
      clearInterval(timer);
      input.value = "";
    } else {
      char[charIdx].classList.add("active");
    }
  } else {
    clearInterval(timer);
    input.value = " ";
  }
};

function initTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    time.innerText = timeLeft;
    let word = Math.round(
      ((charIdx - mistakes) / 5 / (maxTime - timeLeft)) * 60
    );
    wpm.textContent = word;
  } else {
    clearInterval(timer);
  }
}
function resetgame() {
  randomParagraph();
  clearInterval(timer);
  time.innerText = maxTime;
  maxTime = 60;
  timeLeft = maxTime;
  charIdx = 0;
  mistakes = 0;
  isTyping = false;
  wpm.innerText = 0;
  cpm.innerText = 0;
  mistake1.innerText = 0;
  input.value = " ";
}

input.addEventListener("input", typing);

randomParagraph();

tryBtn.addEventListener("click", resetgame);
