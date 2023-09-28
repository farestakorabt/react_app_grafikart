/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 * @returns {JSX.Element}
 * @constructor
 */

export default function Input({ placeholder, value, onChange }) {
  return (
    <div>
      <input
        type="text"
        className=""
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
