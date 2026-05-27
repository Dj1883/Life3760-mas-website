import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft } from "lucide-react";
import logoSrc from "@assets/lv_0_20260525183834_1779812038578.jpg";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <img src={logoSrc} alt="Life3760 Logo" className="h-7 w-auto rounded object-contain bg-primary" />
              <span className="font-bold text-foreground text-sm hidden sm:inline">Life3760 Material &amp; Services</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: May 27, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Life3760 Material &amp; Services website or any of our services delivered via Discord, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Services Provided</h2>
            <p>
              Life3760 Material &amp; Services offers Discord-focused services including, but not limited to: Discord server setups, custom Discord bot development, graphics &amp; branding packs, server templates, bot configuration &amp; integration, and community consulting. All services are delivered through our Discord server at{" "}
              <a href="https://discord.gg/cgs76nsZAa" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                discord.gg/cgs76nsZAa
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Pricing &amp; Free Services</h2>
            <p>
              Certain services are listed with a paid price. However, <strong className="text-foreground">all paid options are currently available at no charge until further notice</strong>. We will provide reasonable advance notice before any paid pricing takes effect. Free services require no payment and carry no financial obligation.
            </p>
            <p>
              When paid pricing does take effect, payments will be handled through Discord. An invoice or payment link will be provided once scope has been agreed upon. Upfront or split payment arrangements will be communicated on a per-project basis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Deliverables &amp; Revisions</h2>
            <p>
              We aim to deliver services within the agreed timeframe communicated via Discord. Minor adjustments after delivery are included at no extra charge. Larger scope changes or additions are treated as a new request and priced accordingly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Bot Hosting</h2>
            <p>
              Any Discord bot built or configured by Life3760 Material &amp; Services is hosted on our infrastructure at no cost for as long as the service remains operational. We do not guarantee perpetual uptime but will make reasonable efforts to keep hosted bots online. We reserve the right to discontinue hosting with reasonable notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Intellectual Property</h2>
            <p>
              Upon delivery and full payment (where applicable) of a service, the client owns the deliverables. Life3760 Material &amp; Services retains the right to display work in portfolios or promotional materials unless explicitly agreed otherwise.
            </p>
            <p>
              You may not resell, redistribute, or represent our work as your own without prior written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Acceptable Use</h2>
            <p>You agree not to use our services to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Violate Discord's Terms of Service or Community Guidelines</li>
              <li>Engage in harassment, hate speech, or illegal activity</li>
              <li>Build tools intended to harm, spam, or exploit other users</li>
              <li>Infringe on the intellectual property of others</li>
            </ul>
            <p>
              We reserve the right to refuse or cancel service to any user in violation of these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Disclaimer of Warranties</h2>
            <p>
              Services are provided "as is" without warranties of any kind, express or implied. We do not guarantee that services will be uninterrupted, error-free, or meet every specific requirement not previously agreed upon.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Life3760 Material &amp; Services shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">10. Changes to Terms</h2>
            <p>
              We may update these Terms of Service at any time. Continued use of our services after changes are posted constitutes acceptance of the revised terms. Material changes will be announced in our Discord server.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">11. Contact</h2>
            <p>
              If you have any questions about these Terms, please reach out via our Discord server:{" "}
              <a href="https://discord.gg/cgs76nsZAa" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                discord.gg/cgs76nsZAa
              </a>.
            </p>
          </section>

        </div>
      </main>

      <footer className="py-8 border-t border-border bg-secondary/50 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Life3760 Material &amp; Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
