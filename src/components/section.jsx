import Container from "./container";

export default function Section({
  children,
  customStyles = "",
  sectionStyles = "",
}) {
  return (
    <section
      className={`min-h-[100vh] rounded-bl-3xl rounded-br-3xl md:rounded-bl-4xl md:rounded-br-4xl flex ${customStyles} overflow-hidden -mt-14 sticky`}
    >
      <Container>
        <div className={`mb-6 mt-20 md:mt-28 md:mb-20 ${sectionStyles}`}>
          {children}
        </div>
      </Container>
    </section>
  );
}
