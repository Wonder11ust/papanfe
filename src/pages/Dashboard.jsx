import { useState } from 'react';
import StatCard from '../components/ui/StatCard';
import MonthSelector from '../components/ui/MonthSelector';
import DataTable from '../components/ui/DataTable';
import { stats, products } from '../data/dummyData';

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      {/* Products Table */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg font-medium text-gray-800">Daftar Produk</h2>
          <div className="w-full sm:w-48">
            <MonthSelector onChange={setSelectedMonth} />
          </div>
        </div>
        
        <DataTable data={products} />
      </div>
    </div>
  );
};

export default Dashboard;