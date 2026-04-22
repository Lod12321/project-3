# Project 3: The Status Manager
## Files

- [`index.html`](index.html) — page structure and target elements
- [`style.css`](style.css) — base styles and `.hidden` utility class
- [`script.js`](script.js) — JavaScript logic for all tasks

### Task 1 — Verification

- Added startup log using [`console.log()`](script.js:2).
- Output: `Status Manager Started`.

### Task 2 — Selector Analysis

- Verified `.hidden` class in [`style.css`](style.css:37) uses [`display: none`](style.css:39).
- Confirmed [`#status-output`](index.html:24) starts hidden.

### Task 3 — Modify Content on Load

- Updated title with [`innerHTML`](script.js:16).
- Code: [`mainTitle.innerHTML = "DOM Project: Ready!";`](script.js:16)

### Task 4 — Manipulate Attributes

- Added custom attribute with [`setAttribute()`](script.js:19).
- Code: [`toggleButton.setAttribute("data-action", "status-toggle");`](script.js:19)

### Task 5 — Toggle Function

- Implemented [`toggleStatus(e)`](script.js:32).
- Uses [`classList.toggle()`](script.js:34) on [`#status-output`](index.html:24).
- Click handler attached with [`addEventListener("click", ...)`](script.js:45).

### Task 6 — Prevent Default Behavior

- Added [`e.preventDefault()`](script.js:33) inside [`toggleStatus(e)`](script.js:32).
- Prevents anchor jump from [`href="#"`](index.html:17).

### Task 7 — Inline Styles

- Checks visibility with [`classList.contains()`](script.js:36).
- If visible: [`mainTitle.style.backgroundColor = "yellow"`](script.js:38)
- If hidden: [`mainTitle.style.backgroundColor = ""`](script.js:41)

### Task 8 — Dynamic Element Creation

- Created helper [`createTimestamp()`](script.js:24).
- Uses [`document.createElement("span")`](script.js:25)
- Sets time with [`new Date().toLocaleTimeString()`](script.js:26)
- Appends with [`appendChild()`](script.js:28)
- Called when status becomes visible in [`toggleStatus(e)`](script.js:39)

### Task 9 — Loops and Node Lists

- Implemented [`highlightListItems()`](script.js:9).
- Selects all list items with [`document.querySelectorAll("li")`](script.js:10)
- Iterates via [`forEach()`](script.js:11)
- Applies inline color: [`item.style.color = "blue"`](script.js:12)
- Runs on load with [`highlightListItems();`](script.js:16)

### Task 10 — Flashing Timer

- Global interval state: [`let intervalId = null`](script.js:5)
- Start logic in [`startFlashing()`](script.js:48)
  - Uses [`setInterval()`](script.js:51) every `500ms`
  - Toggles panel class via [`controlPanel.classList.toggle("hidden")`](script.js:52)
- Stop logic in [`stopFlashing()`](script.js:57)
  - Uses [`clearInterval(intervalId)`](script.js:59)
  - Resets state and restores visibility with [`classList.remove("hidden")`](script.js:63)
- Events bound to [`#timer-button`](index.html:20)
  - Click: [`addEventListener("click", startFlashing)`](script.js:66)
  - Double click: [`addEventListener("dblclick", stopFlashing)`](script.js:67)

## Methods and APIs Used

- DOM selection: [`document.querySelector()`](script.js:9), [`document.getElementById()`](script.js:10), [`document.querySelectorAll()`](script.js:10)
- DOM content/attributes: [`innerHTML`](script.js:16), [`setAttribute()`](script.js:19)
- Class and style updates: [`classList.toggle()`](script.js:34), [`classList.contains()`](script.js:36), [`classList.remove()`](script.js:63), [`element.style.backgroundColor`](script.js:38), [`element.style.color`](script.js:12)
- Events: [`addEventListener()`](script.js:45), [`Event.preventDefault()`](script.js:33)
- Element creation: [`document.createElement()`](script.js:25), [`appendChild()`](script.js:28)
- Timing: [`setInterval()`](script.js:51), [`clearInterval()`](script.js:59)
- Date/time: [`Date`](script.js:26), [`toLocaleTimeString()`](script.js:26)

