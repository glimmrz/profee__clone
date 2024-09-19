export default function Heading({ title, subtitle }) {
  return (
    <hgroup className="text-inherit">
      {title && <h1 className="text-4xl">{title}</h1>}
      {subtitle && <h2 className="text-2xl">{subtitle}</h2>}
    </hgroup>
  );
}
