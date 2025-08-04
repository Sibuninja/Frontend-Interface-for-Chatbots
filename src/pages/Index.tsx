import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-chat-background p-4">
      <div className="container mx-auto max-w-6xl h-[calc(100vh-2rem)]">
        <ChatInterface className="h-full" />
      </div>
    </div>
  );
};

export default Index;
