import React, { useState } from "react";

const Exercicio5 = () => {
  const [pessoas, setPessoas] = useState([
    { nome: "Alice", idade: 25, cidade: "São Paulo" },
    { nome: "Bob", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Carol", idade: 40, cidade: "São Paulo" },
    { nome: "David", idade: 28, cidade: "São Paulo" },
    { nome: "Eve", idade: 32, cidade: "São Paulo" },
  ]);

  const pessoasMaioresDe30EmSP = pessoas.filter(
    (pessoa) => pessoa.idade > 30 && pessoa.cidade === "São Paulo"
  );

  return (
    <div>
      <h2>Pessoas com mais de 30 anos em São Paulo:</h2>
      {pessoasMaioresDe30EmSP.map((pessoa, index) => (
        <span key={index}>
          <li>{pessoa}</li>
        </span>
      ))}
    </div>
  );
};

export default Exercicio5;
