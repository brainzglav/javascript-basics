class User {
  #name;
  #surname;
  className = "Javascript lessons";

  // Ima uvik samo jedan ulazni parametar i nikad ne vraca vrijednost.
  // Mora postavit neku varijablu stanja u vrijednost
  set fullName(sex) {
    this.#name = sex === "MALE" ? `Mr. ${this.#name}` : `Mrs. ${this.#name}`;
  }

  // Nikad nema ulazne parametre i uvik vraca vrijednost
  get fullName() {
    return `${this.#name} ${this.#surname}`;
  }

  constructor(name, surname) {
    //console.log("Constructor has been called!");
    this.#name = name;
    this.#surname = surname;
  }

  /* getFullName() {
    return `${this.name} ${this.surname}`;
  } */
}

const user = new User("Bikonja", "Bikic");

user.fullName = "MALE";

//user.#writeClassName();

console.log(user, user.fullName);
//console.log(user.#name);
