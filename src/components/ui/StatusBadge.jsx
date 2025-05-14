import PropTypes from 'prop-types';

const StatusBadge = ({ status }) => {
  const baseClasses = "px-3 py-1 text-xs font-medium rounded-full";
  
  if (status === 'Tersedia') {
    return (
      <span className={`${baseClasses} bg-emerald-100 text-emerald-800`}>
        {status}
      </span>
    );
  }
  
  return (
    <span className={`${baseClasses} bg-red-100 text-red-800`}>
      {status}
    </span>
  );
};

StatusBadge.propTypes = {
  status: PropTypes.oneOf(['Tersedia', 'Sudah Terjual']).isRequired
};

export default StatusBadge;