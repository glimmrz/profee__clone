import Button from "./button";
import FeatureCard from "./cards/feature-card";
import Section from "./section";

export default function Features({ features, customStyles = "" }) {
  return (
    <Section customStyles={`${customStyles} bg-white`}>
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <div className="flex flex-col gap-4 md:gap-8">
          {/* Heading */}
          <div className="md:p-16 pt-0 md:pt-0 md:pb-2">{features?.title}</div>

          <FeatureCard card={features?.cards[1]} />
          <FeatureCard card={features?.cards[3]} />
        </div>

        <div className="flex flex-col gap-4 md:gap-8">
          <FeatureCard card={features?.cards[0]} />
          <FeatureCard card={features?.cards[2]} />
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 md:mt-12">
        <Button size="lg" label="send money with WaltonPay" />
      </div>
    </Section>
  );
}
