import HeadingMedia from "@/components/sections/HeadingMedia";
import MediaCardGrid from "@/components/sections/MediaCardGrid";
import { getPageVisual } from "@/lib/content/page-visuals";

export default function PageVisualBlock({ path }: { path: string }) {
  const visual = getPageVisual(path);
  return (
    <>
      <HeadingMedia title={visual.h2} image={visual.h2Image.src} imageAlt={visual.h2Image.alt}>
        <p>{visual.h2Body}</p>
      </HeadingMedia>
      <MediaCardGrid heading={visual.h3Heading} items={visual.h3s} />
    </>
  );
}
