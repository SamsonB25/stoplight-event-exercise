const light = document.getElementById("traffic-light");
const controller = document.getElementById("controls");
const stopButton = document.getElementById("stopButton");
const stopLight = document.getElementById("stopLight");

const redLight = function () {
  stopLight.classList.toggle("stop");
  const text = stopButton.innerText;
  if (stopLight.className === "bulb") {
    console.log(`${text} bulb off`);
  } else {
    console.log(`${text} bulb on`);
  }
};

const redLightEnter = function () {
  const text = stopButton.innerText;
  console.log(`Entered ${text} Button`);
};

const redLightExit = function () {
  const text = stopButton.innerText;
  console.log(`Left ${text} Button`);
};

stopButton.addEventListener("click", redLight);
stopButton.addEventListener("mouseenter", redLightEnter);
stopButton.addEventListener("mouseleave", redLightExit);

const slowButton = document.getElementById("slowButton");
const slowLight = document.getElementById("slowLight");

const yellowLight = function () {
  slowLight.classList.toggle("slow");
  const text = slowButton.innerText;
  if (slowLight.className === "bulb") {
    console.log(`${text} bulb off`);
  } else {
    console.log(`${text} bulb on`);
  }
};

const yellowLightEnter = function () {
  const text = slowButton.innerText;
  console.log(`Entered ${text} Button`);
};

const yellowLightExit = function () {
  const text = slowButton.innerText;
  console.log(`Left ${text} Button`);
};

slowButton.addEventListener("click", yellowLight);
slowButton.addEventListener("mouseenter", yellowLightEnter);
slowButton.addEventListener("mouseleave", yellowLightExit);

const goButton = document.getElementById("goButton");
const goLight = document.getElementById("goLight");

const greenLight = function () {
  goLight.classList.toggle("go");
  const text = goButton.innerText;
  if (goLight.className === "bulb") {
    console.log(`${text} bulb off`);
  } else {
    console.log(`${text} bulb on`);
  }
};

const greenLightEnter = function () {
  const text = goButton.innerText;
  console.log(`Entered ${text} Button`);
};

const greenLightExit = function () {
  const text = goButton.innerText;
  console.log(`Left ${text} Button`);
};

goButton.addEventListener("click", greenLight);
goButton.addEventListener("mouseenter", greenLightEnter);
goButton.addEventListener("mouseleave", greenLightExit);
