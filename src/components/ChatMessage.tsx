import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
  isTyping?: boolean;
}

export const ChatMessage = ({ message, isUser, timestamp, isTyping }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex gap-3 mb-6 animate-fade-in message-enter",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className={cn(
        "w-8 h-8 border-2 transition-all duration-300",
        isUser 
          ? "border-user-message bg-gradient-primary shadow-glow" 
          : "border-bot-message bg-gradient-surface"
      )}>
        <AvatarFallback className={cn(
          "text-xs font-semibold",
          isUser ? "bg-gradient-primary text-white" : "bg-chat-surface text-foreground"
        )}>
          {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
        </AvatarFallback>
      </Avatar>
      
      <div className={cn(
        "max-w-[70%] rounded-2xl px-4 py-3 shadow-soft transition-all duration-300 hover:shadow-elegant",
        isUser 
          ? "bg-gradient-primary text-white rounded-br-md" 
          : "bg-chat-surface text-foreground rounded-bl-md border border-border/50"
      )}>
        {isTyping ? (
          <div className="flex space-x-1 py-1">
            <div className="w-2 h-2 bg-foreground/60 rounded-full typing-indicator"></div>
            <div className="w-2 h-2 bg-foreground/60 rounded-full typing-indicator"></div>
            <div className="w-2 h-2 bg-foreground/60 rounded-full typing-indicator"></div>
          </div>
        ) : (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
        )}
        
        {timestamp && !isTyping && (
          <div className={cn(
            "text-xs mt-2 opacity-70",
            isUser ? "text-right" : "text-left"
          )}>
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
};