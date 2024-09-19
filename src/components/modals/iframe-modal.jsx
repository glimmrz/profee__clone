"use client";
import { useIframeModal } from "@/hooks/modal-controllers";
import Modal from "./modal";

export default function IframeModal() {
  const iframeModal = useIframeModal();

  const modalBody = (
    <div className="h-[250px] md:h-[550px] md:w-[calc(theme(width.screen)-theme(gap.4))] lg:w-full">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/lI-JegHKV_4?si=vygxb4wWz54UdFfb"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );

  return (
    <Modal
      isOpen={iframeModal.isOpen}
      onClose={iframeModal.onClose}
      modalBody={modalBody}
    />
  );
}
