import Link from "next/link";
import Container from "./container";
import Heading from "./heading";
import Icon from "./icon";

export default function MediaSection({ title, category, children, reverse }) {
  return (
    <section className="pt-20">
      <Container>
        {title && <Heading title={title} />}
        {category && (
          <Link
            href={`/blog/categories/${category.replace(/ /g, "-")}`}
            className="text-primary flex items-center gap-2"
          >
            <Heading title={category} />
            <Icon icon="arrowRight" size={28} />
          </Link>
        )}
        <div className="mt-8">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 ${
              !reverse
                ? "lg:[&>*:nth-child(5n+1)]:col-start-1 lg:[&>*:nth-child(5n+1)]:col-end-4 lg:[&>*:nth-child(5n+2)]:col-start-4 lg:[&>*:nth-child(5n+2)]:col-end-7 lg:[&>*:nth-child(5n+3)]:col-start-1 lg:[&>*:nth-child(5n+3)]:col-end-3 lg:[&>*:nth-child(5n+4)]:col-start-3 lg:[&>*:nth-child(5n+4)]:col-end-5 lg:[&>*:nth-child(5n)]:col-start-5 lg:[&>*:nth-child(5n)]:col-end-7"
                : "lg:[&>*:nth-child(5n+4)]:col-start-1 lg:[&>*:nth-child(5n+4)]:col-end-4 lg:[&>*:nth-child(5n)]:col-start-4 lg:[&>*:nth-child(5n)]:col-end-7 lg:[&>*:nth-child(5n+1)]:col-start-1 lg:[&>*:nth-child(5n+1)]:col-end-3 lg:[&>*:nth-child(5n+2)]:col-start-3 lg:[&>*:nth-child(5n+2)]:col-end-5 lg:[&>*:nth-child(5n+3)]:col-start-5 lg:[&>*:nth-child(5n+3)]:col-end-7"
            }`}
          >
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
