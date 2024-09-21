import Container from "./container";
import Heading from "./heading";

export default function MediaSection({ title, children }) {
  return (
    <section className="pt-20">
      <Container>
        <div>
          <div>
            <Heading title={title} />
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:[&>*:nth-child(1)]:col-start-1 lg:[&>*:nth-child(1)]:col-end-4 lg:[&>*:nth-child(2)]:col-start-4 lg:[&>*:nth-child(2)]:col-end-7 lg:[&>*:nth-child(3)]:col-start-1 lg:[&>*:nth-child(3)]:col-end-3 lg:[&>*:nth-child(4)]:col-start-3 lg:[&>*:nth-child(4)]:col-end-5 lg:[&>*:nth-child(5)]:col-start-5 lg:[&>*:nth-child(5)]:col-end-7">
              {children}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
