import PropTypes from 'prop-types';
import { 
  Home, 
  Tag, 
  BarChart2, 
  Globe
} from 'lucide-react';

const StatCard = ({ title, value, icon, color }) => {
  const getIcon = () => {
    const iconProps = { 
      size: 20, 
      className: 'text-white'
    };

    switch (icon) {
      case 'Home':
        return <Home {...iconProps} />;
      case 'Tag':
        return <Tag {...iconProps} />;
      case 'BarChart2':
        return <BarChart2 {...iconProps} />;
      case 'Globe':
        return <Globe {...iconProps} />;
      default:
        return <Home {...iconProps} />;
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-500';
      case 'blue':
        return 'bg-blue-500';
      case 'sky':
        return 'bg-sky-500';
      case 'teal':
        return 'bg-teal-500';
      default:
        return 'bg-emerald-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              {value.toLocaleString()}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{title}</p>
          </div>
          <div className={`rounded-full p-2 ${getColorClasses()}`}>
            {getIcon()}
          </div>
        </div>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default StatCard;