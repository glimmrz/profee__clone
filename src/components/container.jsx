export default function Container({ children }) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-[1168px] w-full p-2">{children}</div>
    </div>
  );
}
