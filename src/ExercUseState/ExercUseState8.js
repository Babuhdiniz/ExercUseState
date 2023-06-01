import React, { useState } from "react";

const Exercicio8 = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const calcularIMC = () => {
    const alturaEmMetros = altura;
    const imc = peso / (alturaEmMetros * alturaEmMetros);
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <form>
        <label>
          Altura:
          <input
            type="number"
            value={altura}
            onChange={(event) => setAltura(event.target.value)}
          />
        </label>
        <br />
        <label>
          Peso:
          <input
            type="number"
            value={peso}
            onChange={(event) => setPeso(event.target.value)}
          />
        </label>
        <br />
        <button>[Calcular IMC]</button>
      </form>
    </div>
  );
};

export default Exercicio8;
