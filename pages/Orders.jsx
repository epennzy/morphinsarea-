import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const ADMIN_EMAIL = "admin@epennzy.com";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (user?.email === ADMIN_EMAIL) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setOrders(data);
    setLoading(false);
  };

  if (!user) return <p className="p-4 text-white">Memuat...</p>;

  if (user.email !== ADMIN_EMAIL) return <p className="p-4 text-white">Kamu tidak punya akses</p>;

  return (
    <div className="p-4 text-white bg-[#1E1E1E] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Riwayat Order (Admin)</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="bg-[#2A2A2A] p-3 rounded mb-2 text-sm">
            <p><strong>ID:</strong> {order.id}</p>
            <p><strong>Tanggal:</strong> {new Date(order.created_at).toLocaleString()}</p>
            <p><strong>Total Item:</strong> {order.total}</p>
            <p><strong>Items:</strong></p>
            <ul className="list-disc ml-5">
              {order.items.map((item, idx) => (
                <li key={idx}>{item.name} - {item.price}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}