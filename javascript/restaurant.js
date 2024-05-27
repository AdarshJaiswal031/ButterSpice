const carUl = document.getElementById("sec-1-carousel");
const carChild = carUl.children;
const len = carChild.length;

let currentIndex = 0; // Initialize the current index

// Define a function to transition to the next image
function transitionToNextImage() {
  const prevIndex = currentIndex === 0 ? len - 1 : currentIndex - 1; // Calculate the previous index
  carChild[prevIndex].classList.remove("opacity-1");
  carChild[prevIndex].classList.add("opacity-0");
  carChild[currentIndex].classList.remove("opacity-0");
  carChild[currentIndex].classList.add("opacity-1");

  currentIndex = (currentIndex + 1) % len; // Update the current index for the next iteration
}

// Call the transition function initially
transitionToNextImage();

// Set an interval to call the transition function every 3000 milliseconds
setInterval(transitionToNextImage, 3000);


const imgLoop = document.getElementById("sec-3-img-loop");
const imgLength = imgLoop.children.length;
let loopIndex = 0;
const tl = gsap.timeline({ repeat: -1 });
let isIncrease = true


// setInterval(function () {
//   if (loopIndex == 0) {
//     isIncrease = true
//   }
//   if (loopIndex >= (imgLength - 4)) {
//     isIncrease = false;
//   }
//   if (isIncrease) {
//     an.shiftImg(imgLoop, loopIndex++, 20, imgLength);
//   }
//   else {
//     an.shiftImg(imgLoop, loopIndex--, 20, imgLength);

//   }
// }, 3000);


// const imgLoopChildern = imgLoop.children
// Array.from(imgLoopChildern).forEach((item) => {
//   const addDiv = item.children[1];
//   an.drawer(item, addDiv)
// })


