import Example from "@/components/example";
import Family from "@/components/family";
import Features from "@/components/features";
import Hero from "@/components/hero";
import MobileApp from "@/components/mobile-app";
import Title from "@/components/title";

const featureTitle = (
  <Title>
    try <br />
    profee <br className="hidden md:block" />
    transfers! <br />
    <span className="text-primary">they are...</span>
  </Title>
);

const secondFeatureTitle = (
  <Title>
    waltonpay <br />
    transfers are <br />
    <span className="text-[#00C48C]">100% safe</span>
  </Title>
);

export default function Home() {
  return (
    <div>
      <Hero />
      <Features title={featureTitle} />
      <Example />
      <MobileApp />
      <Family />
      <Features title={secondFeatureTitle} />
    </div>
  );
}
