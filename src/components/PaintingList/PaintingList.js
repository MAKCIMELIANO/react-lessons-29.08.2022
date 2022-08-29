import PropTypes from 'prop-types';
import Painting from '../Painting/Painting';

const PaintingList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            url={item.url}
            title={item.title}
            author={item.author.tag}
            profileUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
};

PaintingList.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};

export default PaintingList;
