import Heading from "../heading";

export default function FeatureCard() {
  return (
    <div className="p-8 md:p-16 bg-red-50 w-full h-fit rounded-2xl">
      <div className="mb-14 md:mb-28 text-black">
        <Heading title="made for you" />
      </div>
      <p className="text-base text-shade">
        You may log in to your account via our website or mobile app to send
        money, check the transfer history, and more
      </p>
    </div>
  );
}
