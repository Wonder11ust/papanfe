import PropTypes from 'prop-types';
import { AlertCircle } from 'lucide-react';
import { ProductPropType } from '../../types';

const DeleteProductModal = ({ isOpen, onClose, onConfirm, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg w-full max-w-sm p-6">
          <div className="flex justify-center mb-4">
            <AlertCircle size={48} className="text-red-500" />
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">
            Hapus Produk
          </h3>
          
          <p className="text-sm text-gray-500 mb-6 text-center">
            Apakah Anda yakin ingin menghapus produk ini secara permanen? Tindakan ini tidak dapat dibatalkan.
          </p>

          {product && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-12 object-cover rounded"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex space-x-3">
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Hapus
            </button>
            
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DeleteProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  product: ProductPropType
};

export default DeleteProductModal;