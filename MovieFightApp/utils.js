const debounce = (func, delay = 500) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

// First implementation
// ****************************
// let timeoutId;
// const onInput = (event) => {
//   // Checks for a timeout id. If one exist it clears the timeout interval.
//   if (timeoutId) {
//     clearTimeout(timeoutId);
//   }
//   // setTimeout will prevent the input from sending a request everytime the user types
//   //   this code also resets the timeout id until the user stops typing for 1 second
//   timeoutId = setTimeout(() => {
//     fetchData(event.target.value);
//   }, 500);
//   fetchData(event.target.value);
// };
