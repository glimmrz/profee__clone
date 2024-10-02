import Image from "next/image";
import Button from "../button";
import Container from "../container";
import PromoTitle from "./promo-title";

export default function Promo() {
  return (
    <div className="bg-[#EFF1FA]">
      <Container>
        <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full flex  justify-center flex-col">
            <PromoTitle className="text-4xl font-bold mb-4">
              We&apos;ve created <br />a{" "}
              <span className="text-primary">convenient and fast</span> <br />
              money transfer solution
            </PromoTitle>
            <p className="text-gray-600 my-8">
              WaltonPay is a reliable international money transfer provider. We
              believe that money transfers should be fast, easy, secure and at
              the same time inexpensive.
            </p>
            <Button label="learn more" size="lg" />
          </div>
          <figure className="relative min-h-[400px] w-full">
            <Image
              src="https://www.profee.com/_next/static/media/about_us_hero.1c6d764a.svg"
              alt="People discussing finances"
              className="object-contain"
              fill
            />
          </figure>
        </section>
      </Container>
    </div>
  );
}
