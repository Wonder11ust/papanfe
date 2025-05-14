import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronUp, ChevronDown } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { ProductPropType } from '../../types';

const DataTable = ({ data }) => {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const columns = [
    {
      id: 'id',
      header: 'ID',
      accessor: (item) => item.id,
      sortable: true,
    },
    {
      id: 'product',
      header: 'Produk',
      accessor: (item) => (
        <div className="flex items-center">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-12 h-8 rounded object-cover mr-3" 
          />
          <span className="text-sm font-medium text-gray-900">{item.name}</span>
        </div>
      ),
    },
    {
      id: 'status',
      header: 'Status',
      accessor: (item) => <StatusBadge status={item.status} />,
    },
    {
      id: 'visits',
      header: 'Total Visit',
      accessor: (item) => (
        <span className="text-sm text-gray-700">{item.visits.toLocaleString()}</span>
      ),
      sortable: true,
    },
  ];

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;
    
    if (sortField === 'id') {
      const aValue = a.id.replace('#', '');
      const bValue = b.id.replace('#', '');
      
      return sortDirection === 'asc'
        ? parseInt(aValue) - parseInt(bValue)
        : parseInt(bValue) - parseInt(aValue);
    }
    
    if (sortField === 'visits') {
      return sortDirection === 'asc'
        ? a.visits - b.visits
        : b.visits - a.visits;
    }
    
    return 0;
  });

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-white">
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center space-x-1">
                  <span>{column.header}</span>
                  {column.sortable && (
                    <button
                      className="focus:outline-none"
                      onClick={() => handleSort(column.id)}
                    >
                      <div className="flex flex-col">
                        <ChevronUp
                          size={12}
                          className={`${
                            sortField === column.id && sortDirection === 'asc'
                              ? 'text-gray-900'
                              : 'text-gray-400'
                          }`}
                        />
                        <ChevronDown
                          size={12}
                          className={`${
                            sortField === column.id && sortDirection === 'desc'
                              ? 'text-gray-900'
                              : 'text-gray-400'
                          }`}
                        />
                      </div>
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td key={`${item.id}-${column.id}`} className="px-6 py-4 whitespace-nowrap">
                  {column.accessor(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(ProductPropType).isRequired
};

export default DataTable;