import { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'lucide-react';
import { UserPropType } from '../../types';
import UserDropdown from '../ui/UserDropdown';
import EditProfileModal from '../ui/EditProfileModal';
import ChangePasswordModal from '../ui/ChangePasswordModal';
import LogoutConfirmation from '../ui/LogOutConfirmation';

const Header = ({ title, user, onMenuClick }) => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleEditProfile = (data) => {
    console.log('Profile updated:', data);
  };

  const handleChangePassword = (data) => {
    console.log('Password changed:', data);
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <button 
          onClick={onMenuClick}
          className="mr-4 text-gray-600 lg:hidden focus:outline-none"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-medium text-gray-800">{title}</h1>
      </div>
      
      <UserDropdown
        user={user}
        onEditProfile={() => setIsEditProfileOpen(true)}
        onChangePassword={() => setIsChangePasswordOpen(true)}
        onLogout={() => setIsLogoutOpen(true)}
      />

      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        user={user}
        onSave={handleEditProfile}
      />

      <ChangePasswordModal
        isOpen={isChangePasswordOpen}
        onClose={() => setIsChangePasswordOpen(false)}
        onSave={handleChangePassword}
      />

      <LogoutConfirmation
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleLogout}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  user: UserPropType.isRequired,
  onMenuClick: PropTypes.func.isRequired
};

export default Header;