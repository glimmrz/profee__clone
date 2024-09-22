"use client";
import { useTranslations } from "next-intl";
import FeatureBox from "./feature-box";
import ExhangeRate from "./forms/exhange-rate";
import Heading from "./heading";
import Section from "./section";
import Title from "./title";

export default function Hero({ title, customStyles }) {
  const t = useTranslations("Hero");

  return (
    <Section
      sectionStyles="!mt-14 md:!mt-28"
      customStyles={`bg-[linear-gradient(180deg,#5a62ab,#d6daec)] ${customStyles} bg-cover bg-no-repeat bg-center !mt-0 z-10`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] lg:grid-cols-[2fr,1fr] gap-8 md:gap-4 lg:gap-12">
        <div className="text-white">
          <div className="w-full lg:w-4/6 md:mb-14 lg:mb-28">
            <Title>{t(title)}</Title>
          </div>
          <div className="md:w-4/6 mb-8 lg:mb-16">
            <Heading subtitle={t("subtitle")} />
          </div>
          <div className="grid grid-cols-1 lg:flex gap-4">
            <FeatureBox
              block={t("FeatureBox.BoxOne.block")}
              regular={t("FeatureBox.BoxOne.regular")}
            />
            <FeatureBox
              block={t("FeatureBox.BoxTwo.block")}
              regular={t("FeatureBox.BoxTwo.regular")}
            />
            <FeatureBox block={t("FeatureBox.BoxThree.block")} />
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
