import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronUp, ChevronDown, ChevronRight, ChevronDown as Expand } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { ProductPropType } from '../../types';

const DataTable = ({ data }) => {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [expandedRows, setExpandedRows] = useState(new Set());

  const columns = [
    {
      id: 'expand',
      header: '',
      accessor: (item) => (
        <button
          onClick={() => toggleRow(item.id)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          {expandedRows.has(item.id) ? (
            <ChevronDown size={16} className="text-gray-500" />
          ) : (
            <ChevronRight size={16} className="text-gray-500" />
          )}
        </button>
      ),
    },
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

  const toggleRow = (id) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(id)) {
      newExpandedRows.delete(id);
    } else {
      newExpandedRows.add(id);
    }
    setExpandedRows(newExpandedRows);
  };

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
            <React.Fragment key={item.id}>
              <tr key={`${item.id}-row`} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={`${item.id}-${column.id}`} className="px-6 py-4 whitespace-nowrap">
                    {column.accessor(item)}
                  </td>
                ))}
              </tr>
              {expandedRows.has(item.id) && (
                <tr key={`${item.id}-expanded-row`}>
                  <td colSpan={columns.length} className="px-6 py-4 bg-gray-50">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Detail Properti</h4>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Alamat:</span> Jl. Diponegoro No. 666
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Luas Tanah:</span> 302 m²
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Luas Bangunan:</span> 280 m²
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Harga:</span> Rp 2.200.000.000
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Fasilitas</h4>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Kamar Tidur:</span> 3
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Kamar Mandi:</span> 2
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Garasi:</span> 1 Mobil
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Listrik:</span> 2200 VA
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
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