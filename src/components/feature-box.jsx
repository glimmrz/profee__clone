export default function FeatureBox({ block, regular }) {
  return (
    <div className="first-letter:capitalize w-full md:w-fit transparent-white text-black p-4 rounded-md lg:max-w-[180px]">
      <span className="text-lg">
        {block && <strong>{block}</strong>} <br className="hidden md:block" />{" "}
        {regular}
      </span>
    </div>
  );
}
