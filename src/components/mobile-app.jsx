"use client";
import { useEffect, useRef, useState } from "react";
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
  const mobileRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isInView && mobileRef.current) {
        const scrollY = window.scrollY;
        const elementTop =
          containerRef.current.getBoundingClientRect().top + window.scrollY;
        const elementHeight = containerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        if (
          scrollY > elementTop - viewportHeight &&
          scrollY < elementTop + elementHeight
        ) {
          const relativeScroll =
            (scrollY - (elementTop - viewportHeight)) /
            (elementHeight + viewportHeight);
          const maxScroll =
            mobileRef.current.offsetHeight - containerRef.current.offsetHeight;
          setScrollPosition(Math.min(maxScroll, relativeScroll * maxScroll));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView]);

  return (
    <Section customStyles="bg-white z-[7]">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Title>
            Get the WaltonPay <br />
            <span className="text-primary">mobile app</span>
          </Title>
          <div className="text-shade mt-6">
            <Heading subtitle="to send seamless transfers anytime, and to any of 60+ countries"></Heading>
          </div>

          <div className="flex gap-2 mt-12 md:mt-16">
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
        <div ref={containerRef} className="h-[50vh] select-none">
          <div
            ref={mobileRef}
            style={{
              transform: `translateY(-${scrollPosition}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <CustomImage src={mobile} />
          </div>
        </div>
      </div>
    </Section>
  );
}
