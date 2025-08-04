import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ChatHeader } from "./ChatHeader";
import { EmptyState } from "./EmptyState";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatInterfaceProps {
  className?: string;
}

export const ChatInterface = ({ className }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    // Use a simple timeout to ensure the DOM has updated
    setTimeout(() => {
      const scrollElement = document.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(content),
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage: string): string => {
    const responses = [
      "That's a great question! Let me think about that for a moment. " + userMessage.toLowerCase().includes('help') 
        ? "I'm here to assist you with whatever you need."
        : "Here's what I think about that topic...",
      "I understand what you're asking. Based on your message, I'd suggest considering multiple perspectives on this.",
      "Thanks for sharing that with me! That's really interesting. Let me provide some insights that might be helpful.",
      "I appreciate you bringing this up. This is actually a fascinating topic that connects to several important concepts.",
      "Great point! I've been thinking about similar ideas lately. Here's my perspective on what you've shared..."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className={cn(
      "flex flex-col h-full bg-chat-background rounded-xl overflow-hidden",
      "border border-border/50 shadow-elegant",
      className
    )}>
      <ChatHeader />
      
      <div className="flex-1 flex flex-col min-h-0">
        {messages.length === 0 ? (
          <EmptyState onSuggestionClick={handleSuggestionClick} />
        ) : (
          <ScrollArea className="flex-1 px-4 py-6">
            <div className="space-y-1 pb-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.content}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}
              
              {isTyping && (
                <ChatMessage
                  message=""
                  isUser={false}
                  isTyping={true}
                />
              )}
            </div>
          </ScrollArea>
        )}
      </div>
      
      <ChatInput 
        onSendMessage={handleSendMessage} 
        disabled={isTyping}
        placeholder="Ask me anything..."
      />
    </div>
  );
};