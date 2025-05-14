import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'lucide-react';
import { months } from '../../data/dummyData';

const MonthSelector = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('January');

  const handleSelect = (month) => {
    setSelectedMonth(month);
    setIsOpen(false);
    if (onChange) {
      onChange(month);
    }
  };

  return (
    <div className="relative">
      <div 
        className="flex items-center justify-between w-full py-2 px-4 rounded-md border border-gray-300 bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm text-gray-800">{selectedMonth}</span>
        <ChevronDown size={16} className="text-gray-400" />
      </div>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {months.map((month, index) => (
            <div 
              key={index}
              className="py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(month)}
            >
              {month}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

MonthSelector.propTypes = {
  onChange: PropTypes.func
};

export default MonthSelector;