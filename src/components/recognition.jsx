import Section from "./section";
import Title from "./title";

export default function Recognition() {
  return (
    <Section customStyles="bg-primary z-[3]">
      <div className="grid md:grid-cols-[1fr,2fr]">
        <div className="text-white">
          <Title>walton is recognized by industry experts</Title>
        </div>
        <div></div>
      </div>
    </Section>
  );
}
