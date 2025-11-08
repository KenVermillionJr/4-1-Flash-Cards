// Flash Card — Unsolved with Boostrap Starter code

(function () {
  'use strict';

  // Starter data (You can replace with your own topic)
  var cards = [
    { front: 'What is JavaScript?', back: 'JavaScript is a programming language used to create interactive effects within web browsers.' },
    { front: 'What does console.log() do in JavaScript?', back: 'console.log() prints the specified message or value to the console, useful for debugging.' },
    { front: 'How do you declare a variable in JavaScript?', back: 'You can declare a variable using var, let, or const.' },
    { front: 'What is an array in JavaScript?', back: 'An array is a data structure used to store multiple values in a single variable, indexed by numbers.' },
    { front: 'How do you create a function in JavaScript?', back: 'A function is created using the function keyword, followed by a name and a set of parentheses (e.g., function myFunction()' },
    { front: 'What is an object in JavaScript?', back: 'An object is a collection of key-value pairs, where each key is a string and the value can be any data type.' },
    { front: 'What does alert() do in JavaScript?', back: 'alert() displays a pop-up message to the user with the specified text.' },
    { front: 'What is the difference between null and undefined?', back: 'null is an intentional absence of a value, while undefined means a variable has been declared but not assigned a value.' },
    { front: 'What is the purpose of return in a function?', back: 'return is used to exit a function and send a value back to the place where the function was called.' },
    { front: 'What is the difference between a for loop and a while loop?', back: 'A for loop is used when the number of iterations is known, while a while loop continues until a specified condition is no longer true.' }
  ];

  // State
  var current = 0;
  var showingFront = true;

  // Elements
  var flashcardEl = document.getElementById('flashcard');
  var cardTextEl = document.getElementById('card-text');
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  var flipBtn = document.getElementById('flip-btn');

  // Optional UI
  var counterEl = document.getElementById('counter');
  var progressBarEl = document.getElementById('progress-bar');
  var percentLabelEl = document.getElementById('percent-label');
  var sideBadgeEl = document.getElementById('side-badge');

  // --- Render function (front/back text + basic counter) ---
  function render() {
    var c = cards[current];
    cardTextEl.textContent = showingFront ? c.front : c.back;

    // Counter is implemented so you can see effect of prev/next
    if (counterEl) {
      counterEl.textContent = (current + 1) + ' of ' + cards.length;
    }

    // TODO: Update progress width (percent complete)
    let percentComplete = ((current + 1) / cards.length) * 100;
    if (progressBarEl) {
      progressBarEl.style.width = percentComplete + '%';
    }
    if (percentLabelEl) {
      percentLabelEl.textContent = Math.round(percentComplete) + '%';
    }

    // TODO: Update side badge to "Front" / "Back"
    if (showingFront === true) {
      sideBadgeEl.textContent = 'Front';// do something when front
    } else {
      sideBadgeEl.textContent = 'Back'; // do something when back
    }

  }

  // --- Prev/Next: fully implemented with wrap-around ---
  function goNext() {
    current = (current + 1) % cards.length; // wrap to 0
    showingFront = true; // reset to front when moving to a new card
    render();
  }

  function goPrev() {
    current = (current - 1 + cards.length) % cards.length; // wrap to last
    showingFront = true; // reset to front when moving to a new card
    render();
  }

  // --- Events: Prev/Next wired for students to build on ---
  nextBtn.addEventListener('click', function () {
    goNext();
  });

  prevBtn.addEventListener('click', function () {
    goPrev();
  });

  // TODO: Flip behavior (click card or Flip button to toggle front/back)
  flipBtn.addEventListener('click', function () {
    showingFront = !showingFront;
    render();
  })

  flashcardEl.addEventListener('click', function () {
    showingFront = !showingFront;
    render();
  })

  // TODO: Keyboard shortcuts: ArrowRight = next, ArrowLeft = prev, Space/Enter = flip
  document.addEventListener('keydown', function (event) {
    console.log(event.key);
    if (event.key === 'ArrowRight') {
      goNext();
    } else if (event.key === 'ArrowLeft') {
      goPrev();
    } else if (event.key === ' ' || event.key === 'Enter') {
      flashcardEl.classList.toggle('flipped');
      render();
    }
  });

  // Initial render
  render();
})();
