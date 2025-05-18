import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import ProdukRumah from './pages/ProdukRumah';
import Layout from './components/layout/Layout';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'produk-rumah':
        return <ProdukRumah />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout 
      sidebarOpen={sidebarOpen} 
      setSidebarOpen={setSidebarOpen}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;