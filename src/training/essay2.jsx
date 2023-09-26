import { useState } from "react";
import "./App.css";

function Essay2() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(new FormData(e.target));
  };

//   const [value, setValue] = useState(" ");

//   const handleChange = (e) => {
//     console.log(e.target.value);
//   };

  const [checked, setChecked] = useState(true);
  const toggleCheck = (e) => {
    setChecked(!checked);
    console.log(e.target.checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" defaultValue="Votre prénom" />
      <input type="checkbox" checked={checked} onChange={toggleCheck} />
      <br />

      {checked ? <button>Envoyer</button> : ""}
      <br />
      <br />

      <button disabled={!checked}>Envoyer</button>
      <br />
    </form>
  );
}

export default Essay2;
