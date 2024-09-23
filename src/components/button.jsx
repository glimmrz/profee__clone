import Icon from "./icon";

export default function Button({
  variant = "primary",
  label,
  type = "button",
  icon,
  secondaryIcon,
  size,
  onClick,
}) {
  const variants = {
    primary: "bg-primary text-white hover:bg-variant",
    outline:
      "bg-transparent border-variant text-variant hover:border-primary hover:text-primary",
    close: "bg-transparent rounded-full",
    ghost: "bg-transparent hover:bg-primary hover:text-white",
  };

  const sizes = {
    lg: "!pt-3 !pb-3 !pl-6 !pr-6 uppercase !text-2xl !font-extrabold !rounded-2xl",
    xl: "!pt-3 !pb-3 md:!pt-5 md:!pb-5 !pl-6 !pr-6 uppercase !text-2xl md:!text-3xl !font-extrabold !rounded-2xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full min-w-fit capitalize flex items-center justify-center gap-4 pt-2 pb-2 pl-6 pr-6 border border-transparent text-base rounded-md transition-colors duration-300 cursor-pointer ${variants[variant]} ${sizes[size]}`}
    >
      {secondaryIcon && <Icon icon={secondaryIcon} />}
      {label}
      {icon && <Icon icon={icon} />}
    </button>
  );
}
