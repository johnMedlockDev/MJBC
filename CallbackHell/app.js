document.title = "Callback Hell";

const btn = document.querySelector("button");

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject();
      } else {
        element.style.transform = `translate(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(btn, 300, 1000)
  .then(() => {
    return moveX(btn, 300, 1000);
  })
  .then(() => {
    return moveX(btn, 300, 1000);
  })
  .then(() => {
    return moveX(btn, 300, 1000);
  })
  .then(() => {
    return moveX(btn, 300, 1000);
  })
  .then(() => {
    console.log("Done with both");
  })
  .catch(() => {
    console.log("Out of space, cannot move!");
  });
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   const bodyBoundary = document.body.clientWidth;
//   const elRight = element.getBoundingClientRect().right;
//   const currLeft = element.getBoundingClientRect().left;

//   if (elRight + amount > bodyBoundary) {
//     onFailure();
//   } else {
//     setTimeout(() => {
//       element.style.transform = `translate(${currLeft + amount}px)`;
//       onSuccess();
//     }, delay);
//   }
// };

// moveX(btn, 1000, 1000, () => {
//   moveX(btn, 1000, 1000);
// });

// moveX(btn, 100, 1000, ()=>{
//     // success
//     moveX(btn, 400, 1000, ()=>{
//         // success
//     }),()=> {
//         // failure
//     }
// })

// Nasty nested all backs are the problem that promises solve.

// something new Promise // arrow fun resolve reject. then resolve catch reject.
