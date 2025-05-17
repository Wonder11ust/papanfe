import PropTypes from 'prop-types';
import { AlertCircle } from 'lucide-react';

const LogoutConfirmation = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg w-full max-w-sm p-6 text-center">
          <div className="flex justify-center mb-4">
            <AlertCircle size={48} className="text-red-500" />
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Konfirmasi Keluar
          </h3>
          
          <p className="text-sm text-gray-500 mb-6">
            Apakah Anda yakin ingin log out? Semua perubahan yang belum disimpan akan hilang.
          </p>
          
          <div className="flex space-x-3">
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Keluar
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

LogoutConfirmation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default LogoutConfirmation;