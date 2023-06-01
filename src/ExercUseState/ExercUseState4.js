import React, { useState } from "react";

const Exercicio4 = () => {
  const [pessoas, setPessoas] = useState([
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 17 },
    { nome: "Carol", idade: 32 },
    { nome: "David", idade: 14 },
    { nome: "Eve", idade: 19 },
  ]);
  const pessoasMenoresDe18 = pessoas.filter((pessoa) => pessoa.idade < 18);

  return (
    <div>
      <h2>Pessoas menores de 18 anos:</h2>
      {pessoasMenoresDe18.map((pessoa, index) => (
        <span key={index}>
          <li>{pessoa}</li>
        </span>
      ))}
    </div>
  );
};

export default Exercicio4;
