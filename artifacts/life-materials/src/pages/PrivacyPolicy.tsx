import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft } from "lucide-react";
import logoSrc from "@assets/lv_0_20260525183834_1779812038578.jpg";

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: May 27, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Overview</h2>
            <p>
              Life3760 Material &amp; Services ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you visit our website or interact with us through Discord.
            </p>
            <p>
              We keep things simple: we do not run accounts, collect passwords, or store personal data on our website. Our primary communication channel is Discord, and any information you share there is subject to{" "}
              <a href="https://discord.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                Discord's Privacy Policy
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p>
              <strong className="text-foreground">Website:</strong> This website does not require you to create an account or submit any forms. We do not use tracking cookies, analytics scripts, or third-party advertising. No personally identifiable information is collected through this site.
            </p>
            <p>
              <strong className="text-foreground">Discord:</strong> When you contact us or request a service through Discord, you voluntarily share your Discord username and any details you include in your messages (e.g. project requirements). We use this information solely to deliver the requested service and communicate with you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p>Any information you provide through Discord is used only to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Understand and fulfil your service request</li>
              <li>Communicate updates and delivery details with you</li>
              <li>Resolve any issues or disputes related to your order</li>
            </ul>
            <p>We do not sell, trade, or share your information with third parties.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Data Storage</h2>
            <p>
              This website stores one piece of data on your device: your chosen colour theme (light or dark mode), saved in your browser's <code className="text-foreground bg-secondary px-1 py-0.5 rounded text-xs">localStorage</code>. This contains no personal information and never leaves your device.
            </p>
            <p>
              Currency preference is also stored locally in <code className="text-foreground bg-secondary px-1 py-0.5 rounded text-xs">localStorage</code> for convenience. Again, no personal data is involved.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Third-Party Services</h2>
            <p>
              Our services are delivered through Discord. By using Discord to interact with us, you are subject to Discord's own{" "}
              <a href="https://discord.com/terms" target="_blank" rel="noreferrer" className="text-primary hover:underline">Terms of Service</a>{" "}
              and{" "}
              <a href="https://discord.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
            <p>
              This website is hosted on Render. Render may collect standard server logs (IP addresses, request timestamps) as part of normal hosting operations. See{" "}
              <a href="https://render.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">Render's Privacy Policy</a>{" "}
              for details.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Children's Privacy</h2>
            <p>
              Our services are not directed at children under the age of 13. We do not knowingly collect information from anyone under 13. Discord itself requires users to be at least 13 years old.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Your Rights</h2>
            <p>
              Since we hold very little data about you, your practical rights are straightforward:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>You can clear your browser's localStorage at any time to remove theme/currency preferences</li>
              <li>You can request that we delete any Discord messages or project details we hold — contact us via Discord and we'll action it promptly</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The date at the top of the page will reflect the most recent revision. Significant changes will be announced in our Discord server.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">9. Contact</h2>
            <p>
              Questions or concerns about this Privacy Policy? Reach us on Discord:{" "}
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
