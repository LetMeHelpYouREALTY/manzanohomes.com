import SchoolHomesPage from "@/components/sections/SchoolHomesPage";
import { pageMetadata } from "@/lib/metadata";

const path = "/homes-near-manzano-elementary";

export const metadata = pageMetadata({
  title: "Homes Near Manzano Elementary School | Las Vegas Elementary",
  description:
    "Homes for sale near Manzano Elementary School (0.3 miles). Live MLS listings with Dr. Jan Duffy.",
  path,
});

export default function Page() {
  return (
    <SchoolHomesPage
      name="Manzano Elementary School"
      type="Elementary"
      distance="0.3 miles"
      address="Near 3693 Manzano Peak Ave, Las Vegas, NV 89121"
      path={path}
      description="Homes for sale near Manzano Elementary School."
    />
  );
}
