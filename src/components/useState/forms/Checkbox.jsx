/**
 * @param {boolean} checked
 * @param {(s: string) => void} onChange
 * @param {string} label
 * @param {string} id
 * @returns {JSX.Element}
 * @constructor
 */

export function Checkbox({ checked, onChange, label, id }) {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
