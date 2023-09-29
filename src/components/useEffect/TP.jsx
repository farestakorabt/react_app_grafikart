import { useState, useEffect } from "react";
import Input from "../../components/useState/forms/Input";

const TP = () => {
  const [duration, setDuration] = useState(5);
  const [secondsLeft, setSecondLeft] = useState(duration);

  const handleChange = (v) => {
    setDuration(v);
    setSecondLeft(v);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondLeft((v) => {

        // remmettre v 0 et ne pas accepter -1

        if (v <= 1) {
          clearInterval(timer);
          return 0;
        } else {
          return v - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  return (
    <div>
      <Input value={duration} onChange={handleChange} placeholder="Timer" />

      <div>Compte à rebour: {secondsLeft}</div>
    </div>
  );
};

export default TP;
