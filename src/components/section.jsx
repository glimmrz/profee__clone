export default function Section({ children, customStyles }) {
  return (
    <section
      className={`min-h-[80vh] rounded-bl-4xl rounded-br-4xl flex ${customStyles} overflow-hidden`}
    >
      {children}
    </section>
  );
}
