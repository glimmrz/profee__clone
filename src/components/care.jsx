import Button from "./button";
import CustomImage from "./custom-image";
import Section from "./section";
import Title from "./title";
import care from "@/assets/care.webp";

export default function Care() {
  return (
    <Section customStyles="bg-white z-[4] !min-h-fit">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-fit md:h-[460px] w-full">
          <CustomImage src={care} alt="" />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 md:gap-8">
          <Title>we care about you</Title>
          <p className="text-shade">
            Profee support specialists speak many languages and will help you
            with any question you may have. Write us in chat, email
            help@profee.com or call +357 22 000 253. The support team will
            answer you from 9:00 to 22:00 (UTC+03:00) Monday to Friday.
          </p>
          <Button label="send money" size="lg" />
        </div>
      </div>
    </Section>
  );
}
