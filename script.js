// Task 1: Verification
console.log("Status Manager Started");

// Timer state
let intervalId = null;

// Element references
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

// Task 3: Update title on load
mainTitle.innerHTML = "DOM Project: Ready!";

// Task 4: Add data attribute
toggleButton.setAttribute("data-action", "status-toggle");

// Task 9: Highlight list items
function highlightListItems() {
  const listItems = itemList.querySelectorAll("li");
  listItems.forEach((item) => {
    item.style.color = "blue";
  });
}

highlightListItems();

// Task 8: Create and append a timestamp
function createTimestamp() {
  const timeSpan = document.createElement("span");
  const timeText = document.createTextNode(new Date().toLocaleTimeString());
  timeSpan.appendChild(timeText);
  timeSpan.style.display = "block";
  statusOutput.appendChild(timeSpan);
}

// Tasks 5, 6, 7: Toggle status and update styles
function toggleStatus(e) {
  e.preventDefault();
  statusOutput.classList.toggle("hidden");

  const isVisible = !statusOutput.classList.contains("hidden");
  if (isVisible) {
    mainTitle.style.backgroundColor = "yellow";
    createTimestamp();
  } else {
    mainTitle.style.backgroundColor = "";
  }
}

toggleButton.addEventListener("click", toggleStatus);

// Task 10: Start flashing panel every 500ms
function startFlashing() {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

// Task 10: Stop flashing and restore panel visibility
function stopFlashing() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }

  controlPanel.classList.remove("hidden");
}

timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
