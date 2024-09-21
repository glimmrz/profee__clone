import Container from "./container";
import Heading from "./heading";

export default function SectionWithHeader({ title, children }) {
  return (
    <section className="pt-20">
      <Container>
        <div>
          <div>
            <Heading title="News and updates" />
          </div>
          <div>{children}</div>
        </div>
      </Container>
    </section>
  );
}
