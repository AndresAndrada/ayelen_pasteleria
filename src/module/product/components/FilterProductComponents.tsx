import { useState } from "react";

interface FilterProductComponentsProps {
  onFilterChange: (filters: {
    search: string;
    type: string[];
    // maxPrice: number;
  }) => void;
}

export const FilterProductComponents = ({
  onFilterChange,
}: FilterProductComponentsProps) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<string[]>([]);
  // const [maxPrice, setMaxPrice] = useState(50);
  const availabletype = [
    { id: 1, name: "Torta", value: "torta" },
    { id: 2, name: "Cookies", value: "cookies" },
    { id: 3, name: "Merienda", value: "merienda" },
  ];

  const handleTypeChange = (optionType: string) => {
    console.log("🚀 ~ handleTypeChange ~ optionType:", optionType);
    const newtype = type.includes(optionType)
      ? type.filter((c) => c !== optionType)
      : [...type, optionType];
    setType(newtype);
    onFilterChange({ search, type: newtype });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    onFilterChange({ search: newSearch, type });
  };

  // const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newMaxPrice = Number(e.target.value);
  //   setMaxPrice(newMaxPrice);
  //   onFilterChange({ search, type, maxPrice: newMaxPrice });
  // };

  return (
    <aside className="w-full md:w-64 max-h-dvh rounded-2xl shadow-4xl p-6 sticky top-20 z-40">
      <h3 className="text-2xl font-bold text-secondary mb-6">Filtrar</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Buscar</label>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Buscar por nombre..."
            className="w-full p-2 rounded-lg border bg-white border-pink-300 focus:outline-pink-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Categorías
          </label>
          {availabletype.map((item) => (
            <div key={item.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={type.includes(item.value)}
                // defaultChecked
                onChange={() => handleTypeChange(item.value)}
                className="checkbox checkbox-success mr-2 h-4 w-4 bg-white"
              />
              <span className="text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
        {/* <div>
          <label className="block text-gray-700 font-medium mb-2">
            Precio Máximo: ${maxPrice.toFixed(2)}
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={maxPrice}
            onChange={handlePriceChange}
            className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
          />
        </div> */}
      </div>
    </aside>
  );
};
