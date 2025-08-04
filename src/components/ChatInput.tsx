import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mic, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const ChatInput = ({ 
  onSendMessage, 
  disabled = false, 
  placeholder = "Type your message..." 
}: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-border/50 bg-chat-surface/80 backdrop-blur-sm p-4">
      <form onSubmit={handleSubmit} className="flex gap-3 items-end">
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              "min-h-[52px] max-h-32 resize-none rounded-xl border-0",
              "bg-chat-background text-foreground placeholder:text-muted-foreground",
              "focus:ring-2 focus:ring-primary/50 transition-all duration-300",
              "pr-12"
            )}
            rows={1}
          />
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-2 bottom-2 h-8 w-8 p-0 hover:bg-chat-surface-hover"
          >
            <Paperclip className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="h-12 w-12 rounded-xl bg-chat-surface hover:bg-chat-surface-hover"
          >
            <Mic className="w-5 h-5" />
          </Button>
          
          <Button
            type="submit"
            disabled={!message.trim() || disabled}
            className={cn(
              "h-12 w-12 rounded-xl bg-gradient-primary hover:shadow-glow",
              "transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
              "group"
            )}
          >
            <Send className={cn(
              "w-5 h-5 transition-transform duration-300",
              "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            )} />
          </Button>
        </div>
      </form>
    </div>
  );
};