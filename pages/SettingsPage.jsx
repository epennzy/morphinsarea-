import { Card, CardContent } from "@/components/ui/card";
import { Settings, MessageCircle, Info, Share2, HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  const settingsMenu = [
    { icon: <MessageCircle />, title: "Chat with AI", action: () => router.push("/chat-ai") },
    { icon: <Info />, title: "Disclaimer", action: () => router.push("/disclaimer") },
    { icon: <Share2 />, title: "Social Media", action: () => router.push("/social-media") },
    { icon: <HelpCircle />, title: "FAQ", action: () => router.push("/faq") },
  ];

  return (
    <div className="p-4 text-white bg-[#1E1E1E] min-h-screen">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Settings /> Settings
      </h1>
      <div className="space-y-3">
        {settingsMenu.map((item, index) => (
          <Card
            key={index}
            onClick={item.action}
            className="bg-[#2A2A2A] hover:bg-[#3A3A3A] cursor-pointer transition rounded-2xl"
          >
            <CardContent className="flex items-center gap-3 p-4">
              <div className="text-purple-500">{item.icon}</div>
              <span className="text-lg">{item.title}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}