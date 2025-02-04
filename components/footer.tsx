import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">AIExploria</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your comprehensive directory for discovering and comparing AI tools and services.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Directory</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/categories">Categories</Link></li>
                <li><Link href="/submit">Submit Tool</Link></li>
                <li><Link href="/compare">Compare</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} AIExploria. All rights reserved.
        </div>
      </div>
    </footer>
  );
}