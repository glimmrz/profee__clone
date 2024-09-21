import MediaCard from "@/components/cards/media-card";
import SectionWithHeader from "@/components/section-with-header";

export default function Page() {
  return (
    <SectionWithHeader>
      <div className="mt-12">
        <div className="grid grid-cols-3 gap-4">
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
      </div>
    </SectionWithHeader>
  );
}
