import { StudioWrapper } from "./studioWrapper";
export { metadata, viewport } from "next-sanity/studio";
export const dynamic = "force-dynamic";

export default function StudioPage() {
  return <StudioWrapper />;
}
