let nb1 = 10;
let nb2 = nb1;
nb2 = 20;

console.log(nb1); // 10

let o1 = { nb: 10 };
let o2 = o1;
o2.nb = 20;

console.log(o1.nb); // 20

function Contact(firstName, address) {
  this.firstName = firstName;
  this.address = address;
}

function Address(city) {
  this.city = city;
}

const address = new Address('Puteaux');
const romain = new Contact('Romain', address);

console.log(romain.address.city); // Puteaux

