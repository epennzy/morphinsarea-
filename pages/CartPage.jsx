import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabaseClient";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleCheckout = async () => {
    const total = cart.length;
    const { error } = await supabase.from("orders").insert([
      {
        items: cart,
        total: total,
      },
    ]);
    if (!error) {
      alert("Order berhasil dikirim!");
      clearCart();
    } else {
      alert("Gagal kirim order");
    }
  };

  return (
    <div className="p-4 text-white bg-[#1E1E1E] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart kamu kosong</p>
      ) : (
        <div className="space-y-2">
          {cart.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2A2A2A] p-3 rounded flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-purple-400">{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.name)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Hapus
              </button>
            </div>
          ))}

          <button
            onClick={handleCheckout}
            className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded"
          >
            Checkout Sekarang
          </button>
        </div>
      )}
    </div>
  );
}