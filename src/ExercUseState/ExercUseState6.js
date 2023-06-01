import React, { useState } from "react";

const Exercicio6 = () => {
  const [numeros, setNumeros] = useState([2, 4, 6, 8, 10]);

  const saoTodosPares = numeros.filter((numero) => numero % 2 === 0);



  //
  return (
    <div>
      <h2>Lista de números:</h2>
      {numeros.map((numero, index) => (
        <span key={index}>
          <li>{numero}</li>
        </span>
      ))}
      <h3>
        {saoTodosPares
          ? "Todos os números são pares"
          : "A lista possui números ímpares"}
      </h3>
    </div>
  );
};

export default Exercicio6;
