"use client";
import { useQrCodeModal } from "@/hooks/modal-controllers";
import Modal from "./modal";
import Heading from "../heading";

export default function QrCodeModal() {
  const codeModal = useQrCodeModal();

  const modalBody = (
    <div className="flex items-center justify-center">
      <div className="bg-white w-[550px] p-12 rounded-2xl">
        <Heading title="Download Profee app" />
        <p className="text-base mt-4">Scan the QR code with a mobile device</p>

        <div className="flex items-center justify-center mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="360"
            height="360"
            viewBox="0 0 41 41"
            shape-rendering="crispEdges"
          >
            <path fill="#ffffff" d="M0 0h41v41H0z"></path>
            <path
              stroke="#000000"
              d="M2 2.5h7m2 0h3m3 0h1m1 0h1m1 0h1m2 0h1m2 0h3m2 0h7M2 3.5h1m5 0h1m1 0h1m4 0h2m3 0h4m1 0h2m5 0h1m5 0h1M2 4.5h1m1 0h3m1 0h1m3 0h1m2 0h2m3 0h2m1 0h3m3 0h1m2 0h1m1 0h3m1 0h1M2 5.5h1m1 0h3m1 0h1m2 0h2m2 0h3m4 0h1m2 0h1m1 0h4m1 0h1m1 0h3m1 0h1M2 6.5h1m1 0h3m1 0h1m4 0h3m1 0h1m2 0h1m1 0h3m1 0h1m2 0h1m2 0h1m1 0h3m1 0h1M2 7.5h1m5 0h1m1 0h1m1 0h3m1 0h1m3 0h2m1 0h1m1 0h1m4 0h1m1 0h1m5 0h1M2 8.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M10 9.5h3m3 0h2m1 0h1m2 0h1m2 0h1m1 0h1M6 10.5h4m1 0h2m1 0h1m2 0h2m2 0h1m5 0h1m1 0h2m1 0h2m3 0h1M2 11.5h1m1 0h1m1 0h2m2 0h2m3 0h1m1 0h1m3 0h1m3 0h1m2 0h1m5 0h1m1 0h1M5 12.5h2m1 0h1m2 0h1m3 0h2m1 0h2m2 0h2m3 0h3m1 0h1m3 0h3M3 13.5h1m6 0h2m1 0h5m4 0h1m1 0h1m3 0h4m1 0h1m1 0h2M4 14.5h1m1 0h1m1 0h1m1 0h1m1 0h2m2 0h2m1 0h2m1 0h2m2 0h1m3 0h4m1 0h3M3 15.5h1m2 0h1m2 0h1m1 0h1m1 0h2m3 0h1m1 0h1m1 0h2m2 0h1m1 0h2m1 0h1m2 0h1m1 0h1M2 16.5h1m1 0h1m1 0h3m5 0h1m3 0h1m2 0h1m1 0h2m2 0h3m1 0h2m2 0h3M4 17.5h2m1 0h1m9 0h2m1 0h2m2 0h1m6 0h2m1 0h1m1 0h2M2 18.5h1m5 0h2m5 0h2m2 0h4m1 0h2m3 0h5m1 0h2m1 0h1M4 19.5h2m5 0h2m1 0h1m1 0h3m1 0h1m4 0h2m1 0h4m2 0h3M2 20.5h1m4 0h3m3 0h2m2 0h2m1 0h1m2 0h2m1 0h1m2 0h1m5 0h1M2 21.5h1m1 0h1m1 0h1m2 0h1m1 0h1m2 0h3m1 0h5m7 0h2m1 0h1m2 0h3M2 22.5h2m4 0h1m1 0h1m1 0h1m2 0h1m3 0h3m5 0h1m3 0h2m3 0h3M2 23.5h3m6 0h3m2 0h1m2 0h2m1 0h1m1 0h2m1 0h1m1 0h1m1 0h1m2 0h4M4 24.5h1m1 0h4m3 0h1m1 0h1m1 0h2m2 0h4m1 0h1m2 0h3m5 0h1M5 25.5h2m4 0h3m1 0h4m1 0h1m1 0h1m2 0h2m1 0h1m1 0h1m2 0h1m2 0h1M3 26.5h1m1 0h4m2 0h1m1 0h1m2 0h1m2 0h5m3 0h3m2 0h2m2 0h1m1 0h1M2 27.5h1m1 0h1m1 0h2m2 0h1m5 0h4m1 0h4m1 0h2m2 0h1m1 0h1m1 0h2M4 28.5h2m1 0h4m1 0h2m1 0h2m2 0h1m2 0h1m1 0h3m3 0h2M5 29.5h3m7 0h4m1 0h2m3 0h1m2 0h1m3 0h1m2 0h2m1 0h1M2 30.5h2m1 0h1m1 0h3m2 0h2m5 0h1m3 0h2m4 0h9M10 31.5h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h2m1 0h1m1 0h1m2 0h1m3 0h2m1 0h1M2 32.5h7m1 0h1m3 0h3m1 0h1m2 0h3m1 0h3m2 0h1m1 0h1m1 0h3M2 33.5h1m5 0h1m1 0h4m2 0h1m1 0h3m2 0h1m2 0h1m1 0h1m1 0h1m3 0h1m1 0h2M2 34.5h1m1 0h3m1 0h1m1 0h4m1 0h1m10 0h1m3 0h7m1 0h1M2 35.5h1m1 0h3m1 0h1m3 0h2m4 0h2m1 0h1m6 0h2m2 0h2M2 36.5h1m1 0h3m1 0h1m2 0h1m2 0h1m2 0h1m3 0h2m4 0h3m2 0h2m2 0h2M2 37.5h1m5 0h1m4 0h1m1 0h2m1 0h6m2 0h1m1 0h1m4 0h2m1 0h2M2 38.5h7m3 0h5m2 0h2m3 0h2m3 0h1m1 0h2m1 0h1m1 0h3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={codeModal.isOpen}
      onClose={codeModal.onClose}
      modalBody={modalBody}
      modalIcon="close"
    />
  );
}
