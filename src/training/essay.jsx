import { useState } from "react";
import "./App.css";

function Essay() {
  const [personne, setPersonne] = useState({
    firstName: "Jassica",
    lastName: "Alba",
    age: 33,
  });

  const incrementAge = () => {
    setPersonne({ ...personne, age: personne.age + 1 });
  };

  const [numero, setNumero] = useState(0);

  const incrementNumero = () => {
    setNumero(numero + 1);
  };

  return (
    <>
      <p>
        Age de {personne.firstName} est : {personne.age}
      </p>
      <button onClick={incrementAge}>Incrémenter age</button>
      <p>
        Numero de {personne.firstName} est : {numero}
      </p>
      <button onClick={incrementNumero}>Incrémenter numéro</button>
    </>
  );
}

export default Essay;
