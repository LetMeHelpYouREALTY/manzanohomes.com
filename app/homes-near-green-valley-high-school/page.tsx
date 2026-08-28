import SchoolHomesPage from "@/components/sections/SchoolHomesPage";
import { pageMetadata } from "@/lib/metadata";

const path = "/homes-near-green-valley-high-school";

export const metadata = pageMetadata({
  title: "Homes Near Green Valley High School | Henderson NV",
  description:
    "Homes for sale near Green Valley High School (2.1 miles). Live MLS listings with Dr. Jan Duffy.",
  path,
});

export default function Page() {
  return (
    <SchoolHomesPage
      name="Green Valley High School"
      type="High School"
      distance="2.1 miles"
      address="460 Arroyo Grande Blvd, Henderson, NV 89014"
      path={path}
      description="Homes for sale near Green Valley High School."
    />
  );
}
