# Typing Game

A fun and interactive typing game to improve your typing speed and accuracy. This game challenges you to type a series of random sentences while tracking your performance metrics.
This is a simple typing game built using HTML, CSS, and JavaScript. The objective of the game is to type the given sentences as quickly and accurately as possible.

## Features

- **Random Sentences**: Each game session displays a new random sentence from a predefined list.
- **Typing Metrics**: Displays real-time metrics including:
  - **Time Left**: Countdown timer showing the remaining time.
  - **Mistakes**: Number of incorrect characters typed.
  - **Words Per Minute (WPM)**: Calculates your typing speed in words per minute.
  - **Characters Per Minute (CPM)**: Calculates your typing speed in characters per minute.
- **Error Highlighting**: Incorrectly typed characters are highlighted in red, while correctly typed characters turn green.
- **Dynamic UI**: The interface updates dynamically based on user input and game state.
- **Reset Game**: Click the "Try Again" button to restart the game with a new sentence and reset the metrics.
- **Focus on Input Field**: Clicking anywhere on the page will automatically focus on the input field, making it easier to start typing.

## Project Structure

- `index.html`: Contains the HTML structure of the game.
- `style.css`: Styles for the game to ensure a visually appealing user experience.
- `script.js`: JavaScript code that handles the game logic, including typing mechanics, timer, and metrics calculation.

## How to Use

1. **Open `index.html`**: Simply open this file in a web browser to start playing the game.
2. **Start Typing**: The game will display a random sentence. Type the sentence into the input field.
3. **Restart the Game**: Click the "Try Again" button to restart the game with a new sentence.

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Typing Game</title>
    <link rel="stylesheet" href="style.css" />
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Stylish&display=swap");
    </style>
  </head>
  <body>
    <div class="container">
      <input type="text" class="input-field" />
      <div class="content-box">
        <div class="typing-text">
          <p></p>
        </div>
        <div class="content">
          <ul class="result-details">
            <li class="time">
              <p>Time Left:</p>
              <span><b>60</b>s</span>
            </li>
            <li class="mistake">
              <p>Mistakes:</p>
              <span>0</span>
            </li>
            <li class="wpm">
              <p>WPM:</p>
              <span>0</span>
            </li>
            <li class="cpm">
              <p>CPM:</p>
              <span>0</span>
            </li>
          </ul>
          <button id="try-again">Try Again</button>
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
