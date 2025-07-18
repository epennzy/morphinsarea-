export default function FAQPage() {
  const faqs = [
    { q: "How do I buy an account?", a: "Just select the account and proceed to checkout." },
    { q: "Is there a warranty?", a: "Yes, you will get a limited warranty as per product description." },
    { q: "Can I get a refund?", a: "All sales are final. Please read the disclaimer before purchase." },
  ];

  return (
    <div className="p-4 text-white bg-[#1E1E1E] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">FAQ</h1>
      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <div key={idx} className="bg-[#2A2A2A] p-4 rounded-2xl">
            <p className="font-semibold">❓ {item.q}</p>
            <p className="text-gray-300 mt-2">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}