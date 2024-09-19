export default function Heading({ title, subtitle, title_md }) {
  return (
    <hgroup className="text-inherit">
      {title && <h1 className="text-6xl uppercase font-extrabold">{title}</h1>}
      {subtitle && <h2 className="text-2xl">{subtitle}</h2>}
    </hgroup>
  );
}
