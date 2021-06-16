document.addEventListener("keydown", displayKeyEventInfo);
document.addEventListener("keydown", playSound);
document.addEventListener("keydown", addBgColor);
document.addEventListener("keyup", removeBgColor);

function displayKeyEventInfo(ev) {
  if (ev.keyCode === 9) {
    ev.preventDefault();
  }

  document.querySelector(".container").innerHTML = `
    <div class="value-box primary-col1">
        <p class="value-label">keyValue</p>
        <div class="value primary-value">${
          ev.key === " " ? "spacebar" : ev.key
        }</div>
      </div>
      <div class="value-box primary-col2">
        <p class="value-label">keyCode</p>
        <div class="value primary-value">${ev.keyCode}</div>
      </div>
      <div class="value-box secondary-col1">
        <p class="value-label">altKey</p>
        <div class="value secondary-value">${ev.altKey}</div>
      </div>
      <div class="value-box secondary-col2">
        <p class="value-label">ctrlKey</p>
        <div class="value secondary-value">${ev.ctrlKey}</div>
      </div>
      <div class="value-box secondary-col3">
        <p class="value-label">metaKey</p>
        <div class="value secondary-value">${ev.metaKey}</div>
      </div>
      <div class="value-box secondary-col4">
        <p class="value-label">shiftKey</p>
        <div class="value secondary-value">${ev.shiftKey}</div>
      </div>
    `;
}

function playSound(ev) {
  let fn = ev.keyCode + ".wav";
  let src = "../Media/" + fn;
  let audio = document.createElement("audio");
  audio.src = src;
  audio.play();
  audio.volume = 0.2;
}

function addBgColor() {
  const key = document.querySelector(".primary-col1");
  const keyCode = document.querySelector(".primary-col2");
  keyCode.classList.add("bgColor1");
  key.classList.add("bgColor2");
}

function removeBgColor() {
  const key = document.querySelector(".primary-col1");
  const keyCode = document.querySelector(".primary-col2");
  keyCode.classList.remove("bgColor1");
  key.classList.remove("bgColor2");
}
