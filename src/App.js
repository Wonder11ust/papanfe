import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Layout from './components/layout/Layout';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Layout 
      sidebarOpen={sidebarOpen} 
      setSidebarOpen={setSidebarOpen}
    >
      <Dashboard />
    </Layout>
  );
}

export default App;