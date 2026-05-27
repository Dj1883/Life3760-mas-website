import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";
import {
  Server,
  Bot,
  Package,
  Layers,
  Wrench,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Check,
  ChevronDown,
  ChevronUp,
  Star,
  Sparkles,
  Users,
  Settings,
  Headphones,
  FileText,
  Clock,
  Lightbulb,
  Shield,
  RefreshCw,
  HelpCircle,
} from "lucide-react";
import logoSrc from "@assets/lv_0_20260525183834_1779812038578.jpg";

const services = [
  {
    id: "server-setups",
    icon: Server,
    title: "Discord Server Setups",
    summary: "Full server configuration tailored to your community.",
    description:
      "We build your Discord server from the ground up — channels, categories, roles, permissions, verification flows, welcome systems, and custom branding. Every setup is designed specifically for your community type, whether it's gaming, business, content creation, or general community.",
    includes: [
      "Channel & category structure",
      "Role hierarchy & permissions",
      "Verification & welcome flow",
      "Server rules & info setup",
      "Bot integrations (basic)",
      "Custom branding & styling",
    ],
    tiers: [
      { label: "Basic", price: "Free", note: "Self-guided template + tips via Discord", recommended: false, bestValue: false },
      { label: "Standard", price: "$15", note: "Full setup handled by our team", recommended: true, bestValue: false },
      { label: "Premium", price: "$35", note: "Advanced setup with custom branding & bots", recommended: false, bestValue: true },
    ],
    badge: null,
  },
  {
    id: "custom-bots",
    icon: Bot,
    title: "Custom Bot Development",
    summary: "Purpose-built bots designed around your server.",
    description:
      "We develop Discord bots tailored to exactly what your server needs — from moderation and auto-roles to economy systems, ticket systems, and complex custom commands. All bots are written cleanly, built to last, and hosted free for life after delivery.",
    includes: [
      "Custom command design",
      "Moderation & auto-mod",
      "Ticket & support systems",
      "Economy & leveling systems",
      "Role assignment automation",
      "Lifetime free hosting included",
    ],
    tiers: [
      { label: "Simple Bot", price: "$4", note: "Basic commands & auto-responses", recommended: true, bestValue: false },
      { label: "Feature Bot", price: "$45", note: "Multi-feature bot with advanced commands", recommended: false, bestValue: true },
      { label: "Full Custom", price: "Quote", note: "Complex systems, API integrations", recommended: false, bestValue: false },
    ],
    badge: "Free Hosting",
  },
  {
    id: "server-materials",
    icon: Package,
    title: "Server Materials",
    summary: "Templates, graphics, and assets for your server.",
    description:
      "Get access to ready-made materials that make your server look polished and professional. This includes channel templates, rule formats, embed designs, banner graphics, and onboarding resources. Save hours of design work and launch with a server that looks built for scale.",
    includes: [
      "Channel & category templates",
      "Formatted rule & info embeds",
      "Onboarding resource packs",
      "Server banner & icon guidance",
      "Role color palettes",
      "Ready-to-paste text formats",
    ],
    tiers: [
      { label: "Community Pack", price: "Free", note: "Standard templates via Discord", recommended: true, bestValue: false },
      { label: "Custom Pack", price: "$10", note: "Tailored to your brand & niche", recommended: false, bestValue: true },
    ],
    badge: null,
  },
  {
    id: "prebuilt-servers",
    icon: Layers,
    title: "Prebuilt Servers",
    summary: "Fully configured server packages, ready to launch.",
    description:
      "Choose from a library of prebuilt server templates for the most popular community types. Each prebuilt includes a working channel structure, roles, permissions, and basic bots pre-configured. Just transfer ownership and you're ready to invite members.",
    includes: [
      "Gaming community template",
      "Content creator template",
      "Business / brand template",
      "Study / education template",
      "Pre-configured roles & channels",
      "Basic bot setup included",
    ],
    tiers: [
      { label: "Standard Prebuilt", price: "Free", note: "Pick from available templates", recommended: true, bestValue: false },
      { label: "Custom Prebuilt", price: "$25", note: "Built to your niche & requirements", recommended: false, bestValue: true },
    ],
    badge: null,
  },
  {
    id: "bot-setup",
    icon: Wrench,
    title: "Bot Setup Support",
    summary: "Already have a bot? We'll get it running perfectly.",
    description:
      "Already own a bot or purchased one from a marketplace? We'll configure it correctly for your server — setting up commands, setting permissions, and integrating it with your existing setup so everything works together seamlessly.",
    includes: [
      "Bot configuration & commands",
      "Command & prefix setup",
      "Permission linking",
      "Integration with server roles",
      "Testing & verification",
      "Post-setup guidance",
    ],
    tiers: [
      { label: "Basic Config", price: "Free", note: "Single bot, standard setup", recommended: true, bestValue: false },
      { label: "Full Integration", price: "$10", note: "Multi-bot, advanced configuration", recommended: false, bestValue: true },
    ],
    badge: null,
  },
  {
    id: "website-hosting",
    icon: Globe,
    title: "Website Hosting & Development",
    summary: "Simple websites and hosting, built and managed for you.",
    description:
      "We design, build, and host websites for individuals, communities, and small businesses. Whether you need a clean landing page, a link-in-bio style site, or a full multi-page web presence, we handle everything — from layout and content to deployment and ongoing hosting.",
    includes: [
      "Custom landing page design",
      "Multi-page website builds",
      "Domain linking & SSL setup",
      "Ongoing hosting & uptime monitoring",
      "Content updates on request",
      "Discord-linked contact / invite integration",
    ],
    tiers: [
      { label: "Landing Page", price: "$20", note: "Single-page site, designed & hosted", recommended: true, bestValue: false },
      { label: "Multi-Page", price: "$50", note: "Up to 5 pages, custom design", recommended: false, bestValue: true },
      { label: "Custom Build", price: "Quote", note: "Complex requirements, bespoke features", recommended: false, bestValue: false },
    ],
    badge: "New",
  },
  {
    id: "discord-help",
    icon: MessageSquare,
    title: "General Discord Help",
    summary: "Open support for any Discord question or issue.",
    description:
      "Have a question about Discord permissions? Not sure how to set up a feature? Running into an issue you can't figure out? Our team is in the Discord server regularly and happy to help with anything — no ticket, no wait queue, just real answers.",
    includes: [
      "Permission troubleshooting",
      "Feature explanation & how-tos",
      "Bot recommendation guidance",
      "Server growth tips",
      "Audit log & moderation help",
      "Community Q&A access",
    ],
    tiers: [
      { label: "Community Help", price: "Free", note: "Ask anything in our Discord server", recommended: true, bestValue: false },
    ],
    badge: "Always Free",
  },
];

const otherOptions = [
  {
    icon: Settings,
    title: "Server Audit & Review",
    description:
      "We review your existing Discord server and give you a detailed breakdown of what to improve — structure, permissions, moderation gaps, and growth opportunities.",
  },
  {
    icon: Users,
    title: "Role Hierarchy Design",
    description:
      "Full design of your server's role system — staff tiers, member progression, booster perks, and special roles — built to scale as your community grows.",
  },
  {
    icon: Headphones,
    title: "Onboarding Flow Design",
    description:
      "Custom member onboarding: verification steps, welcome embeds, rule acceptance flows, and first-impression channel design to retain new members.",
  },
  {
    icon: FileText,
    title: "Staff & Rules Templates",
    description:
      "Professional staff application formats, server rule templates, and moderation guidelines — written and formatted to match your server's tone and needs.",
  },
  {
    icon: Lightbulb,
    title: "Server Growth Consulting",
    description:
      "Strategic advice on growing your Discord community — partnerships, listing platforms, engagement loops, and event ideas that actually bring in members.",
  },
  {
    icon: Shield,
    title: "Moderation System Setup",
    description:
      "End-to-end moderation infrastructure: auto-mod rules, report systems, staff logging, ban/kick workflows, and anti-raid protection layers.",
  },
  {
    icon: RefreshCw,
    title: "Server Revamp",
    description:
      "Already have a server but it needs a fresh start? We restructure and redesign your existing setup without losing your members or history.",
  },
  {
    icon: Clock,
    title: "Priority Support",
    description:
      "Need something done fast? Priority support bumps your request to the front of the queue with guaranteed same-day response for urgent setups or fixes.",
  },
];

const CURRENCIES = [
  { code: "USD", symbol: "$",   label: "US Dollar" },
  { code: "EUR", symbol: "€",   label: "Euro" },
  { code: "GBP", symbol: "£",   label: "British Pound" },
  { code: "CAD", symbol: "C$",  label: "Canadian Dollar" },
  { code: "AUD", symbol: "A$",  label: "Australian Dollar" },
  { code: "NZD", symbol: "NZ$", label: "New Zealand Dollar" },
  { code: "SGD", symbol: "S$",  label: "Singapore Dollar" },
  { code: "JPY", symbol: "¥",   label: "Japanese Yen" },
  { code: "INR", symbol: "₹",   label: "Indian Rupee" },
  { code: "PHP", symbol: "₱",   label: "Philippine Peso" },
  { code: "BRL", symbol: "R$",  label: "Brazilian Real" },
  { code: "MXN", symbol: "MX$", label: "Mexican Peso" },
  { code: "ZAR", symbol: "R",   label: "South African Rand" },
  { code: "NGN", symbol: "₦",   label: "Nigerian Naira" },
];

function detectCurrency(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) return "USD";
    const [region, city] = tz.split("/");
    if (region === "Europe") {
      if (city === "London" || city === "Dublin" || city === "Belfast") return "GBP";
      return "EUR";
    }
    if (region === "America") {
      if (city?.startsWith("Toronto") || city === "Vancouver" || city === "Winnipeg" || city === "Halifax") return "CAD";
      if (city === "Sao_Paulo" || city === "Manaus" || city === "Fortaleza") return "BRL";
      if (city === "Mexico_City" || city === "Monterrey") return "MXN";
      return "USD";
    }
    if (region === "Australia") return "AUD";
    if (region === "Pacific") return "NZD";
    if (region === "Asia") {
      if (city === "Kolkata" || city === "Calcutta") return "INR";
      if (city === "Tokyo") return "JPY";
      if (city === "Manila") return "PHP";
      if (city === "Singapore") return "SGD";
    }
    if (region === "Africa") {
      if (city === "Lagos" || city === "Abuja") return "NGN";
      if (city === "Johannesburg" || city === "Cape_Town") return "ZAR";
    }
  } catch {
    // ignore
  }
  return "USD";
}

function formatPrice(raw: string, rates: Record<string, number>, currency: string): string {
  if (raw === "Free" || raw === "Quote") return raw;
  const num = parseFloat(raw.replace(/[^0-9.]/g, ""));
  if (isNaN(num)) return raw;
  const rate = currency === "USD" ? 1 : (rates[currency] ?? 1);
  const converted = num * rate;
  const cur = CURRENCIES.find((c) => c.code === currency);
  const symbol = cur?.symbol ?? "$";
  if (currency === "JPY") return `${symbol}${Math.round(converted).toLocaleString()}`;
  if (currency === "NGN" || currency === "INR" || currency === "PHP") {
    return `${symbol}${Math.round(converted).toLocaleString()}`;
  }
  return `${symbol}${converted.toFixed(2)}`;
}

function CurrencySelector({
  currency,
  onChange,
}: {
  currency: string;
  onChange: (code: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground whitespace-nowrap">Currency:</span>
      <div className="relative">
        <select
          value={currency}
          onChange={(e) => onChange(e.target.value)}
          data-testid="select-currency"
          className="appearance-none bg-card border border-border rounded-lg pl-3 pr-8 py-1.5 text-sm font-medium text-foreground cursor-pointer hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
        >
          {CURRENCIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.symbol} {c.code} — {c.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Everything starts in our Discord server. Join using the link on this page, open a ticket or message the team, and describe what you need. We'll confirm details and get started from there — no complicated forms or sign-ups required.",
  },
  {
    question: "How long does a server setup take?",
    answer:
      "Basic setups are typically completed within 24–48 hours. Standard and Premium setups can take 2–4 days depending on complexity and how much custom work is involved. We'll give you a clear timeline when you reach out.",
  },
  {
    question: "How long does bot development take?",
    answer:
      "Simple bots with basic commands are usually delivered within 1–3 days. More advanced bots with multiple features, dashboards, or API integrations can take 5–10 days. Complex custom projects are scoped individually and we'll agree on a delivery timeline upfront.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are handled through Discord — we'll send you an invoice or payment link once we've agreed on the scope and price. Free services require no payment at all. For paid work, payment is typically taken upfront or split depending on project size.",
  },
  {
    question: "What does 'free bot hosting for life' actually mean?",
    answer:
      "Any bot we build or set up for you is hosted on our infrastructure at zero cost — forever. There are no monthly fees, no renewal charges, and no conditions. As long as Life3760 is running, your bot stays online.",
  },
  {
    question: "Can I request changes after the work is done?",
    answer:
      "Yes. Minor adjustments and tweaks after delivery are included at no extra charge. Larger changes or additions to scope are handled as a new request, and we'll give you a fair price for the extra work.",
  },
  {
    question: "Do you work with existing servers or only new ones?",
    answer:
      "Both. We can build a brand new server from scratch or revamp and restructure an existing one. For existing servers, we work carefully to preserve your current members, channels, and history while improving the overall setup.",
  },
  {
    question: "What if I'm not happy with the result?",
    answer:
      "We work with you until you're satisfied. If something isn't right, just let us know in Discord and we'll fix it. Our goal is for your server or bot to work exactly the way you need it — we don't consider a job done until you do.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-xl border transition-all duration-200 ${
        open ? "border-primary/50 bg-primary/5" : "border-border bg-card"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        data-testid={`button-faq-${question.slice(0, 20).toLowerCase().replace(/\s+/g, "-")}`}
      >
        <span className="font-semibold text-foreground text-base leading-snug">{question}</span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          {open ? (
            <ChevronUp className="w-4 h-4 text-primary" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

function ServiceCard({
  service,
  currency,
  rates,
}: {
  service: (typeof services)[0];
  currency: string;
  rates: Record<string, number>;
}) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className={`group bg-card rounded-2xl border transition-all duration-300 shadow-sm ${
        open
          ? "border-primary/60 shadow-xl"
          : "border-border hover:shadow-xl hover:border-primary/40"
      }`}
      data-testid={`card-service-${service.id}`}
    >
      <div className="p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                {service.badge && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-xs font-semibold border border-primary/25">
                    <Star className="w-3 h-3" />
                    {service.badge}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground mt-1 text-sm">{service.summary}</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/15 hover:text-primary transition-colors mt-1"
            data-testid={`button-toggle-${service.id}`}
            aria-label={open ? "Collapse" : "Expand"}
          >
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {open && (
          <div className="mt-8 space-y-8 border-t border-border/60 pt-8">
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>

            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                What's Included
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                Pricing
              </h4>
              <div className="flex items-start gap-2 mb-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg px-3 py-2.5">
                <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-snug font-medium">
                  All paid options are currently free until further notice.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {service.tiers.map((tier) => (
                  <div
                    key={tier.label}
                    className={`relative rounded-xl p-4 border text-center ${
                      tier.recommended
                        ? "border-primary/60 bg-primary/8 shadow-md"
                        : tier.bestValue
                        ? "border-emerald-500/50 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-md"
                        : "border-border bg-secondary/50"
                    }`}
                  >
                    {tier.recommended && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                        ★ Recommended
                      </span>
                    )}
                    {tier.bestValue && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                        ✦ Best Value
                      </span>
                    )}
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-1 ${tier.recommended ? "text-primary" : tier.bestValue ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"}`}>
                      {tier.label}
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{formatPrice(tier.price, rates, currency)}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{tier.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://discord.gg/cgs76nsZAa"
              target="_blank"
              rel="noreferrer"
              data-testid={`link-service-discord-${service.id}`}
            >
              <Button size="sm" className="rounded-full gap-2 mt-2">
                <SiDiscord className="w-4 h-4" />
                Get Started on Discord
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [currency, setCurrency] = useState<string>(() => detectCurrency());

  const rates: Record<string, number> = {
    EUR: 0.92, GBP: 0.79, CAD: 1.36, AUD: 1.54, NZD: 1.68,
    SGD: 1.34, JPY: 155.4, INR: 83.5, PHP: 57.8,
    BRL: 5.05, MXN: 17.2, ZAR: 18.6, NGN: 1610,
  };

  return (
    <div className="min-h-[100dvh] flex flex-col w-full overflow-x-hidden bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
            data-testid="link-home"
          >
            <img
              src={logoSrc}
              alt="Life3760 Logo"
              className="h-10 w-auto rounded-md object-contain bg-primary"
            />
            <span className="font-bold text-lg hidden sm:inline-block tracking-tight text-foreground">
              Life3760 <span className="text-primary">Services</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#services"
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-nav-services"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-nav-pricing"
            >
              Pricing
            </a>
            <a
              href="#other"
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-nav-other"
            >
              More
            </a>
            <a
              href="#faq"
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-nav-faq"
            >
              FAQ
            </a>
            <a
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-nav-about"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-nav-contact"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://discord.gg/cgs76nsZAa"
              target="_blank"
              rel="noreferrer"
              data-testid="link-nav-discord"
            >
              <Button variant="default" size="sm" className="gap-2 rounded-full font-semibold shadow-md">
                <SiDiscord className="w-4 h-4" />
                <span className="hidden sm:inline-block">Discord</span>
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden flex items-center border-b border-border/40">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Trusted Discord Experts</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Life3760 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Material & Services
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Professional Discord services — server setups, custom bots, and technical support for
              your community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://discord.gg/cgs76nsZAa"
                target="_blank"
                rel="noreferrer"
                data-testid="link-hero-discord"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2 rounded-full text-base h-14 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1"
                >
                  <SiDiscord className="w-5 h-5" />
                  Join Our Discord
                </Button>
              </a>
              <a href="#services" data-testid="link-hero-services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto gap-2 rounded-full text-base h-14 px-8 border-2 hover:bg-secondary transition-all"
                >
                  View Services
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              What We Offer
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to build, scale, and automate your Discord community.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mb-8">
            <p className="text-sm text-muted-foreground">
              Click any card to see full details, what's included, and pricing.
            </p>
            <CurrencySelector
              currency={currency}
              onChange={setCurrency}
            />
          </div>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} currency={currency} rates={rates} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Banner */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 max-w-5xl mx-auto shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                Paid Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional quality, completely managed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-background rounded-lg border border-border shadow-sm">
                    <Server className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Server Setup Packages</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Full server setup packages are available for communities that want everything
                  handled professionally from top to bottom.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-background rounded-lg border border-border shadow-sm">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Premium Custom Bots</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Premium custom bot work is available for advanced, custom requirements and complex
                  API integrations.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center shadow-lg relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-2">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Bot Hosting — Free for Life</h3>
                <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto font-medium">
                  All bots built or set up through our service are hosted at no cost, forever. No
                  subscriptions, no fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Options */}
      <section id="other" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Additional Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Other Options Available
            </h2>
            <p className="text-muted-foreground text-lg">
              Beyond our core services, we offer a range of extra support and specialized work.
              Ask about any of these in our Discord.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {otherOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className="group bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
                  data-testid={`card-option-${option.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Don't see what you need? Just ask — we handle a wide range of custom work.
            </p>
            <a
              href="https://discord.gg/cgs76nsZAa"
              target="_blank"
              rel="noreferrer"
              data-testid="link-other-discord"
            >
              <Button variant="outline" size="lg" className="rounded-full gap-2 border-2 hover:bg-secondary h-12 px-8">
                <SiDiscord className="w-5 h-5 text-primary" />
                Ask About Custom Work
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know before getting started. Still have questions? Ask us directly in Discord.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Still have a question we didn't cover?</p>
            <a
              href="https://discord.gg/cgs76nsZAa"
              target="_blank"
              rel="noreferrer"
              data-testid="link-faq-discord"
            >
              <Button variant="outline" size="lg" className="rounded-full gap-2 border-2 hover:bg-secondary h-12 px-8">
                <SiDiscord className="w-5 h-5 text-primary" />
                Ask in Discord
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-2">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              About Life3760
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Community-driven service focused on Discord growth and technical support. We help
              individuals and communities build, grow, and manage their Discord presence. Whether
              you're starting fresh or scaling up, we provide the tools, templates, and expertise
              you need.
            </p>
          </div>
        </div>
      </section>

      {/* Discord CTA */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <SiDiscord className="w-20 h-20 text-primary mx-auto opacity-90" />
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Everything starts in Discord
            </h2>
            <p className="text-xl md:text-2xl text-background/80 font-medium max-w-2xl mx-auto leading-relaxed">
              All services, support, and community access are available through our Discord server.
              Join now to browse our offerings, get help, and connect with the team.
            </p>
            <div className="pt-8">
              <a
                href="https://discord.gg/cgs76nsZAa"
                target="_blank"
                rel="noreferrer"
                data-testid="link-cta-discord"
              >
                <Button
                  size="lg"
                  className="rounded-full text-lg h-16 px-10 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-2xl shadow-primary/20 gap-3"
                >
                  <SiDiscord className="w-6 h-6" />
                  Join the Community
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Get in Touch
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <p className="text-xl text-muted-foreground mb-8">
                The best way to reach us is through Discord. Join the server for the fastest
                response.
              </p>
              <a
                href="https://discord.gg/cgs76nsZAa"
                target="_blank"
                rel="noreferrer"
                data-testid="link-contact-discord"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full gap-2 text-base h-14 px-8 border-2 hover:bg-secondary"
                >
                  <SiDiscord className="w-5 h-5 text-primary" />
                  Message us on Discord
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-secondary/50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Life3760 Logo"
              className="h-8 w-auto rounded object-contain bg-primary"
            />
            <span className="font-bold text-foreground">Life3760 Material & Services</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://discord.gg/cgs76nsZAa"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-discord"
            >
              <SiDiscord className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Life3760 Material &amp; Services. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
