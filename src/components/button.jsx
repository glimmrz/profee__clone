export default function Button({
  variant = "primary",
  label,
  type = "button",
  size,
}) {
  const variants = {
    primary: "bg-primary text-white hover:bg-variant",
    outline: "bg-transparent border-variant text-white hover:border-primary",
  };

  const sizes = {
    lg: "!pt-3 !pb-3 !pl-6 !pr-6 uppercase !text-2xl !font-extrabold !rounded-2xl",
  };

  return (
    <button
      type={type}
      className={`pt-3 pb-3 pl-6 pr-6 border border-transparent text-base first-letter:capitalize rounded-md transition-colors duration-300 ${variants[variant]} ${sizes[size]}`}
    >
      {label}
    </button>
  );
}
