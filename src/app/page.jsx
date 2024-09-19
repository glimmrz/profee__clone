import Example from "@/components/example";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Title from "@/components/title";

const featureTitle = (
  <Title>
    try <br />
    profee <br />
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
    </div>
  );
}
