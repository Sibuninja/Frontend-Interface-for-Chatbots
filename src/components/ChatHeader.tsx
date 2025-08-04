import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, MoreVertical, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatHeaderProps {
  title?: string;
  subtitle?: string;
  isOnline?: boolean;
  onSettingsClick?: () => void;
  className?: string;
}

export const ChatHeader = ({ 
  title = "AI Assistant", 
  subtitle = "Always here to help",
  isOnline = true,
  onSettingsClick,
  className 
}: ChatHeaderProps) => {
  return (
    <div className={cn(
      "flex items-center justify-between p-4 border-b border-border/50",
      "bg-chat-surface/80 backdrop-blur-sm",
      className
    )}>
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className={cn(
            "w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center",
            "shadow-glow animate-pulse-glow"
          )}>
            <Zap className="w-5 h-5 text-white" />
          </div>
          {isOnline && (
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-chat-surface animate-pulse" />
          )}
        </div>
        
        <div>
          <h1 className="font-semibold text-foreground">{title}</h1>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">{subtitle}</p>
            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse" />
              Online
            </Badge>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={onSettingsClick}
          className="h-8 w-8 hover:bg-chat-surface-hover"
        >
          <Settings className="w-4 h-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-chat-surface-hover"
        >
          <MoreVertical className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};