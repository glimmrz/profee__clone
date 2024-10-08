import MediaCard from "@/components/cards/media-card";
import CategoryBox from "@/components/category-box";
import Container from "@/components/container";
import Heading from "@/components/heading";
import MediaSection from "@/components/media-section";

export default function Page({ params }) {
  return (
    <Container>
      <div>
        <Heading title="Blog" />

        <div className="mt-4 mb-8 flex flex-wrap gap-4">
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
        </div>
      </div>
      <MediaSection category="Life in Europe" reverse locale={params.locale}>
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </MediaSection>
      <MediaSection category="Life in the UK" reverse>
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </MediaSection>
    </Container>
  );
}
