"use client";
import CustomImage from "./custom-image";
import Section from "./section";
import Title from "./title";
import cover from "@/assets/iframe-cover.webp";
import play from "@/assets/play.svg";
import { useIframeModal } from "@/hooks/modal-controllers";

export default function Example() {
  const iframeModal = useIframeModal();

  return (
    <Section customStyles="bg-primary z-[8]">
      <div className="grid grid-cols-[1fr,2fr] items-center">
        <div className="text-white">
          <Title>
            Profee transfers are simple:{" "}
            <span className="text-secondary">see for yourself</span>
          </Title>
        </div>
        {/* video iframe */}
        <div className="cursor-pointer" onClick={iframeModal.onOpen}>
          <div className="h-[500px] relative">
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
