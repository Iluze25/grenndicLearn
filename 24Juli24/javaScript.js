// function person(firstName, lastName, hobies, email, address) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.hobies = hobies;
//   this.email = email;
//   this.address = address;
//   this.fullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
//   this.leanguage = "Indonesia";
// }

// const diki = new person(
//   "Dicky",
//   "Darmansyah",
//   "Code, Binaraga",
//   "DikiDarmansyah15@gmail.com",
//   "Tasikmalaya - Jamanis"
// );

// const adit = new person(
//   "Aditya",
//   "Ardinsyah",
//   "Melukis",
//   "aditya@gmail.com",
//   "Tasikmalaya-Jamanis"
// );

// const person = {
//   firstName: prompt("Masukkan nama"),
//   lastName: prompt("Masukkan nama Belakang"),
//   hobies: prompt("Masukkan data Hobi"),
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// alert(person.fullName());

const dataClass = {
  satu: calssUp.adit,
};
function calssUp(firstName, lastName, leanguge, Dream, hobies, address) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.fullName = function () {
      return `${this.firstName} ${this.lastName}`;
    });
  (this.leanguge = leanguge),
    (this.Dream = Dream),
    (this.hobies = hobies),
    (this.address = address);
}

const adit = new calssUp(
  "Aditya",
  "Ardiansyah",
  "Indonesia, sunda",
  "Engineering",
  "Art",
  "Tasikmalaya-Jamanis"
);
