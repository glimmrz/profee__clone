import FeatureBox from "./feature-box";
import ExhangeRate from "./forms/exhange-rate";
import Heading from "./heading";
import Section from "./section";
import Title from "./title";

export default function Hero() {
  return (
    <Section customStyles="bg-[linear-gradient(180deg,#5a62ab,#d6daec)] md:bg-[url('../assets/hero.webp')] bg-cover bg-no-repeat bg-center !min-h-[95vh] !mt-0 z-10">
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12">
        <div className="text-white">
          <div className="w-full md:w-4/6 md:mb-28">
            <Title>Reliable and fast way to send money overseas</Title>
          </div>
          <div className="md:w-4/6 mb-8 md:mb-16">
            <Heading subtitle="Support your loved ones, even if you are far away" />
          </div>
          <div className="grid grid-cols-1 md:flex gap-4">
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
