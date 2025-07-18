import { products } from "../data/ProductsData";

export default function HomePage() {
  return (
    <div className="p-4 text-white bg-[#1E1E1E] min-h-screen pb-16">
      <h1 className="text-2xl font-bold mb-4">Welcome to Morphins Store</h1>
      <p className="mb-4">Explore our best premium accounts with full guarantee.</p>
      <h2 className="text-xl font-semibold mb-2">🔥 Popular Products</h2>
      <div className="space-y-4">
        {products.slice(0, 5).map((product, idx) => (
          <div key={idx} className="bg-[#2A2A2A] p-4 rounded-2xl">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-purple-400">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}