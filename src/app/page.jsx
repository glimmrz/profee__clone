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

export default function Home() {
  return (
    <div>
      <Hero />
      <Features title={featureTitle} />
      <Example />
      <MobileApp />
      <Family />
    </div>
  );
}
