import type { ReactNode } from "react";

type Holding = {
  ticker: string;
  company: string;
  sector: string;
  industry: string;
  weight: number;
  value: string;
  move7d: string;
  move1y: string;
};

type Idea = {
  title: string;
  description: string;
  tickers: string[];
  badge?: string;
};

type NewsItem = {
  headline: string;
  source: string;
  affected: string[];
  impact: "Positive" | "Negative" | "Mixed";
  why: string;
};

const holdings: Holding[] = [
  {
    ticker: "NVDA",
    company: "Nvidia",
    sector: "Technology",
    industry: "Semiconductors",
    weight: 46.1,
    value: "US$25.6k",
    move7d: "+2.4%",
    move1y: "+138.0%",
  },
  {
    ticker: "AMZN",
    company: "Amazon",
    sector: "Consumer Discretionary",
    industry: "General Merchandise & Cloud",
    weight: 53.9,
    value: "US$30.0k",
    move7d: "+0.7%",
    move1y: "+13.8%",
  },
];

const ideas: Idea[] = [
  {
    title: "Undervalued Companies",
    description: "Companies that appear cheap relative to fundamentals and future earnings potential.",
    tickers: ["GOOGL", "PYPL", "BABA"],
    badge: "21 new",
  },
  {
    title: "Dividend Powerhouses",
    description: "Companies with consistent dividends, cash flow strength, and payout discipline.",
    tickers: ["KO", "PG", "JNJ"],
  },
  {
    title: "Insider Activity",
    description: "Stocks where insiders, promoters, or management activity deserves attention.",
    tickers: ["MSFT", "TSLA", "META"],
    badge: "8 alerts",
  },
  {
    title: "Artificial Intelligence",
    description: "AI infrastructure, cloud, semiconductors, software, and automation-linked stocks.",
    tickers: ["NVDA", "AMD", "MSFT", "PLTR"],
  },
  {
    title: "Nuclear Energy",
    description: "Uranium, nuclear utilities, SMRs, and power infrastructure stocks.",
    tickers: ["CCJ", "CEG", "UEC"],
  },
  {
    title: "Cybersecurity",
    description: "Security software and cloud protection companies with secular demand.",
    tickers: ["CRWD", "PANW", "ZS"],
  },
];

const news: NewsItem[] = [
  {
    headline: "AI capex concerns rise as investors question returns on data center spending",
    source: "Market News",
    affected: ["NVDA", "AMD", "MSFT", "AMZN", "GOOGL"],
    impact: "Mixed",
    why: "AI infrastructure stocks may benefit from spending, but valuations can come under pressure if returns are delayed.",
  },
  {
    headline: "Cloud companies expand AI partnerships and chip purchase commitments",
    source: "Global Markets",
    affected: ["NVDA", "ORCL", "MSFT", "AMZN"],
    impact: "Positive",
    why: "Large cloud commitments support AI demand, but users should watch whether demand is organic or financing-driven.",
  },
  {
    headline: "Retail and e-commerce stocks react to consumer spending data",
    source: "Economic Desk",
    affected: ["AMZN", "WMT", "COST", "TGT"],
    impact: "Mixed",
    why: "Consumer names can move together when inflation, spending, or margin expectations change.",
  },
];

const insiderRows = [
  {
    ticker: "NVDA",
    type: "Insider Selling",
    person: "Director / Officer",
    value: "US$4.2m",
    signal: "Monitor",
    note: "Selling is not automatically negative. Check if it is routine or unusually large.",
  },
  {
    ticker: "AMZN",
    type: "Insider Activity",
    person: "Executive",
    value: "US$1.1m",
    signal: "Neutral",
    note: "No major red flag unless repeated activity increases.",
  },
  {
    ticker: "MSFT",
    type: "Insider Buying",
    person: "Director",
    value: "US$780k",
    signal: "Positive",
    note: "Insider buying can suggest confidence, but must be checked with valuation and earnings.",
  },
];

const geography = [
  { label: "North America", value: 34.2 },
  { label: "Asia-Pacific", value: 11.2 },
  { label: "Not Reported", value: 53.9 },
  { label: "Other", value: 0.7 },
];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <section className="mx-auto max-w-7xl px-5 py-8 laptop:px-8">
        {eyebrow ? (
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#f4cf63]">
            {eyebrow}
          </div>
        ) : null}

        <div className="mb-8 max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight laptop:text-5xl">{title}</h1>
          {description ? (
            <p className="mt-4 text-base leading-7 text-white/60 laptop:text-lg">{description}</p>
          ) : null}
        </div>

        {children}
      </section>
    </main>
  );
}

function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-sm", className)}>
      {children}
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white/80">
      {children}
    </span>
  );
}

function StatCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <Card>
      <div className="text-sm text-white/50">{label}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
      <div className="mt-1 text-sm text-white/50">{note}</div>
    </Card>
  );
}

function DiversificationSection() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Diversification</h2>
          <p className="mt-1 text-sm text-white/50">
            See whether your portfolio is genuinely diversified or just split across similar bets.
          </p>
        </div>
      </div>

      <Card className="overflow-hidden">
        <h3 className="mb-5 text-lg font-semibold">Diversification across Industries</h3>

        <div className="space-y-4">
          {holdings.map((holding) => (
            <div key={holding.ticker} className="grid grid-cols-12 items-center gap-3 text-sm">
              <div className="col-span-3 rounded-xl bg-[#f4cf63]/90 px-4 py-4 font-bold text-black">
                Portfolio {holding.weight.toFixed(1)}%
              </div>

              <div className="col-span-3 rounded-xl bg-[#d8b84f]/90 px-4 py-4 font-semibold text-black">
                {holding.sector} {holding.weight.toFixed(1)}%
              </div>

              <div className="col-span-4 rounded-xl bg-[#927d3e] px-4 py-4 font-semibold text-white">
                {holding.industry} {holding.weight.toFixed(1)}%
              </div>

              <div className="col-span-2 text-lg font-bold text-white">{holding.ticker}</div>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-5 grid grid-cols-1 gap-5 laptop:grid-cols-2">
        <Card>
          <h3 className="text-lg font-semibold">Diversification across Holdings</h3>
          <div className="mt-6 space-y-4">
            {holdings.map((holding) => (
              <div key={holding.ticker}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <div>
                    <span className="font-bold text-[#f4cf63]">{holding.ticker}</span>
                    <span className="ml-2 text-white/50">{holding.company}</span>
                  </div>
                  <span className="font-semibold">{holding.weight.toFixed(1)}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#80e3cf]"
                    style={{ width: `${holding.weight}%` }}
                  />
                </div>
                <div className="mt-2 flex gap-4 text-xs text-white/50">
                  <span>Value: {holding.value}</span>
                  <span>7D: {holding.move7d}</span>
                  <span>1Y: {holding.move1y}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">Revenue Diversification by Geography</h3>
          <p className="mt-1 text-sm text-white/50">
            Demo layer for now. Later this can be powered by filings and company-reported segment data.
          </p>

          <div className="mt-6 space-y-4">
            {geography.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/70">{item.label}</span>
                  <span className="font-semibold">{item.value.toFixed(1)}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#5a95e5]"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function PortfolioStocksSection() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 laptop:grid-cols-4">
        <StatCard label="Portfolio Value" value="US$55.6k" note="Demo portfolio" />
        <StatCard label="Top Exposure" value="AMZN 53.9%" note="Concentration watch" />
        <StatCard label="AI Exposure" value="46.1%" note="Through NVDA" />
        <StatCard label="Insider Alerts" value="3" note="Activity to review" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 laptop:grid-cols-3">
        {holdings.map((holding) => (
          <Card key={holding.ticker}>
            <div className="flex items-start justify-between">
              <div>
                <div className="text-2xl font-bold">{holding.ticker}</div>
                <div className="mt-1 text-sm text-white/50">{holding.company}</div>
              </div>
              <Pill>{holding.weight.toFixed(1)}%</Pill>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-white/40">Sector</div>
                <div className="font-semibold">{holding.sector}</div>
              </div>
              <div>
                <div className="text-white/40">Industry</div>
                <div className="font-semibold">{holding.industry}</div>
              </div>
              <div>
                <div className="text-white/40">7D</div>
                <div className="font-semibold text-emerald-400">{holding.move7d}</div>
              </div>
              <div>
                <div className="text-white/40">1Y</div>
                <div className="font-semibold text-emerald-400">{holding.move1y}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function ExploreIdeasSection({ compact = false }: { compact?: boolean }) {
  const visibleIdeas = compact ? ideas.slice(0, 3) : ideas;

  return (
    <section className="mt-8">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Explore Companies / ETFs</h2>
          <p className="mt-1 text-sm text-white/50">
            Discover companies and ETFs outside your portfolio by theme, market, and risk lens.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 laptop:grid-cols-3">
        {visibleIdeas.map((idea) => (
          <Card key={idea.title} className="transition hover:border-[#f4cf63]/50 hover:bg-white/[0.05]">
            <div className="mb-4 h-28 rounded-xl bg-gradient-to-br from-[#f4cf63]/70 via-[#80e3cf]/50 to-[#5a95e5]/50" />
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold">{idea.title}</h3>
              {idea.badge ? <Pill>{idea.badge}</Pill> : null}
            </div>
            <p className="mt-3 text-sm leading-6 text-white/55">{idea.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {idea.tickers.map((ticker) => (
                <Pill key={ticker}>{ticker}</Pill>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function NewsPreviewSection() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold">News Impact + Stocks Affected</h2>
      <p className="mt-1 text-sm text-white/50">
        News is useful only when the app explains which stocks are affected and why.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-5 laptop:grid-cols-3">
        {news.map((item) => (
          <Card key={item.headline}>
            <div className="mb-3 flex items-center justify-between">
              <Pill>{item.source}</Pill>
              <Pill>{item.impact}</Pill>
            </div>
            <h3 className="text-lg font-bold leading-7">{item.headline}</h3>
            <p className="mt-3 text-sm leading-6 text-white/55">{item.why}</p>
            <div className="mt-5">
              <div className="mb-2 text-xs uppercase tracking-wide text-white/40">Stocks affected</div>
              <div className="flex flex-wrap gap-2">
                {item.affected.map((ticker) => (
                  <Pill key={ticker}>{ticker}</Pill>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function InsiderActivityContent() {
  return (
    <PageShell
      eyebrow="Market Signals"
      title="Insider Activity"
      description="Track insider buying, insider selling, promoter activity, pledge changes, and unusual activity across stocks."
    >
      <div className="grid grid-cols-1 gap-5 laptop:grid-cols-3">
        {insiderRows.map((row) => (
          <Card key={`${row.ticker}-${row.type}`}>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{row.ticker}</div>
              <Pill>{row.signal}</Pill>
            </div>
            <div className="mt-4 text-lg font-semibold text-[#f4cf63]">{row.type}</div>
            <div className="mt-2 text-sm text-white/50">{row.person}</div>
            <div className="mt-4 text-sm">
              <span className="text-white/40">Value: </span>
              <span className="font-bold">{row.value}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/55">{row.note}</p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

export function FamousTakesContent() {
  return (
    <PageShell
      eyebrow="Famous Takes"
      title="Michael Burry AI Bubble Lens"
      description="A simple explanation of the AI bubble concern, vendor financing risk, and the stocks that may be affected."
    >
      <div className="grid grid-cols-1 gap-5 laptop:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-bold">Michael Burry’s AI Bubble View</h2>
          <p className="mt-4 leading-7 text-white/60">
            The concern is not that AI is useless. The concern is that investors may be paying
            too much for AI infrastructure companies before the actual cash returns are proven.
          </p>

          <div className="mt-6 space-y-3 text-sm text-white/70">
            <div>• AI capex may be too aggressive.</div>
            <div>• Chip and data-center demand may be pulled forward.</div>
            <div>• Valuations may assume perfect future execution.</div>
            <div>• Free cash flow must eventually justify the spending.</div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["NVDA", "AMD", "PLTR", "MSFT", "ORCL", "QQQ", "SMH"].map((ticker) => (
              <Pill key={ticker}>{ticker}</Pill>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold">Vendor Financing / Circular AI Money Loop</h2>
          <p className="mt-4 leading-7 text-white/60">
            Vendor financing happens when companies fund customers or partners who then buy
            their products. In AI, the risk is that money can move around the ecosystem and make
            demand look stronger than it really is.
          </p>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/25 p-4 text-sm leading-7 text-white/70">
            AI chip/cloud company invests in customer
            <br />↓
            Customer buys chips or compute
            <br />↓
            Supplier reports strong demand
            <br />↓
            Market values ecosystem higher
            <br />↓
            More capital is raised
          </div>
        </Card>
      </div>
    </PageShell>
  );
}

export function InvestingIdeasPageContent() {
  return (
    <PageShell
      eyebrow="Discovery"
      title="Investing Ideas"
      description="Explore market themes, stock ideas, ETFs, insider activity, and famous investor lenses."
    >
      <ExploreIdeasSection />
    </PageShell>
  );
}

export function NewsImpactContent() {
  return (
    <PageShell
      eyebrow="News Discovery"
      title="News Impact"
      description="Read headlines, then see which stocks are affected and why."
    >
      <NewsPreviewSection />
    </PageShell>
  );
}

export function StockAnalysisContent() {
  return (
    <PageShell
      eyebrow="Research"
      title="Stock Analysis"
      description="Analyze a stock using price data, fundamentals, news, insider activity, diversification, and plain-English interpretation."
    >
      <div className="grid grid-cols-1 gap-5 laptop:grid-cols-3">
        <StatCard label="Selected Stock" value="NVDA" note="Demo stock" />
        <StatCard label="Risk Lens" value="High Growth" note="AI infrastructure exposure" />
        <StatCard label="Best Use" value="Monitor" note="Check valuation and news confirmation" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 laptop:grid-cols-2">
        <Card>
          <h2 className="text-xl font-bold">Business Summary</h2>
          <p className="mt-4 leading-7 text-white/60">
            Nvidia is a leading semiconductor company linked to AI infrastructure, GPUs, data
            centers, and accelerated computing. The main opportunity is AI demand. The main risk
            is valuation and whether customers earn enough return on AI spending.
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-bold">Data Stack Roadmap</h2>
          <div className="mt-4 space-y-2 text-sm text-white/60">
            <div>Yahoo Finance: prices, charts, dividends, splits</div>
            <div>SEC EDGAR: filings, XBRL financials, company facts</div>
            <div>Quartr: earnings transcripts and slide decks</div>
            <div>Trading Economics: macro and sovereign credit ratings</div>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}

export function WatchlistContent() {
  return (
    <PageShell
      eyebrow="Saved Ideas"
      title="Watchlist"
      description="Track stocks, ETFs, famous takes, insider activity, and news themes that matter to you."
    >
      <ExploreIdeasSection compact />
      <NewsPreviewSection />
    </PageShell>
  );
}

export function HomePageContent() {
  return (
    <>
      <PageShell
        eyebrow="Portfolio Stocks"
        title="Your portfolio command center"
        description="Start with your own stocks first. See diversification, concentration, news impact, insider activity, and ideas to explore next."
      >
        <PortfolioStocksSection />
        <DiversificationSection />
        <ExploreIdeasSection compact />
        <NewsPreviewSection />
      </PageShell>

      <Footer />
    </>
  );
}

function Footer() {
  const columns = [
    {
      title: "Markets",
      links: ["US: NYSE & NASDAQ", "India: NSE & BSE", "UK: FTSE", "Canada: TSX", "Australia: ASX", "Japan: NIKKEI"],
    },
    {
      title: "Investing Ideas",
      links: ["Undervalued Companies", "Dividend Powerhouses", "Insider Activity", "Artificial Intelligence", "Nuclear Energy", "Cybersecurity"],
    },
    {
      title: "Features & Tools",
      links: ["Portfolio Tracker", "Stock Analysis", "Stock Screener & Alerts", "Trading Ideas", "News Impact", "Dividend Tracker"],
    },
    {
      title: "News & Discovery",
      links: ["Latest Stock News", "Stocks Affected", "Global Market Insights", "Famous Takes", "Community Narratives", "What’s New"],
    },
    {
      title: "Quantifi",
      links: ["Plans & Pricing", "About Us", "Contact Us", "Help Center", "Learn Stock Investing", "Business & Enterprise"],
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#111111] px-5 py-10 text-white laptop:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 laptop:grid-cols-5">
        {columns.map((column) => (
          <div key={column.title}>
            <div className="mb-4 text-sm font-bold text-white/40">{column.title}</div>
            <div className="space-y-3">
              {column.links.map((link) => (
                <div key={link} className="text-sm font-semibold text-white/85 hover:text-[#f4cf63]">
                  {link}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs leading-6 text-white/40">
        <p>
          Quantifi is an educational market research and analytics platform. The information shown
          on this website is for general informational and educational purposes only and should not
          be treated as financial advice, investment advice, trading advice, or a recommendation to
          buy, sell, or hold any security.
        </p>
        <p className="mt-4">
          © 2026 Quantifi. All rights reserved. Terms and Conditions · Privacy Policy · AI Terms ·
          Risk Disclosure
        </p>
      </div>
    </footer>
  );
}
