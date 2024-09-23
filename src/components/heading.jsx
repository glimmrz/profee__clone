export default function Heading({ title, subtitle }) {
  return (
    <hgroup className="text-inherit">
      {title && <h1 className="text-3xl md:text-4xl">{title}</h1>}
      {subtitle && <h2 className="text-lg md:text-xl">{subtitle}</h2>}
    </hgroup>
  );
}
