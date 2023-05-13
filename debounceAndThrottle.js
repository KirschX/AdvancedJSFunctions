/// 1. debounce

function debounce(fn, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(context, ...args), delay);
  };
}

const debouncedAlert = debounce(function () {
  console.log(this);
  window.alert("debounce");
}, 1000);

document.getElementById("button").addEventListener("click", debouncedAlert);

//code examples
// 1) chatgpt3.5

// function debounce(func, delay) {
//   let timeout;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(context, args), delay);
//   };
// }

// 2) chatgpt4.0

// const debounce = (fn, delay) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => fn(...args), delay);
//   };
// };

// const debouncedAlert = debounce((message) => {
//   console.log(message);
//   console.log(this);
//   window.alert(message);
// }, 1000);

// document
//   .getElementById("button")
//   .addEventListener("click", () => debouncedAlert("debounce"));
