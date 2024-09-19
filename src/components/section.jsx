import Container from "./container";

export default function Section({ children, customStyles }) {
  return (
    <section
      className={`min-h-[80vh] rounded-bl-4xl rounded-br-4xl flex ${customStyles} overflow-hidden -mt-14 sticky`}
    >
      <Container>
        <div className="mt-20 mb-20">{children}</div>
      </Container>
    </section>
  );
}
