import { useState } from 'react';
import PropTypes from 'prop-types';
import { X, PencilLine } from 'lucide-react';
import { UserPropType } from '../../types';

const EditProfileModal = ({ isOpen, onClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    username: 'admin_patrick',
    email: 'patrick@gmail.com'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg w-full max-w-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Edit Profile</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X size={20} />
            </button>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="relative">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md border border-gray-200">
                <PencilLine size={16} className="text-gray-600" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

EditProfileModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: UserPropType.isRequired,
  onSave: PropTypes.func.isRequired
};

export default EditProfileModal;