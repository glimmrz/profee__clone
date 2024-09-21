import Icon from "./icon";

export default function Button({
  variant = "primary",
  label,
  type = "button",
  icon,
  size,
  onClick,
}) {
  const variants = {
    primary: "bg-primary text-white hover:bg-variant",
    outline:
      "bg-transparent border-variant text-variant hover:border-primary hover:text-primary",
    close: "bg-transparent rounded-full",
  };

  const sizes = {
    lg: "!pt-3 !pb-3 !pl-6 !pr-6 uppercase !text-2xl !font-extrabold !rounded-2xl",
    xl: "!pt-5 !pb-5 !pl-6 !pr-6 uppercase !text-3xl !font-extrabold !rounded-2xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`pt-2 pb-2 pl-6 pr-6 border border-transparent text-base first-letter:capitalize rounded-md transition-colors duration-300 cursor-pointer ${variants[variant]} ${sizes[size]}`}
    >
      {label}
      {icon && <Icon icon={icon} />}
    </button>
  );
}
