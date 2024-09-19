import Button from "./button";
import FeatureCard from "./cards/feature-card";
import Section from "./section";

export default function Features({ title }) {
  return (
    <Section customStyles="bg-white z-[9]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex flex-col gap-4 md:gap-8">
          {/* Heading */}
          <div className="md:p-16 pt-0 md:pt-0 md:pb-2">{title}</div>

          <FeatureCard />
          <FeatureCard />
        </div>

        <div className="flex flex-col gap-4 md:gap-8">
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 md:mt-12">
        <Button size="lg" label="send money with profee" />
      </div>
    </Section>
  );
}
