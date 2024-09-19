export default function Input({ label, placeholder, type = "text", required }) {
  return (
    <div className="grid gap-1">
      {label && (
        <label htmlFor="" className="text-base text-shade capitalize">
          {label}
        </label>
      )}
      <input
        type="text"
        className="p-3 rounded-md outline-0 border border-mute text-base"
      />
    </div>
  );
}
