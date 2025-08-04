import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle, Lightbulb, Rocket } from "lucide-react";
import { SuggestionChips } from "./SuggestionChips";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  onSuggestionClick: (suggestion: string) => void;
  className?: string;
}

const suggestions = [
  "Explain quantum computing",
  "Write a creative story",
  "Help me plan a workout",
  "Create a recipe",
  "Analyze this data",
  "Generate ideas"
];

const features = [
  {
    icon: MessageCircle,
    title: "Natural Conversations",
    description: "Chat naturally and get intelligent responses"
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "Generate ideas and solve complex problems"
  },
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Get instant responses powered by AI"
  }
];

export const EmptyState = ({ onSuggestionClick, className }: EmptyStateProps) => {
  return (
    <div className={cn(
      "flex-1 flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto",
      className
    )}>
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-float">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-glow rounded-full opacity-50 animate-pulse" />
      </div>
      
      <h1 className="text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
        Welcome to AI Chat
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        Start a conversation with our intelligent assistant. Ask questions, get creative, 
        or explore new ideas together.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={cn(
              "p-4 rounded-xl bg-chat-surface border border-border/50",
              "hover:bg-chat-surface-hover transition-all duration-300",
              "hover:scale-105 hover:shadow-soft"
            )}
          >
            <feature.icon className="w-6 h-6 text-primary mb-2 mx-auto" />
            <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
            <p className="text-xs text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="w-full">
        <p className="text-sm text-muted-foreground mb-4">Try these suggestions:</p>
        <SuggestionChips 
          suggestions={suggestions} 
          onSuggestionClick={onSuggestionClick}
          className="justify-center"
        />
      </div>
    </div>
  );
};