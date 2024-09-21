"use client";
import CustomImage from "./custom-image";
import Section from "./section";
import Title from "./title";
import cover from "@/assets/cover.png";
import play from "@/assets/play.svg";
import { useIframeModal } from "@/hooks/modal-controllers";

export default function Example() {
  const iframeModal = useIframeModal();

  return (
    <Section customStyles="bg-primary z-[8] !min-h-fit">
      <div className="grid md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,2fr] items-center">
        <div className="text-white mb-16 md:mb-0 lg:mb-16">
          <Title>
            WaltonPay transfers are simple: <br />
            <span className="text-secondary">see for yourself</span>
          </Title>
        </div>
        {/* video iframe */}
        <div className="cursor-pointer" onClick={iframeModal.onOpen}>
          <div className="h-fit relative">
            <CustomImage src={cover} />
            <div className="h-36 w-36 absolute top-0 bottom-0 m-auto left-0 right-0">
              <CustomImage src={play} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
