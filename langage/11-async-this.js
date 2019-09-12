class Contact {
  constructor(firstName) {
    this.firstName = firstName;
  }
  hello() {
    console.log(`Hello my name is ${this.firstName}`);
  }
  helloAsync() {
    setTimeout(() => {
      console.log(`Hello my name is ${this.firstName}`);
    }, 100);
  }
  helloAsyncMethod() {
    setTimeout(this.hello.bind(this), 100);
  }
}

const romain = new Contact('Romain');
romain.helloAsync();
romain.helloAsyncMethod();

// Function.prototype.bind = function(that) {
//   var fct = this;
//   return function() {
//      fct.call(that);
//   }
// }
