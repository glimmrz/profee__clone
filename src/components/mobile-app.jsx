"use client";
import Link from "next/link";
import Heading from "./heading";
import Section from "./section";
import Title from "./title";
import CustomImage from "./custom-image";
import playstore from "@/assets/playstore.png";
import appstore from "@/assets/appstore.png";
import mobile from "@/assets/phone.webp";
import { useQrCodeModal } from "@/hooks/modal-controllers";

export default function MobileApp() {
  const codeModal = useQrCodeModal();

  return (
    <Section customStyles="bg-white">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Title>
            Get the Profee <br />
            <span className="text-primary">mobile app</span>
          </Title>
          <div className="text-shade mt-6">
            <Heading subtitle="to send seamless transfers anytime, and to any of 60+ countries"></Heading>
          </div>

          {/* Store links */}
          <div className="flex gap-2 mt-16">
            <Link href="#" className="rounded-md overflow-hidden">
              <CustomImage src={playstore} alt="" />
            </Link>
            <Link href="#" className="rounded-md overflow-hidden">
              <CustomImage src={appstore} />
            </Link>
          </div>

          <span
            className="text-base text-primary first-letter:capitalize block mt-12 cursor-pointer"
            role="button"
            onClick={codeModal.onOpen}
          >
            download via the QR code
          </span>
        </div>
        {/* Auto scrollable mobile phone */}
        <div className="h-[50vh] select-none">
          <div>
            <CustomImage src={mobile} />
          </div>
        </div>
      </div>
    </Section>
  );
}
