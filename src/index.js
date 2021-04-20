const Person = require("./model/Person.js").Person;
const Address = require("./model/Address").Address;
const zipCode = require("./model/value_objects").zipCode;
const R = require("ramda");

const person = new Person("Alonzo", "Church", "444-44-4444");
console.log(`person `, person);

const lastnameLens = R.lensProp("_lastname");
console.log(`R.view(lastnameLens, person) `, R.view(lastnameLens, person));

const newPerson = R.set(lastnameLens, "Mourning", person);
console.log(`newPerson `, newPerson);

person._address = new Address(
  "US",
  "NJ",
  "Princeton",
  zipCode("08544", "1234"),
  "Alexander St."
);

console.log(`person `, person);
