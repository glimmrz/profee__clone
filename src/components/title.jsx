export default function Title({ children }) {
  return (
    <h1 className="text-inherit text-3xl lg:text-6xl uppercase font-extrabold">
      {children}
    </h1>
  );
}
