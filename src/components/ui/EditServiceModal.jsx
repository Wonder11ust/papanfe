import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';
import { ProductPropType } from '../../types';

const EditServiceModal = ({ isOpen, onClose, onSave, product }) => {
  const [formData, setFormData] = useState({
    tipeHunian: 'Rumah Pesan Bangun',
    statusProperti: product?.status || 'Tersedia',
    namaProperti: product?.name || '',
    alamat: '',
    deskripsi: '',
    jumlahKamarTidur: 3,
    jumlahKamarMandi: 2,
    luasTanah: 0,
    luasBangunan: 0,
    dayaListrik: 0,
    foto: []
  });

  useEffect(() => {
    if (product) {
      setFormData({
        ...formData,
        statusProperti: product.status,
        namaProperti: product.name,
      });
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, foto: [...formData.foto, ...files] });
  };

  const removeFile = (index) => {
    const newFiles = formData.foto.filter((_, i) => i !== index);
    setFormData({ ...formData, foto: newFiles });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg w-full max-w-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Edit Produk</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipe Hunian
                </label>
                <select
                  value={formData.tipeHunian}
                  onChange={(e) => setFormData({ ...formData, tipeHunian: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Rumah Pesan Bangun">Rumah Pesan Bangun</option>
                  <option value="Rumah Siap Huni">Rumah Siap Huni</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status Properti
                </label>
                <select
                  value={formData.statusProperti}
                  onChange={(e) => setFormData({ ...formData, statusProperti: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Tersedia">Tersedia</option>
                  <option value="Sudah Terjual">Sudah Terjual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Properti
                </label>
                <input
                  type="text"
                  value={formData.namaProperti}
                  onChange={(e) => setFormData({ ...formData, namaProperti: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Masukkan nama properti"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat
                </label>
                <input
                  type="text"
                  value={formData.alamat}
                  onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Masukkan alamat properti"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deskripsi Properti
                </label>
                <textarea
                  value={formData.deskripsi}
                  onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows={4}
                  placeholder="Masukkan deskripsi properti"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah Kamar Tidur
                  </label>
                  <input
                    type="number"
                    value={formData.jumlahKamarTidur}
                    onChange={(e) => setFormData({ ...formData, jumlahKamarTidur: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah Kamar Mandi
                  </label>
                  <input
                    type="number"
                    value={formData.jumlahKamarMandi}
                    onChange={(e) => setFormData({ ...formData, jumlahKamarMandi: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Luas Tanah (m²)
                  </label>
                  <input
                    type="number"
                    value={formData.luasTanah}
                    onChange={(e) => setFormData({ ...formData, luasTanah: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Luas Bangunan (m²)
                  </label>
                  <input
                    type="number"
                    value={formData.luasBangunan}
                    onChange={(e) => setFormData({ ...formData, luasBangunan: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Daya Listrik (Watt)
                </label>
                <input
                  type="number"
                  value={formData.dayaListrik}
                  onChange={(e) => setFormData({ ...formData, dayaListrik: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Foto Properti
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500">
                        <span>Upload files</span>
                        <input
                          type="file"
                          className="sr-only"
                          multiple
                          onChange={handleFileChange}
                          accept="image/*"
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                </div>
                {formData.foto.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {formData.foto.map((file, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${index + 1}`}
                          className="h-24 w-full object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

EditServiceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  product: ProductPropType
};

export default EditServiceModal;