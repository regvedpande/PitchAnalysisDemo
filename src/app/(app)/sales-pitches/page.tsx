import { PageHeader } from "@/components/page-header";
import { PitchTable } from "@/components/pitch-table";
import { pitchCategories, pitchRecords } from "@/lib/mock-data";

export default function SalesPitchesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Library"
        title="Sales pitch recordings and analysis snapshots"
        description="Browse and filter pitch recordings by topic, status, or date. Use client-side search to explore the coaching analysis library."
        action={{ href: "/sales-pitches/new", label: "Record New Pitch" }}
      />
      <PitchTable pitches={pitchRecords} categories={pitchCategories} />
    </div>
  );
}
