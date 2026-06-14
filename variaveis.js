const message = "Hello, World!";

let personalizedMessage;

const nomes = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < nomes.length; i++) {
  personalizedMessage = `${message} My name is ${nomes[i]}.`;
  console.log(personalizedMessage);
}
