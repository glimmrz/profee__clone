import FeatureBox from "./feature-box";
import ExhangeRate from "./forms/exhange-rate";
import Heading from "./heading";
import Section from "./section";
import Title from "./title";
import appstore from "@/assets/appstore.png";
import playstore from "@/assets/playstore.png";
import Link from "next/link";
import CustomImage from "./custom-image";

export default function HeroVariant({ title, customStyles }) {
  return (
    <Section
      sectionStyles="!mt-14 md:!mt-28"
      customStyles={`!min-h-fit bg-[linear-gradient(180deg,#5a62ab,#d6daec)] ${customStyles} bg-cover bg-no-repeat bg-center !mt-0 z-10`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] lg:grid-cols-[2fr,1fr] gap-8 md:gap-4 lg:gap-12">
        <div className="text-white">
          <div className="w-full mb-8 lg:w-4/6 md:mb-14 lg:mb-28">
            <Title>{title}</Title>
          </div>
          <div className="hidden md:w-4/6 mb-8 lg:mb-16">
            <Heading subtitle="Support your loved ones, even if you are far away" />
          </div>
          <div className="hidden md:grid grid-cols-1 lg:flex gap-4">
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

          <div className="grid grid-cols-2 gap-2 mt-4">
            <Link href="#" className="rounded-md overflow-hidden">
              <CustomImage src={playstore} alt="" />
            </Link>
            <Link href="#" className="rounded-md overflow-hidden">
              <CustomImage src={appstore} />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
