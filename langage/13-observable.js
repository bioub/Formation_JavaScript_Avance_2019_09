// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// // setTimeout(() => {
// //   console.log('1s');
// // }, 1000);

// timeout(1000)
//   .then(() => console.log('1s'));

// (async () => {
//   await timeout(1000);
//   console.log('1s');
// })();

const { Observable } = require('rxjs');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delayMs);
  });
}

// setTimeout(() => {
//   console.log('1s');
// }, 1000);

interval(1000)
  .subscribe(() => console.log('1s'));

