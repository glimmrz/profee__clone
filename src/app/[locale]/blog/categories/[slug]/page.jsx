import MediaCard from "@/components/cards/media-card";
import MediaSection from "@/components/media-section";

export default function Page({ params }) {
  return (
    <>
      <MediaSection title={params.slug.replace(/-/g, " ")} reverse>
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </MediaSection>
    </>
  );
}
