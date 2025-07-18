import { Home, Heart, ShoppingCart, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const menus = [
    { icon: <Home />, path: "/", label: "Home" },
    { icon: <Heart />, path: "/saved", label: "Saved" },
    { icon: <ShoppingCart />, path: "/cart", label: "Cart" },
    { icon: <Settings />, path: "/settings", label: "Settings" },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-[#2A2A2A] text-white flex justify-around py-2">
      {menus.map((menu, idx) => (
        <button key={idx} onClick={() => router.push(menu.path)} className="flex flex-col items-center">
          {menu.icon}
          <span className="text-xs">{menu.label}</span>
        </button>
      ))}
    </div>
  );
}