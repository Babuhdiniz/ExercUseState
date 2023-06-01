import React, { useState } from "react";

const Exercicio3 = () => {
  const [palavras, setPalavras] = useState([
    "Dragão",
    "Cachorro",
    "Fada",
    "Panda",
  ]);
  const temPanda = palavras.includes("Panda");

  return (
    <div>
      <h2>Lista de palavras:</h2>
      {palavras.map((palavra, index) => (
        <span key={index}>
          <li>{palavra}</li>
        </span>
      ))}
      <h3>{temPanda ? "Panda está presente" : "Panda não está presente"}</h3>
    </div>
  );
};

export default Exercicio3;
