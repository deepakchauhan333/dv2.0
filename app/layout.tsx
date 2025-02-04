import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Add display swap for better loading behavior
  preload: true,   // Ensure font preloading
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'], // Add fallback fonts
});

export const metadata: Metadata = {
  title: 'AIExploria - AI Tools Directory',
  description: 'Discover and compare the best AI tools and services for your needs',
  keywords: 'AI tools, artificial intelligence, machine learning, AI directory, AI services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}