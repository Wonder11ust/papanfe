import PropTypes from 'prop-types';

export const UserPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
});

export const StatCardPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
});

export const ProductPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Tersedia', 'Sudah Terjual']).isRequired,
  visits: PropTypes.number.isRequired,
  tipe: PropTypes.string.isRequired
});

export const MonthPropType = PropTypes.oneOf([
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
]);