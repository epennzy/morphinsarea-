// /pages/register.jsx
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    nama: "",
    nomor_wa: "",
    nama_penerima: "",
    nomor_rekening: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setLoading(true);
    setMessage("");
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });
    if (error) {
      setMessage("Gagal mendaftar: " + error.message);
    } else {
      await supabase.from("profiles").insert([
        {
          id: data.user.id,
          nama: form.nama,
          nomor_wa: form.nomor_wa,
          nama_penerima: form.nama_penerima,
          nomor_rekening: form.nomor_rekening,
        },
      ]);
      setMessage("Berhasil mendaftar! Cek email untuk verifikasi.");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Daftar Akun</h1>
      <input name="email" onChange={handleChange} placeholder="Email" className="mb-2 p-2 w-64 rounded" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" className="mb-2 p-2 w-64 rounded" />
      <input name="nama" onChange={handleChange} placeholder="Nama" className="mb-2 p-2 w-64 rounded" />
      <input name="nomor_wa" onChange={handleChange} placeholder="Nomor WhatsApp" className="mb-2 p-2 w-64 rounded" />
      <input name="nama_penerima" onChange={handleChange} placeholder="Nama Penerima" className="mb-2 p-2 w-64 rounded" />
      <input name="nomor_rekening" onChange={handleChange} placeholder="Nomor Rekening" className="mb-2 p-2 w-64 rounded" />
      <button onClick={handleRegister} disabled={loading} className="bg-purple-600 px-4 py-2 rounded">
        {loading ? "Loading..." : "Daftar"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}