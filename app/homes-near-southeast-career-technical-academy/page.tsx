import SchoolHomesPage from "@/components/sections/SchoolHomesPage";
import { pageMetadata } from "@/lib/metadata";

const path = "/homes-near-southeast-career-technical-academy";

export const metadata = pageMetadata({
  title: "Homes Near Southeast Career Technical Academy | Las Vegas",
  description:
    "Homes for sale near Southeast Career Technical Academy (1.2 miles). Live MLS listings with Dr. Jan Duffy.",
  path,
});

export default function Page() {
  return (
    <SchoolHomesPage
      name="Southeast Career Technical Academy"
      type="High School"
      distance="1.2 miles"
      address="5710 Mountain Vista St, Las Vegas, NV 89120"
      path={path}
      description="Homes for sale near Southeast Career Technical Academy."
    />
  );
}
