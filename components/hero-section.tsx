"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function HeroSection() {
  const [search, setSearch] = useState("");

  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Discover the Best AI Tools
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Explore our curated collection of AI tools and services to enhance your workflow and boost productivity.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search AI tools..."
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button className="w-full">Search</Button>
        </div>
      </div>
    </section>
  );
}