import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SuggestionChipsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
  className?: string;
}

export const SuggestionChips = ({ 
  suggestions, 
  onSuggestionClick, 
  className 
}: SuggestionChipsProps) => {
  return (
    <div className={cn("flex flex-wrap gap-2 mb-4", className)}>
      {suggestions.map((suggestion, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={() => onSuggestionClick(suggestion)}
          className={cn(
            "h-auto py-2 px-4 rounded-full text-xs font-medium",
            "bg-chat-surface border-border/50 text-foreground",
            "hover:bg-chat-surface-hover hover:border-primary/50",
            "transition-all duration-300 hover:scale-105",
            "glow-effect"
          )}
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
};