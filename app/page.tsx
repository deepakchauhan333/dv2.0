import { HeroSection } from "@/components/hero-section";
import { FeaturedTools } from "@/components/featured-tools";
import { Categories } from "@/components/categories";
import { PopularTools } from "@/components/popular-tools";
import { BlogSection } from "@/components/blog-section";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <HeroSection />
      <FeaturedTools />
      <Categories />
      <PopularTools />
      <BlogSection />
      <Newsletter />
    </div>
  );
}