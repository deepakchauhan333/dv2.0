"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="container px-4 md:px-6">
      <div className="rounded-lg bg-muted p-8 md:p-12 lg:p-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Stay Updated</h2>
          <p className="mt-4 text-muted-foreground">
            Subscribe to our newsletter for the latest AI tools, trends, and insights.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}