import Link from "next/link";

export default function CategoryBox() {
  return (
    <Link
      href={`/blog/categories/life-in-the-UK`}
      className="bg-slate-100 pl-4 pr-4 pt-3 pb-3 rounded-md hover:bg-slate-300 transition-colors duration-300"
    >
      <span>Life in the UK</span>
    </Link>
  );
}
