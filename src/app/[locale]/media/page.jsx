import MediaCard from "@/components/cards/media-card";
import MediaSection from "@/components/media-section";

export default function Page() {
  return (
    <div>
      <MediaSection title="News and updates">
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
      <MediaSection title="In the news">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </MediaSection>
    </div>
  );
}
