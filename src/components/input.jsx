export default function Input({
  type = "text",
  name,
  required,
  label,
  id,
  value,
  onChange,
}) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
        className="peer p-2 pt-6 rounded-xl border border-mute outline-none w-full focus:ring-2 focus:ring-variant transition-all duration-300"
        placeholder=" "
      />
      <label
        htmlFor=""
        className="text-sm absolute capitalize text-shade duration-300 transform -translate-y-3 top-5 left-2 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
}
