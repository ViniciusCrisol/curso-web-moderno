const saudacao = 'opa';

function exec() {
  const saudacao = 'Falaaaaaaa nego';
  return saudacao;
}

const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logadouro: 'Rua Muito Legal',
    numero: 123,
  },
};

console.log(saudacao);
// opa
console.log(exec());
// Falaaaaaaa nego
console.log(cliente);
// Retorna o objeto
