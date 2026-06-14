// const numero = "190";
// // O operador de comparação "==" compara os valores, mas não os tipos. Ele fará uma conversão de tipo se necessário.
// if (numero == 190) {
//   console.log("O numero é da polícia militar");
// } else {
//   console.log("O numero não é da polícia militar");
// }

// const numero = "190";
// // O operador de comparação "===" compara tanto os valores quanto os tipos. Ele não fará uma conversão de tipo, e ambos os lados devem ser do mesmo tipo para serem considerados iguais.
// if (numero === 190) {
//   console.log("O numero é da polícia militar");
// } else {
//   console.log("O numero não é da polícia militar");
// }

//caso 1: o cara vai lá e coloca o cpf com pontuação

function verificarCpf(cpf, bancoDeCpfs) {
  const cpfLimpo = cpf.replaceAll(".", "").replaceAll("-", "");
  const cpfValor = parseInt(cpfLimpo);
  if (!bancoDeCpfs.includes(cpfValor)) {
    bancoDeCpfs.push(cpfValor);
    console.log("CPF cadastrado com sucesso!", `O cpf é: ${cpfValor}`);
  } else {
    console.log("CPF já cadastrado!");
  }
}

const bancoDeCpfs = [];

const cpf = "123.456.789-00";

verificarCpf(cpf, bancoDeCpfs);

const cpf2 = "12345678900";
verificarCpf(cpf2, bancoDeCpfs);
