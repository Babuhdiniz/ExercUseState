import React, { useState } from "react";

const Exercicio2 = () => {
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const numerosMaioresQueCinco = numeros.filter((numero) => numero > 5);

  return (
    <div>
      <h2>Números maiores que 5:</h2>
      {numerosMaioresQueCinco.map((numero, index) => (
        <span key={index}>
          <li>{numero}</li>
        </span>
      ))}
    </div>
  );
};

export default Exercicio2;
