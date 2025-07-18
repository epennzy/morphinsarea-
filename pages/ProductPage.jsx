import { products } from "../data/ProductsData";

export default function ProductsPage() {
  return (
    <div className="p-4 text-white bg-[#1E1E1E] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
      <div className="space-y-4">
        {products.map((product, idx) => (
          <div key={idx} className="bg-[#2A2A2A] p-4 rounded-2xl">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-purple-400">{product.price}</p>
            <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
              {product.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}