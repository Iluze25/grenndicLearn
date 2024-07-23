function person(firstName, lastName, hobies, email, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.hobies = hobies;
  this.email = email;
  this.address = address;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.leanguage = "Indonesia";
}

const diki = new person(
  "Dicky",
  "Darmansyah",
  "Code, Binaraga",
  "DikiDarmansyah15@gmail.com",
  "Tasikmalaya - Jamanis"
);

const adit = new person(
  "Aditya",
  "Ardinsyah",
  "Melukis",
  "aditya@gmail.com",
  "Tasikmalaya-Jamanis"
);
