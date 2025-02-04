import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in 2024",
    excerpt: "Exploring the latest trends and predictions in artificial intelligence",
    date: "Mar 15, 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Top AI Tools for Productivity",
    excerpt: "Discover the best AI-powered tools to boost your workflow",
    date: "Mar 12, 2024",
    image: "https://images.unsplash.com/photo-1686191128892-3ff4911c0169?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "AI Ethics and Responsibility",
    excerpt: "Understanding the importance of ethical AI development",
    date: "Mar 10, 2024",
    image: "https://images.unsplash.com/photo-1687186735445-df877226fae9?w=800&auto=format&fit=crop&q=60",
  }
];

export function BlogSection() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold tracking-tight">Latest from Blog</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="group overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-muted-foreground">{post.date}</time>
                  <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}