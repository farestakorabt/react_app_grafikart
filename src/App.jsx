import "./App.css";
import { useEffect, useState } from "react";
import Checkbox from "../src/components/useState/forms/Checkbox";
import Input from "../src/components/useState/forms/Input";

function App() {
  const [showInput, setShowInput] = useState(true);

  return (
    <>
      <Checkbox
        checked={showInput}
        onChange={setShowInput}
        id="showInput"
        label="Afficher le champs titre"
      />

      {showInput && <EditTitle />}
      <div style={{ height: "300vw" }}></div>
    </>
  );
}

function EditTitle() {
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("title");
    document.title = title;
  }, [title]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setY(window.scrollY);
    });
  }, []);

  return (
    <div>
      <div style={{ position: "fixed" }}>Scroll: {y}</div>
      <br />

      <Input
        value={title}
        onChange={setTitle}
        placeholder="Modifier le titre de la page"
      />

      <Input value={firstname} onChange={setFirstname} placeholder="Prénom" />
    </div>
  );
}

export default App;
