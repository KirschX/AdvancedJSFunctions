// 1. reducer //
Array.prototype.newReduce = function (callback, initialValue) {
  if (initialValue === undefined && this.length === 0) {
    throw new Error("Reduce of empty array with no initial value");
  }

  if (typeof callback !== "function") {
    throw new Error(`${callback} is not a function`);
  }

  let acc = initialValue !== undefined ? initialValue : this[0];

  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

let result = [1, 2, 3].newReduce((acc, cur, i, thisArr) => {
  {
    console.log(acc, cur, i, thisArr);
  }
  //   return acc + cur;
});
