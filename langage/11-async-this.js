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
}

const romain = new Contact('Romain');
romain.helloAsync();

