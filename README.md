# Profile Card — HNG Stage 0 Task

A simple, **accessible**, and **responsive Profile Card** built with **semantic HTML**, **modern CSS**, and **vanilla JavaScript**.

This project was created as part of the **HNG Frontend Wizards — Stage 0 Task.**

## Live Demo

**Live URL:** https://chukwuderah.github.io/hng13-stage0-profile-card/

**GitHub Repo:** https://github.com/Chukwuderah/hng13-stage0-profile-card

## Project Overview

This project demonstrates:

- Semantic and accessible **HTML5** structure

- Dynamic display of the current time in **milliseconds** using `Date.now()`

- Responsive layout using **CSS Flexbox/Grid**

- Keyboard-accessible and screen-reader-friendly interactions

- Compliance with all **HNG Stage 0** automated tests

## Features

- Semantic **HTML5** structure `(<article>, <header>, <nav>, <section>, <figure>)`

- Auto-updating real-time display using `Date.now()`

- Minimalist grayscale theme using these colors:

  - `#ffffff` (white)

  - `#D4D4D4` (light gray)

  - `#B3B3B3` (medium gray)

  - `#2B2B2B` (dark gray)

- Social links that open in new tabs with `rel="noopener noreferrer"`

- Accessibility-enhanced (ARIA labels, focusable links, polite live updates)

- Fully responsive layout for mobile, tablet, and desktop screens

## Tech Stack

**HTML5** — Semantic structure

**CSS3** — Responsive styling with Flexbox/Grid

**JavaScript (Vanilla)** — Real-time clock updates and accessibility support

## Project Structure
```bash
├── index.html       # Main HTML structure with data-testid attributes
├── styles.css       # Responsive, minimalist design
├── script.js        # Dynamic time updates and accessibility enhancement
└── asset/
    └── profile-pic.jpg
```

## How to Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/Chukwuderah/hng13-stage0-profile-card.git
   ```

2. Open the folder:

   ```bash
    cd hng13-stage0-profile-card
    ```


3. Open `index.html` in your browser.

4. You should see:

   - The current time updating every second (in milliseconds).

   - A clean, responsive profile card.

## Test IDs Checklist

| Element                | `data-testid`               |
| ---------------------- | --------------------------- |
| Root Container         | `test-profile-card`         |
| Name                   | `test-user-name`            |
| Bio                    | `test-user-bio`             |
| Time                   | `test-user-time`            |
| Avatar                 | `test-user-avatar`          |
| Social Links Container | `test-user-social-links`    |
| Twitter Link           | `test-user-social-twitter`  |
| GitHub Link            | `test-user-social-github`   |
| LinkedIn Link          | `test-user-social-linkedin` |
| Hobbies List           | `test-user-hobbies`         |
| Dislikes List          | `test-user-dislikes`        |


## Accessibility

- Proper heading structure

- Descriptive alt text on avatar

- Keyboard-navigable links

- Visible focus styles

- ARIA live region for time updates (optional enhancement)

## JavaScript Logic

**script.js** updates the current time dynamically every second using `Date.now()`.

```js
document.addEventListener("DOMContentLoaded", function () {
  const timeElement = document.getElementById("userTime");

  function updateTime() {
    const currentTime = Date.now();
    timeElement.textContent = currentTime;
    announceTimeUpdate();
  }

  updateTime();
  setInterval(updateTime, 1000);
  console.log("Profile Card initialized - Time updates active");
});

function announceTimeUpdate() {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.style.position = 'absolute';
  announcement.style.left = '-10000px';
  announcement.textContent = `Time updated: ${Date.now()}`;
  document.body.appendChild(announcement);
  setTimeout(() => document.body.removeChild(announcement), 1000);
}
```

## Author

**Pleasant “[Praevus](https://pleasant-chukwuderah.vercel.app/)” Chukwuderah**

Frontend Engineer & Technical Writer

🔗 [Twitter](https://x.com/Pleasant_Dev)
 | [GitHub](https://github.com/Chukwuderah)
 | [LinkedIn](https://www.linkedin.com/in/pleasant-chukwuderah-327149183/)