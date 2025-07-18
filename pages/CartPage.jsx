// /pages/cart.jsx import { useContext } from "react"; import { CartContext } from "@/context/CartContext"; import { createClient } from "@/lib/supabaseClient";

const supabase = createClient();

export default function CartPage() { const { cartItems, total, removeFromCart, clearCart } = useContext(CartContext);

const handleCheckout = async () => { const { error } = await supabase.from("orders").insert([ { items: cartItems, total, }, ]); if (!error) { alert("Order Berhasil Dibuat!"); clearCart(); } else { alert("Gagal Membuat Order!"); } };

return ( <div className="min-h-screen bg-[#1E1E1E] p-4 text-white"> <h1 className="text-2xl font-bold mb-4 text-center">Keranjang Saya</h1> {cartItems.length === 0 ? ( <p className="text-center">Keranjang kosong.</p> ) : ( <div> {cartItems.map((item, index) => ( <div key={index} className="bg-[#2D2D2D] p-4 rounded-xl mb-3"> <h2 className="text-lg font-semibold">{item.name}</h2> <p className="text-purple-400">{item.price}</p> <button onClick={() => removeFromCart(item)} className="mt-2 bg-red-500 px-2 py-1 rounded" > Hapus </button> </div> ))} <div className="text-center mt-4"> <p className="mb-2">Total: <span className="text-purple-400">Rp{total}</span></p> <button
onClick={handleCheckout}
className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
> Checkout </button> </div> </div> )} </div> ); }
