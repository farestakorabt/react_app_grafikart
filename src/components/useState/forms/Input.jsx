/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 * @returns {JSX.Element}
 * @constructor
 */

import { useId } from "react";

export function Input({ placeholder, value, onChange, label }) {
  
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        className=""
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
