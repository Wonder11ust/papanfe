import { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  LayoutDashboard, 
  Home, 
  Building2, 
  HeartHandshake, 
  FolderKanban, 
  Users,
  ChevronRight
} from 'lucide-react';
import { navItems } from '../../data/dummyData';

const Sidebar = ({ open, onClose }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'LayoutDashboard':
        return <LayoutDashboard size={20} />;
      case 'Home':
        return <Home size={20} />;
      case 'Building2':
        return <Building2 size={20} />;
      case 'HeartHandshake':
        return <HeartHandshake size={20} />;
      case 'FolderKanban':
        return <FolderKanban size={20} />;
      case 'Users':
        return <Users size={20} />;
      default:
        return <LayoutDashboard size={20} />;
    }
  };

  return (
    <>
      {/* Mobile sidebar backdrop */}
      <div 
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-16 border-b">
          <div className="flex items-center">
            <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 0L50 14.4338V35.5662L25 50L0 35.5662V14.4338L25 0Z" fill="#10B981"/>
              <path d="M25 5L45 17.1885V29.8115L25 42L5 29.8115V17.1885L25 5Z" fill="white"/>
              <path d="M25 10L40 18.9423V28.0577L25 37L10 28.0577V18.9423L25 10Z" fill="#10B981"/>
            </svg>
            <span className="ml-2 text-lg font-bold text-gray-800">PAPAN MAHARAJA</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href="#"
                  className={`flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-emerald-50 transition-colors ${
                    item.active ? 'bg-emerald-50 text-emerald-600' : ''
                  }`}
                >
                  <span className={`${item.active ? 'text-emerald-600' : 'text-gray-500'}`}>
                    {getIcon(item.icon)}
                  </span>
                  <span className={`ml-3 ${item.active ? 'font-semibold' : ''}`}>{item.name}</span>
                  {item.active && (
                    <span className="ml-auto">
                      <ChevronRight size={16} className="text-emerald-600" />
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Sidebar;