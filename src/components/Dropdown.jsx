export default function Dropdown({ label, options, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="border p-2 rounded w-full text-black"
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
}
