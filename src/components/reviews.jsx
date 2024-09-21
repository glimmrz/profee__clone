import Link from "next/link";
import ReviewCard from "./cards/review-card";
import CustomImage from "./custom-image";
import Section from "./section";
import Title from "./title";
import logo from "@/assets/Trustpilot.png";
import Icon from "./icon";

export default function Reviews() {
  return (
    <Section customStyles="bg-secondary_variant !min-h-fit">
      <div className="flex flex-col justify-center items-center">
        <div className="text-white max-w-4xl w-full text-center mb-8 md:mb-24">
          <Title>
            profee is trusted <br /> by thousands of clients
          </Title>
        </div>
        {/* Review cards */}
        <div className="flex items-start justify-start gap-8 w-full">
          {/* Trustpilot logo */}
          <ReviewCard>
            <div className="h-full flex flex-col justify-between">
              <div className="h-[55px] w-[230px]">
                <CustomImage src={logo} alt="" />
              </div>

              {/* Trustpilot link */}
              <Link href="#" className="font-bold first-letter:capitalize">
                <span>see all thousands reviews by our clients</span>
              </Link>
            </div>
          </ReviewCard>

          {/* Reviews */}
          <ReviewCard>
            <Link href="#" className="h-full flex flex-col justify-between">
              <p className="relative line-clamp-[8] text-xl after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[15%] after:w-full after:bg-[linear-gradient(180deg,transparent,hsla(0,0%,100%,.9))]">
                Very nice app & service! The app is easy to use with intuitive
                interface and all needed data is visible like fees which is
                positive being transparent. The app service is great, like the
                transfers are fast and the exchange rate is very good! The
                customer support team at Profee is very helpful & responsive. I
                had a few questions when I first started using the app, and they
                were quick to provide clear and helpful answers. Also, the level
                upgrade journey was smooth. Recommend it!
              </p>

              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">lyan</span>
                <Icon icon="arrowRight" />
              </div>
            </Link>
          </ReviewCard>
          {/* Card */}
          <ReviewCard>
            <Link href="#" className="h-full flex flex-col justify-between">
              <p className="relative line-clamp-[8] text-xl after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[15%] after:w-full after:bg-[linear-gradient(180deg,transparent,hsla(0,0%,100%,.9))]">
                Very nice app & service! The app is easy to use with intuitive
                interface and all needed data is visible like fees which is
                positive being transparent. The app service is great, like the
                transfers are fast and the exchange rate is very good! The
                customer support team at Profee is very helpful & responsive. I
                had a few questions when I first started using the app, and they
                were quick to provide clear and helpful answers. Also, the level
                upgrade journey was smooth. Recommend it!
              </p>

              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">lyan</span>
                <Icon icon="arrowRight" />
              </div>
            </Link>
          </ReviewCard>
          {/* Card */}
          <ReviewCard>
            <Link href="#" className="h-full flex flex-col justify-between">
              <p className="relative line-clamp-[8] text-xl after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[15%] after:w-full after:bg-[linear-gradient(180deg,transparent,hsla(0,0%,100%,.9))]">
                Very nice app & service! The app is easy to use with intuitive
                interface and all needed data is visible like fees which is
                positive being transparent. The app service is great, like the
                transfers are fast and the exchange rate is very good! The
                customer support team at Profee is very helpful & responsive. I
                had a few questions when I first started using the app, and they
                were quick to provide clear and helpful answers. Also, the level
                upgrade journey was smooth. Recommend it!
              </p>

              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">lyan</span>
                <Icon icon="arrowRight" />
              </div>
            </Link>
          </ReviewCard>
          {/* Card */}
          <ReviewCard>
            <Link href="#" className="h-full flex flex-col justify-between">
              <p className="relative line-clamp-[8] text-xl after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[15%] after:w-full after:bg-[linear-gradient(180deg,transparent,hsla(0,0%,100%,.9))]">
                Very nice app & service! The app is easy to use with intuitive
                interface and all needed data is visible like fees which is
                positive being transparent. The app service is great, like the
                transfers are fast and the exchange rate is very good! The
                customer support team at Profee is very helpful & responsive. I
                had a few questions when I first started using the app, and they
                were quick to provide clear and helpful answers. Also, the level
                upgrade journey was smooth. Recommend it!
              </p>

              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">lyan</span>
                <Icon icon="arrowRight" />
              </div>
            </Link>
          </ReviewCard>
          {/* Card */}
          <ReviewCard>
            <Link href="#" className="h-full flex flex-col justify-between">
              <p className="relative line-clamp-[8] text-xl after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[15%] after:w-full after:bg-[linear-gradient(180deg,transparent,hsla(0,0%,100%,.9))]">
                Very nice app & service! The app is easy to use with intuitive
                interface and all needed data is visible like fees which is
                positive being transparent. The app service is great, like the
                transfers are fast and the exchange rate is very good! The
                customer support team at Profee is very helpful & responsive. I
                had a few questions when I first started using the app, and they
                were quick to provide clear and helpful answers. Also, the level
                upgrade journey was smooth. Recommend it!
              </p>

              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">lyan</span>
                <Icon icon="arrowRight" />
              </div>
            </Link>
          </ReviewCard>
          {/* Card */}
          <ReviewCard>
            <Link href="#" className="h-full flex flex-col justify-between">
              <p className="relative line-clamp-[8] text-xl after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[15%] after:w-full after:bg-[linear-gradient(180deg,transparent,hsla(0,0%,100%,.9))]">
                Very nice app & service! The app is easy to use with intuitive
                interface and all needed data is visible like fees which is
                positive being transparent. The app service is great, like the
                transfers are fast and the exchange rate is very good! The
                customer support team at Profee is very helpful & responsive. I
                had a few questions when I first started using the app, and they
                were quick to provide clear and helpful answers. Also, the level
                upgrade journey was smooth. Recommend it!
              </p>

              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">lyan</span>
                <Icon icon="arrowRight" />
              </div>
            </Link>
          </ReviewCard>
        </div>
      </div>
    </Section>
  );
}
