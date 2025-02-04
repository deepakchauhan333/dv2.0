import { Card } from "@/components/ui/card";
import { 
  Code2, Paintbrush, Bot, Brain, Image as ImageIcon, 
  MessageSquare, LifeBuoy, LineChart, FileText, Video, Mic
} from "lucide-react";

const categories = [
  { name: "AI Detector", icon: Brain },
  { name: "Business", icon: LineChart },
  { name: "Chatbot", icon: MessageSquare },
  { name: "Code & IT", icon: Code2 },
  { name: "Design & Art", icon: Paintbrush },
  { name: "Education", icon: Bot },
  { name: "Image", icon: ImageIcon },
  { name: "Life Assistant", icon: LifeBuoy },
  { name: "Text & Writing", icon: FileText },
  { name: "Video", icon: Video },
  { name: "Voice", icon: Mic }
];

export function Categories() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold tracking-tight">Browse Categories</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className="flex cursor-pointer flex-col items-center gap-4 p-6 text-center transition-colors hover:bg-muted"
              >
                <div className="rounded-full bg-primary/10 p-3">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-medium">{category.name}</span>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}