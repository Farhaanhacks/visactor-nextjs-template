import { ExploreIdeasSection, PageShell } from "@/components/quantifi/ui";

export default function ExplorePage() {
  return (
    <PageShell
      eyebrow="Discovery"
      title="Explore Companies / ETFs"
      description="Browse companies and ETFs outside your current portfolio by theme, market, sector and risk lens."
    >
      <ExploreIdeasSection compact />
    </PageShell>
  );
}
