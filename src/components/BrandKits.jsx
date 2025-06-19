import { Settings } from "lucide-react"; // Optional: install lucide-react or use a placeholder

const brands = [
  { name: "ECorp", color: "bg-green-400", checked: false },
  { name: "ICorp", color: "bg-yellow-400", checked: false },
  { name: "The Agency", color: "bg-red-500", checked: true },
];

export default function BrandKits() {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-black rounded-xl p-6 shadow-lg border border-zinc-800">
      <h2 className="text-white text-xl font-semibold mb-4">Brand Kits</h2>
      <div className="space-y-3">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-zinc-900 p-4 rounded-lg"
          >
            <div className="flex items-center gap-3">
              {/* Checkbox / Radio */}
              <div
                className={`h-5 w-5 rounded-md flex items-center justify-center border border-zinc-600 ${
                  brand.checked ? "bg-violet-600" : "bg-zinc-800"
                }`}
              >
                {brand.checked && (
                  <div className="w-2 h-2 bg-white rounded-sm" />
                )}
              </div>

              {/* Brand Icon (2 blobs) */}
              <div className="relative w-6 h-6">
                <div className="w-4 h-4 bg-white rounded-full absolute top-0 left-1" />
                <div
                  className={`w-3 h-3 rounded-full absolute top-2 left-0 ${brand.color}`}
                />
              </div>

              {/* Brand Name */}
              <span className="text-white font-medium">{brand.name}</span>
            </div>

            {/* Settings Icon */}
            <Settings size={18} className="text-zinc-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
