"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const featuredTools = [
  {
    id: 1,
    name: "ChatGPT",
    description: "Advanced language model for natural conversations and content creation",
    category: "Text & Writing",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Midjourney",
    description: "AI-powered image generation tool for creating stunning artwork",
    category: "Design & Art",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1686191128892-3ff4911c0169?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Copilot",
    description: "AI-powered coding assistant for faster development",
    category: "Code & IT",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1687186735445-df877226fae9?w=800&auto=format&fit=crop&q=60",
  }
];

export function FeaturedTools() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Featured Tools</h2>
          <Badge variant="secondary" className="cursor-pointer">View All</Badge>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <Card key={tool.id} className="group relative overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video relative">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge className="mb-2">{tool.category}</Badge>
                <h3 className="text-2xl font-bold">{tool.name}</h3>
                <p className="mt-2 text-muted-foreground">{tool.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                    <span className="font-medium">{tool.rating}</span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}