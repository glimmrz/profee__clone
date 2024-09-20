import Button from "./button";
import Heading from "./heading";
import Section from "./section";
import Title from "./title";

export default function Family() {
  return (
    <Section customStyles="bg-[url('../assets/family.webp')] bg-no-repeat bg-cover bg-center z-[6]">
      <div className="flex flex-col items-center justify-center gap-4 text-white mt-96">
        <Title>Your friends & family</Title>
        <Heading subtitle="Do not need to sign up to get the money. Ask them to give you their account's details and... to relax." />
        <Button size="lg" label="send money" />
      </div>
    </Section>
  );
}
