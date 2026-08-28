import SchoolHomesPage from "@/components/sections/SchoolHomesPage";
import { pageMetadata } from "@/lib/metadata";

const path = "/homes-near-coronado-high-school";

export const metadata = pageMetadata({
  title: "Homes Near Coronado High School | Henderson NV",
  description:
    "Homes for sale near Coronado High School (2.8 miles). Live MLS listings with Dr. Jan Duffy.",
  path,
});

export default function Page() {
  return (
    <SchoolHomesPage
      name="Coronado High School"
      type="High School"
      distance="2.8 miles"
      address="1001 Coronado Center Dr, Henderson, NV 89052"
      path={path}
      description="Homes for sale near Coronado High School."
    />
  );
}
