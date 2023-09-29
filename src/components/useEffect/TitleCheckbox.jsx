import "../../App.css";
import { useEffect, useState } from "react";
import { Checkbox } from "../useState/forms/Checkbox";
import Input from "../useState/forms/Input";
import ShowWelcomeMessage from "./ShowWelcomeMessage";

function TitleCheckbox() {
  const [showInput, setShowInput] = useState(true);

  return (
    <>
      <Checkbox
        checked={showInput}
        onChange={setShowInput}
        id="showInput"
        label="Afficher le champs titre"
      />

      <ShowWelcomeMessage />

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
    const originalTitle = document.title;

    return () => {
      document.title = originalTitle;
    };
  }, []);

  // title handler
  useEffect(() => {
    console.log("title");
    document.title = title;
  }, [title]);

  // scroll
  useEffect(() => {
    const handler = () => {
      console.log("scroll");
      setY(window.scrollY);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
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

export default TitleCheckbox;
