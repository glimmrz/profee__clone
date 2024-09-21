import CustomImage from "./custom-image";
import Section from "./section";

export default function TitleImage({
  children,
  reverse,
  image,
  customStyles = "",
}) {
  return (
    <Section customStyles={`bg-white !min-h-fit ${customStyles}`}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-fit md:h-[460px] w-full">
          <CustomImage src={image} alt="" />
        </div>
        <div
          className={`flex flex-col items-start justify-center gap-4 md:gap-8 ${
            reverse ? "md:row-start-1" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </Section>
  );
}
