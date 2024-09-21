import Container from "../container";

export default function ReviewCard({ children }) {
  return (
    <div className="min-w-[300px] w-[300px] h-[360px] bg-white rounded-2xl p-8">
      {children}
    </div>
  );
}
