import MediaCard from "@/components/cards/media-card";
import MediaSection from "@/components/media-section";

export default function Page() {
  return (
    <div>
      <MediaSection category="Life in Europe" reverse>
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
    </div>
  );
}
