import Button from "./button";
import Heading from "./heading";
import Section from "./section";
import Title from "./title";

export default function TitleImageVariant({ title, subtitle, customStyles }) {
  return (
    <Section
      customStyles={`${customStyles} bg-no-repeat bg-cover bg-center !min-h-[80vh] z-[6]`}
    >
      <div className="flex flex-col items-center justify-center gap-4 text-white mt-96 text-center">
        <Title>{title}</Title>
        <Heading subtitle={subtitle} />
        <Button size="lg" label="send money" />
      </div>
    </Section>
  );
}
