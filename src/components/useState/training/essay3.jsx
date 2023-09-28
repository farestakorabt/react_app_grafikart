import { useState } from "react";
import "./App.css";

function Essay3() {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  return (
    <form>
      <CGUCheckbox checked={isTermsAccepted} onCheck={setIsTermsAccepted} />
      <button disabled={!isTermsAccepted}>Envoyer le formulaire</button>
    </form>
  );
}

function CGUCheckbox({ checked, onCheck }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={(e) => onCheck(e.target.checked)}
          checked={checked}
        />
        Accepter les conditions dutilisation
      </label>
    </div>
  );
}

export default Essay3;
