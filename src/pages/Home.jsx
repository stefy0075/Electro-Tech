import { FiChevronRight } from 'react-icons/fi';
import { useEffect, useState, useCallback } from 'react';
import ProductCard from '../components/productcard';

const Home = () => {
  const [topSellers, setTopSellers] = useState([]);
  const [specialOffers, setSpecialOffers] = useState([]);
  const [cashDiscountProducts, setCashDiscountProducts] = useState([]);

  const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchProducts = useCallback(async () => {
    try {
      const featuredRes = await fetch(`${BASE_API_URL}/api/products/featured`);
      const featuredData = await featuredRes.json();
      setTopSellers(featuredData.slice(0, 8));

      const specialOffersRes = await fetch(
        `${BASE_API_URL}/api/products/specialOffers`
      );
      const specialOffersData = await specialOffersRes.json();
      setSpecialOffers(specialOffersData.slice(0, 8));

      const cashDiscountRes = await fetch(
        `${BASE_API_URL}/api/products/cashDiscount`
      );
      const cashDiscountData = await cashDiscountRes.json();
      setCashDiscountProducts(cashDiscountData.slice(0, 4));
    } catch (error) {
      console.error('Error al cargar productos', error);
    }
  }, [BASE_API_URL]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="bg-gray-50 pb-20">
      {/* Hero */}
      <div className="relative bg-primary text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Tecnología con las mejores ofertas
            </h1>
            <p className="text-lg md:text-xl mb-6">
              3% de descuento pagando en efectivo o transferencia
            </p>
            <button className="bg-secondary text-primary font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition">
              Ver ofertas <FiChevronRight className="inline ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Ofertas especiales */}
      <div className="bg-secondary bg-opacity-10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary">
              Ofertas especiales
            </h2>
            <a
              href="/ofertas"
              className="text-primary hover:text-secondary flex items-center"
            >
              Ver todas <FiChevronRight className="ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialOffers.map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Descuento en efectivo */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                3% OFF en efectivo
              </h2>
              <p className="mb-4">
                Seleccioná la opción &quot;PAGO A CONVENIR&quot; al finalizar tu
                compra.
              </p>
              <button className="bg-white text-primary font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition">
                Cómo funciona
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-2">
                {cashDiscountProducts.map((product) => (
                  <div
                    key={product._id || product.id}
                    className="bg-white bg-opacity-20 p-2 rounded"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-20 object-contain"
                    />
                    <p className="text-sm text-center mt-1 truncate">
                      {product.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lo más vendido */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Lo más vendido</h2>
          <a
            href="/mas-vendidos"
            className="text-primary hover:text-secondary flex items-center"
          >
            Ver todos <FiChevronRight className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topSellers.map((product) => (
            <ProductCard key={product._id || product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Recibí nuestras ofertas</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Suscribite a nuestro newsletter y enterate primero de los descuentos
            especiales.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-grow py-3 px-4 rounded-l-lg focus:outline-none text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-secondary text-primary font-bold py-3 px-6 rounded-r-lg hover:bg-opacity-90 transition"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
