const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const button = document.getElementById("btn");

button.addEventListener("click", () => {
  let backgroundColor = "#";
  for (let i = 0; i < 6; i++) backgroundColor += hex[getRandomValue()];
  document.body.style.backgroundColor = backgroundColor;
  document.querySelector(".color").textContent = backgroundColor;
});

const getRandomValue = () => {
  return Math.floor(Math.random() * hex.length);
};
