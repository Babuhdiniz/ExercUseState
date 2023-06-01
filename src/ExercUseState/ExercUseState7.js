import React, { useState } from "react";

const Exercicio7 = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const LimparDados = () => {
    setNome("");
    setEmail("");

    return (
      <div>
        <h2>Formulário</h2>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <button onClick={LimparDados}>Enviar</button>
      </div>
    );
  };
};

export default Exercicio7;
