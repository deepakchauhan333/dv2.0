"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

const popularTools = [
  {
    id: 1,
    name: "Claude AI",
    description: "Advanced AI assistant for research and analysis",
    price: "Free",
    rating: 4.8,
    category: "Text & Writing",
    sponsored: true,
  },
  {
    id: 2,
    name: "Stable Diffusion",
    description: "Open-source image generation model",
    price: "Free",
    rating: 4.7,
    category: "Image",
  },
  {
    id: 3,
    name: "Synthesia",
    description: "AI video creation platform",
    price: "Paid",
    rating: 4.6,
    category: "Video",
  },
  {
    id: 4,
    name: "Jasper",
    description: "AI content writing assistant",
    price: "Paid",
    rating: 4.5,
    category: "Text & Writing",
    sponsored: true,
  }
];

export function PopularTools() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Popular Tools</h2>
          <Button variant="ghost" className="gap-2">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {popularTools.map((tool) => (
            <Card key={tool.id} className="flex flex-col p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
                {tool.sponsored && (
                  <Badge variant="secondary">Ad</Badge>
                )}
              </div>
              <div className="mt-4 flex items-center gap-4">
                <Badge variant="outline">{tool.category}</Badge>
                <Badge variant="outline">{tool.price}</Badge>
              </div>
              <div className="mt-4 flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{tool.rating}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}