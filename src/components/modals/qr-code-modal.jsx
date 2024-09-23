"use client";
import { useQrCodeModal } from "@/hooks/modal-controllers";
import Modal from "./modal";
import Heading from "../heading";
import CustomImage from "../custom-image";
import qr from "@/assets/qr.png";

export default function QrCodeModal() {
  const codeModal = useQrCodeModal();

  const modalBody = (
    <div className="flex items-center justify-center">
      <div className="bg-white w-[550px] md:p-12 rounded-2xl">
        <Heading title="Download WaltonPay app" />
        <p className="text-base mt-2 md:mt-4">
          Scan the QR code with a mobile device
        </p>

        <div className="flex items-center justify-center mt-4 md:mt-8">
          <CustomImage src={qr} alt="WaltonPay app qr code" />
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
