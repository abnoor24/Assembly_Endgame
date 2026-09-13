# ⚛️ Assembly: Endgame

A Hangman-style word guessing game built with React. The premise: the world is switching to Assembly programming, and your goal is to guess the hidden word within 8 attempts to save the programming languages from total extinction!

---

## 🎮 How to Play

1. You have **8 incorrect attempts** before Assembly takes over the tech world.
2. Click on the on-screen keyboard (or type on your keyboard) to guess letters.
3. Every wrong guess eliminates one programming language (HTML, CSS, JavaScript, React, etc.) with a funny farewell message.
4. Win by guessing the word completely, or lose when all programming languages are lost to Assembly.
5. Click **"New Game"** to reset the state and play again with a new random word.

---

## ✨ Features

- **Dynamic UI State:** Tracks remaining attempts, guessed letters, and game-over states (Win/Loss).
- **Confetti Effects:** Triggers a win animation using `canvas-confetti` when the word is successfully guessed.
- **Farewell Banners:** Displays randomized status messages whenever a language is lost.
- **Keyboard & Click Input:** Interactive keyboard grid built with dynamic rendering.

---

## 🛠️ Built With

- **React 19** (Functional Components, `useState`, `useEffect`, derived state)
- **Vite** (Next-gen frontend tooling)
- **CSS3** (Flexbox, Grid, custom styling)
- **clsx** (Utility for constructing conditional classNames)
- **react-confetti** (Win celebration effects)

---
