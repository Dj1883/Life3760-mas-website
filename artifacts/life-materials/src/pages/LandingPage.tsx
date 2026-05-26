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
  Globe
} from "lucide-react";
import logoSrc from "@assets/lv_0_20260525183834_1779812038578.jpg";

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full overflow-x-hidden bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 transition-opacity hover:opacity-80" data-testid="link-home">
            <img src={logoSrc} alt="Life3760 Logo" className="h-10 w-auto rounded-md object-contain bg-primary" />
            <span className="font-bold text-lg hidden sm:inline-block tracking-tight text-foreground">
              Life3760 <span className="text-primary">Services</span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors" data-testid="link-nav-services">Services</a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors" data-testid="link-nav-pricing">Pricing</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors" data-testid="link-nav-about">About</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors" data-testid="link-nav-contact">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://discord.gg/life3760" target="_blank" rel="noreferrer" data-testid="link-nav-discord">
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
              Life3760 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Material & Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Professional Discord services — server setups, custom bots, and technical support for your community.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="https://discord.gg/life3760" target="_blank" rel="noreferrer" data-testid="link-hero-discord">
                <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full text-base h-14 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                  <SiDiscord className="w-5 h-5" />
                  Join Our Discord
                </Button>
              </a>
              <a href="#services" data-testid="link-hero-services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 rounded-full text-base h-14 px-8 border-2 hover:bg-secondary transition-all">
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
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">What We Offer</h2>
            <p className="text-muted-foreground text-lg">Everything you need to build, scale, and automate your Discord community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Discord Server Setups</h3>
              <p className="text-muted-foreground leading-relaxed">Full server configuration, channels, roles, permissions, and branding tailored to your community.</p>
            </div>

            {/* Card 2 */}
            <div className="group bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Custom Bot Development</h3>
              <p className="text-muted-foreground leading-relaxed">Purpose-built Discord bots designed around your server's needs and workflows.</p>
            </div>

            {/* Card 3 */}
            <div className="group bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Package className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Server Materials</h3>
              <p className="text-muted-foreground leading-relaxed">Ready-to-use templates, graphics, and assets to level up your server instantly.</p>
            </div>

            {/* Card 4 */}
            <div className="group bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Prebuilt Servers</h3>
              <p className="text-muted-foreground leading-relaxed">Fully configured, ready-to-go server packages for popular community types.</p>
            </div>

            {/* Card 5 */}
            <div className="group bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Bot Setup Support</h3>
              <p className="text-muted-foreground leading-relaxed">Already have a bot? We'll configure and integrate it perfectly into your server.</p>
            </div>

            {/* Card 6 */}
            <div className="group bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">General Discord Help</h3>
              <p className="text-muted-foreground leading-relaxed">Questions, troubleshooting, tips — open help for anything Discord-related.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Premium */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 max-w-5xl mx-auto shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">Paid Services</h2>
              <p className="text-xl text-muted-foreground">Professional quality, completely managed.</p>
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
                  Full server setup packages are available for communities that want everything handled professionally from top to bottom.
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
                  Premium custom bot work is available for advanced, custom requirements and complex API integrations.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-2">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Bot Hosting — Free for Life</h3>
                <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto font-medium">
                  All bots built or set up through our service are hosted at no cost, forever. No subscriptions, no fees.
                </p>
              </div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">About Life3760</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Community-driven service focused on Discord growth and technical support. We help individuals and communities build, grow, and manage their Discord presence. Whether you're starting fresh or scaling up, we provide the tools, templates, and expertise you need.
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
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Everything starts in Discord</h2>
            <p className="text-xl md:text-2xl text-background/80 font-medium max-w-2xl mx-auto leading-relaxed">
              All services, support, and community access are available through our Discord server. Join now to browse our offerings, get help, and connect with the team.
            </p>
            <div className="pt-8">
              <a href="https://discord.gg/life3760" target="_blank" rel="noreferrer" data-testid="link-cta-discord">
                <Button size="lg" className="rounded-full text-lg h-16 px-10 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-2xl shadow-primary/20 gap-3">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Get in Touch</h2>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <p className="text-xl text-muted-foreground mb-8">
                The best way to reach us is through Discord. Join the server for the fastest response.
              </p>
              <a href="https://discord.gg/life3760" target="_blank" rel="noreferrer" data-testid="link-contact-discord">
                <Button variant="outline" size="lg" className="rounded-full gap-2 text-base h-14 px-8 border-2 hover:bg-secondary">
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
            <img src={logoSrc} alt="Life3760 Logo" className="h-8 w-auto rounded object-contain bg-primary" />
            <span className="font-bold text-foreground">Life3760 Material & Services</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://discord.gg/life3760" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-discord">
              <SiDiscord className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border/50 text-center md:text-left text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Life3760 Material & Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
