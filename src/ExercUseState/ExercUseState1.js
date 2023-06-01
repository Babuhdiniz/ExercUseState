import React, { useState } from "react";

const Exercicio1 = () => {
  const [nomes, setNomes] = useState(["Alice", "Bob", "Carol", "David", "Eve"]);

  const nomesComLetraA = nomes.filter((nome) => nome.includes("a"));

  return (
    <div>
      <h2>Nomes com a letra 'a':</h2>
      {nomesComLetraA.map((nome, index) => (
        <span key={index}>
          <li>{nome}</li>
        </span>
      ))}
    </div>
  );
};

export default Exercicio1;
