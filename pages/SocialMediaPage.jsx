export default function SocialMediaPage() {
  const socials = [
    { name: "WhatsApp Group", link: "https://chat.whatsapp.com/Ddr7iockRWC5SDHLP0Ws6K" },
    { name: "Telegram", link: "https://t.me/morphinsarea" },
    { name: "Instagram", link: "https://www.instagram.com/epennzy" },
    { name: "TikTok", link: "https://www.tiktok.com/@mrphnsarea" },
  ];

  return (
    <div className="p-4 text-white bg-[#1E1E1E] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Social Media</h1>
      <div className="space-y-3">
        {socials.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#2A2A2A] hover:bg-[#3A3A3A] p-4 rounded-2xl"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}