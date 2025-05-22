import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Header from './Header';
import { currentUser } from '../../data/dummyData';

const Layout = ({ children, sidebarOpen, setSidebarOpen, currentPage, setCurrentPage }) => {
  const getPageTitle = () => {
    switch (currentPage) {
      case 'produk-rumah':
        return 'Produk Rumah';
      case 'tipe-hunian':
        return 'Tipe Hunian'
      case 'jasa-layanan':
        return 'Jasa Layanan'
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title={getPageTitle()} 
          user={currentUser}
          onMenuClick={() => setSidebarOpen(true)} 
        />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default Layout;