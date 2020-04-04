const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet"
];

const changeColor = function() {
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
};

// select the container for the generated content
const container = document.querySelector("#boxes");
// loop over the array for num boxes and color of boxes
for (let color of colors) {
  // create the box element
  const box = document.createElement("div");
  // add the css class name to box
  box.classList.add("box");
  // taget the style you want to define on each box
  box.style.backgroundColor = color;
  // append the element to the container
  container.append(box);
  // add event listener to each box
  box.addEventListener("click", changeColor);
}
