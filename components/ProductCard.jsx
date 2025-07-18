export default function ProductCard({ name, price, details, onAddToCart }) {
  return (
    <div className="bg-[#2A2A2A] p-4 rounded-2xl">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-purple-400">{price}</p>
      <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
        {details.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <button
        onClick={onAddToCart}
        className="mt-3 w-full bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}