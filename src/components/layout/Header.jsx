import PropTypes from 'prop-types';
import { Menu } from 'lucide-react';
import { UserPropType } from '../../types';

const Header = ({ title, user, onMenuClick }) => {
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
      
      <div className="flex items-center">
        <span className="mr-3 text-sm text-gray-700 hidden sm:block">{user.name}</span>
        <div className="relative">
          <img 
            src={user.avatar} 
            alt="User Avatar" 
            className="h-8 w-8 rounded-full object-cover border border-gray-200"
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  user: UserPropType.isRequired,
  onMenuClick: PropTypes.func.isRequired
};

export default Header;