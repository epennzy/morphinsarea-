// /pages/login.jsx
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <div className="p-4 text-white bg-[#1E1E1E] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Login Akun</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="mb-2 p-2 w-64 rounded bg-[#2A2A2A] text-white"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="mb-2 p-2 w-64 rounded bg-[#2A2A2A] text-white"
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button
        onClick={handleLogin}
        disabled={loading}
        className="bg-purple-600 px-4 py-2 rounded w-64 hover:bg-purple-700"
      >
        {loading ? "Loading..." : "Login"}
      </button>
    </div>
  );
}