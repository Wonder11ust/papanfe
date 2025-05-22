import { useState } from 'react';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import AddServiceModal from '../components/ui/AddServiceModal';
import EditServiceModal from '../components/ui/EditServiceModal';
import DeleteServiceModal from '../components/ui/DeleteServiceModal';

const JasaLayanan = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleAdd = (data) => {
    console.log('Adding new service:', data);
    setIsAddModalOpen(false);
  };

  const handleEdit = (data) => {
    console.log('Editing service:', data);
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    console.log('Deleting service:', selectedService);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-lg font-medium text-gray-800">Daftar Jasa & Layanan</h2>
        
        <div className="flex w-full sm:w-auto gap-4">
          <input
            type="text"
            placeholder="Cari jasa..."
            className="flex-1 sm:w-64 px-3 py-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 flex items-center gap-2"
          >
            <Plus size={20} />
            <span>Tambah Baru</span>
          </button>
        </div>
      </div>

      <AddServiceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAdd}
      />

      <EditServiceModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleEdit}
        service={selectedService}
      />

      <DeleteServiceModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        service={selectedService}
      />
    </div>
  );
};

export default JasaLayanan;