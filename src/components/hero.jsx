import FeatureBox from "./feature-box";
import ExhangeRate from "./forms/exhange-rate";
import Heading from "./heading";
import Section from "./section";
import Title from "./title";

export default function Hero() {
  return (
    <Section
      sectionStyles="!mt-14 md:!mt-28"
      customStyles="bg-[linear-gradient(180deg,#5a62ab,#d6daec)] md:bg-[url('../assets/hero.webp')] bg-cover bg-no-repeat bg-center !mt-0 z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] lg:grid-cols-[2fr,1fr] gap-8 md:gap-4 lg:gap-12">
        <div className="text-white">
          <div className="w-full lg:w-4/6 md:mb-14 lg:mb-28">
            <Title>Reliable and fast way to send money overseas</Title>
          </div>
          <div className="md:w-4/6 mb-8 lg:mb-16">
            <Heading subtitle="Support your loved ones, even if you are far away" />
          </div>
          <div className="grid grid-cols-1 lg:flex gap-4">
            <FeatureBox block="no hidden" regular="fees" />
            <FeatureBox
              block="no registration"
              regular="needed to receive money"
            />
            <FeatureBox block="beneficial exchage rate" />
          </div>
        </div>
        <div>
          {/* Exchange rate form */}
          <ExhangeRate />
        </div>
      </div>
    </Section>
  );
}
