// 1. Duplicator
const duplicate = (arr) => {
  return arr.concat(arr);
};
// concat은 인수를 얕은복사로 복사해서 사용.

// console.log(duplicate([1, 2, 3]));

//  2. sum with closure 'sum(1)(2)(3)()'
const sum = (x) => {
  return (y) => {
    if (y) return sum(x + y);

    return x;
  };
};

const mul = (x) => {
  return (y) => {
    return (z) => {
      return x * y * z;
    };
  };
};

// console.log(sum(1)(2)(3)());
// console.log(mul(4)(3)(2));

// 4. delay 함수 구현
const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
};

const main = async () => {
  console.log("1번");
  await delay(4);
  // 첫번째 콘솔('1번')이 찍힌 후 4초 후에 찍힘`
  // output
  // '1번'
  // ...4초 후...
  // '2번!!!'
  console.log("2번!!!");
};
// main();

// 5. array 중복 요소 제거

// 6. str 중복 요소 제거

// 7. 문자열 뒤집기

// 8. Math.max without spread operator

// 9. 비동기 http 통신
// const response = fetch(
//   "https://openapi.naver.com/v1/search/movie.json?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&genre=1",
//   {
//     headers: {
//       "X-Naver-Client-Id": "Ua1dxtfO96kVN8tnZ9VG",
//       "X-Naver-Client-Secret": "3qbFtkdusD",
//     },
//   }
// )
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// const response = axios.get("https://openapi.naver.com/v1/search/movie.json", {
//   headers: {
//     "X-Naver-Client-Id": "Ua1dxtfO96kVN8tnZ9VG",
//     "X-Naver-Client-Secret": "3qbFtkdusD",
//   },
// });

// console.log(response);

const arr = [1, 2, 3, 4, 5];

// const delay2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000);
//     console.log("sd");
//   });
// };

// 루프에서 클로저?
arr.reduce(async (prev, cur, index) => {
  await prev;
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
  console.log(index);
}, Promise.resolve());

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(
//     (function (i_loc) {
//       return function () {
//         console.log(i_loc);
//       };
//     })(i),
//     1000
//   );
// }

let i = 0;
const logNextItem = () => {
  if (i < arr.length) {
    console.log(arr[i]);
    i++;
    setTimeout(logNextItem, 1000);
  }
};
logNextItem();

// Example usage
// const arr2 = [1, 2, 3, 4];
// delayedLogger(arr2, 3000);
