import { FiShoppingBag, FiStar } from 'react-icons/fi';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Badge de descuento */}
      {product.cashDiscount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          3% OFF en efectivo
        </div>
      )}

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain p-4"
      />

      <div className="p-4">
        <div className="flex items-center mb-1">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              className={`${
                i < Math.floor(product.rating)
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300'
              } w-4 h-4`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>

        <h3 className="font-medium mb-2 text-gray-800">{product.name}</h3>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">
              ${(product.price / 100).toLocaleString('es-AR')}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${(product.oldPrice / 100).toLocaleString('es-AR')}
              </span>
            )}
          </div>
          <button className="bg-secondary text-primary p-2 rounded-full hover:bg-opacity-80 transition">
            <FiShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    cashDiscount: PropTypes.bool,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
