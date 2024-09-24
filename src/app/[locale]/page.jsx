import Button from "@/components/button";
import Example from "@/components/example";
import Features from "@/components/features";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import MobileApp from "@/components/mobile-app";
import Recognition from "@/components/recognition";
import Reviews from "@/components/reviews";
import Title from "@/components/title";
import TitleImage from "@/components/title-image";
import care from "@/assets/care.webp";
import ua from "@/assets/ua.webp";
import SupportedCountries from "@/components/supported-countries";
import TitleImageVariant from "@/components/title-image-variant";

const featureTitle = (
  <Title>
    try <br />
    WaltonPay <br className="hidden md:block" />
    transfers! <br />
    <span className="text-primary">they are...</span>
  </Title>
);

const secondFeatureTitle = (
  <Title>
    waltonpay <br />
    transfers are <br />
    <span className="text-secondary_variant">100% safe</span>
  </Title>
);

const featuresOne = {
  title: featureTitle,
  cards: [
    {
      title: "made for you",
      text: "You may log in to your account via our website or mobile app to send money, check the transfer history, and more",
      color: "#EFF1FA",
      textColor: "",
    },
    {
      title: "simple",
      text: "Creating an account & sending money for the first time will take just a few minutes",
      color: "#543FE7",
      textColor: "#fff",
    },
    {
      title: "beneficial",
      text: "0% commission on your first transfer and no hidden fees.",
      color: "#00C48C",
      textColor: "#fff",
    },
    {
      title: "fast",
      text: "For more than 90% of our transfers, the money is credited to the bank account within minutes.",
      color: "#EFF1FA",
      textColor: "",
    },
  ],
};

const featuresTwo = {
  title: secondFeatureTitle,
  cards: [
    {
      title: "2-step verification",
      text: "We ask for your password & SMS code when you log in.",
      color: "#00C48C",
      textColor: "#fff",
    },
    {
      title: "PCI DSS certified",
      text: "We comply with EU standards & update our certificates annually.",
      color: "#fff",
      textColor: "",
    },
    {
      title: "3DS security",
      text: "We mitigate fraud risks for your online payments.",
      color: "#fff",
      textColor: "",
    },
    {
      title: "Tier4 Data Center",
      text: "We ensure the highest level of protection for your data.",
      color: "#282828",
      textColor: "#fff",
    },
  ],
};

export default function Home() {
  return (
    <div>
      <Hero title="title" customStyles="md:bg-[url('../assets/hero.webp')]" />
      <Features features={featuresOne} customStyles="z-[9]" />
      <Example />
      <MobileApp />
      <TitleImageVariant
        title="Your friends & family"
        subtitle="Do not need to sign up to get the money. Ask them to give you their account's details and... to relax."
        customStyles="bg-[url('../assets/family.webp')]"
      />
      <Features features={featuresTwo} customStyles="!bg-[#EFF1FA] z-[5]" />
      <TitleImage customStyles="z-[4]" image={care}>
        <Title>we care about you</Title>
        <p className="text-shade">
          WaltonPay support specialists speak many languages and will help you
          with any question you may have. Write us in chat, email
          help@WaltonPay.com or call +357 22 000 253. The support team will
          answer you from 9:00 to 22:00 (UTC+03:00) Monday to Friday.
        </p>
        <Button label="send money" size="xl" />
      </TitleImage>
      {/* <Recognition /> */}
      <TitleImage reverse customStyles="z-[2]" image={ua}>
        <Title>
          Earn with <br /> <span className="text-primary">WaltonPay</span>
        </Title>
        <Heading subtitle="Refer our service to your friends, get rewarded when they start sending money." />

        <Button label="send money" size="xl" />
      </TitleImage>
      <Reviews />
      <SupportedCountries />
    </div>
  );
}
