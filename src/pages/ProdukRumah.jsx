import { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '../components/ui/DataTable';
import { products } from '../data/dummyData';

const ProdukRumah = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-lg font-medium text-gray-800">Daftar Produk Rumah</h2>
        
        <div className="flex w-full sm:w-auto gap-4">
          <input
            type="text"
            placeholder="Cari produk..."
            className="flex-1 sm:w-64 px-3 py-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 flex items-center gap-2">
            <Plus size={20} />
            <span>Tambah Baru</span>
          </button>
        </div>
      </div>
      
      <DataTable data={filteredProducts} />
    </div>
  );
};

export default ProdukRumah;