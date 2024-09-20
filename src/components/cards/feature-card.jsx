import Heading from "../heading";

export default function FeatureCard({ card }) {
  return (
    <div
      className="p-8 md:p-16 w-full h-fit rounded-2xl"
      style={{ backgroundColor: card?.color, color: card?.textColor }}
    >
      <div className="mb-14 md:mb-28">
        <Heading title={card?.title} />
      </div>
      <p className="text-base text-inherit">{card?.text}</p>
    </div>
  );
}
