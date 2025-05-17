import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserCircle, Lock, LogOut } from 'lucide-react';
import { UserPropType } from '../../types';

const UserDropdown = ({ user, onEditProfile, onChangePassword, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none"
      >
        <img
          src={user.avatar}
          alt="User Avatar"
          className="h-8 w-8 rounded-full object-cover border border-gray-200"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
          </div>
          
          <button
            onClick={() => {
              setIsOpen(false);
              onEditProfile();
            }}
            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <UserCircle size={16} className="mr-2" />
            Profile
          </button>
          
          <button
            onClick={() => {
              setIsOpen(false);
              onChangePassword();
            }}
            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <Lock size={16} className="mr-2" />
            Ubah Password
          </button>
          
          <button
            onClick={() => {
              setIsOpen(false);
              onLogout();
            }}
            className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
          >
            <LogOut size={16} className="mr-2" />
            Keluar
          </button>
        </div>
      )}
    </div>
  );
};

UserDropdown.propTypes = {
  user: UserPropType.isRequired,
  onEditProfile: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
};

export default UserDropdown;