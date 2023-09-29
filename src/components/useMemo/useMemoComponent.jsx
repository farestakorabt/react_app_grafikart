import { useState, useMemo, useId } from "react";
import { Input } from "../useState/forms/Input";

const useMemoComponent = () => {
  const [username, setUsename] = useState("John");
  const [password, setPassword] = useState("Mot de passe");

  const security = useMemo(() => {
    return passwordSecurity(password);
  }, [password]);

  // rien dans le callback, signifie que la valeur ne changera pas à part rafraichir la page
  const random = useMemo(() => Math.random(), []);

  console.log(useId()); // :r0:

  return (
    <>
      {random}
      <Input label="Nom d'utilisateur" value={username} onChange={setUsename} />
      <Input
        label="Password"
        value={password}
        onChange={setPassword}
        type="password"
      />
      Sécurité: {security}
    </>
  );

  function passwordSecurity(password) {

    // let startTime = performance.now();

    // // fonction qui sert à retarder l'execution
    // while(performance.now() - startTime < 200) {

    // }

    if (password.length < 3) {
      return "Faible";
    } else if (password.length < 8) {
      return "Moyen";
    } else {
      return "Fort";
    }
  }
};

export default useMemoComponent;
