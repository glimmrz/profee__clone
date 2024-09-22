export default function Input({
  label,
  name,
  placeholder,
  type = "text",
  required,
  onChange,
  value,
}) {
  return (
    <div className="grid gap-1">
      {label && (
        <label htmlFor="" className="text-base text-shade capitalize">
          {label}
        </label>
      )}
      <input
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        className="p-3 rounded-md outline-0 border border-mute text-base"
      />
    </div>
  );
}
