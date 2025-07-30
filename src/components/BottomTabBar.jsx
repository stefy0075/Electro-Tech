import { useState, useEffect } from 'react';
import {
  FiHome,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
  FiChevronRight,
} from 'react-icons/fi';

const BottomTabBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const API_URL = `${
          import.meta.env.VITE_API_BASE_URL
        }/api/products/categories`;

        const response = await fetch(API_URL);
        const result = await response.json();
        if (result.success && result.data && result.data.categories) {
          setCategories(result.data.categories);
        } else {
          throw new Error('Formato de respuesta inesperado');
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('No se pudieron cargar las categorías');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Format category name for display
  const formatCategoryName = (category) => {
    return category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  };

  // Items de la barra inferior
  const tabItems = [
    { icon: <FiHome size={20} />, label: 'Inicio', href: '/' },
    { icon: <FiSearch size={20} />, label: 'Buscar', href: '/search' },
    {
      icon: <FiMenu size={20} />,
      label: 'Categorías',
      onClick: () => setShowMenu(true),
    },
    {
      icon: (
        <>
          <FiShoppingBag size={20} />
          <span className="absolute -top-1 -right-3 bg-secondary text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </>
      ),
      label: 'Carrito',
      href: '/cart',
    },
    { icon: <FiUser size={20} />, label: 'Cuenta', href: '/account' },
  ];

  return (
    <>
      {/* Menú de categorías móvil */}
      {showMenu && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowMenu(false)}
          />

          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl z-50 animate-slide-up max-h-[70vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 flex justify-between items-center border-b">
              <h3 className="text-lg font-bold text-primary">Categorías</h3>
              <button
                onClick={() => setShowMenu(false)}
                className="text-gray-500 hover:text-primary"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="p-4 space-y-3">
              {loading ? (
                <div className="flex justify-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : error ? (
                <div className="text-red-500 text-center py-4">{error}</div>
              ) : (
                <>
                  <a
                    href="/"
                    className="flex items-center justify-between py-3 px-4 text-primary font-medium hover:bg-gray-100 rounded-lg transition"
                  >
                    <span>Inicio</span>
                    <FiChevronRight />
                  </a>

                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href={`/category/${category}`}
                      className="flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition"
                    >
                      <span>{formatCategoryName(category)}</span>
                      <FiChevronRight />
                    </a>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Barra inferior */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
        <div className="flex justify-around items-center py-2">
          {tabItems.map((item, index) => (
            <div key={index} className="flex-1 flex justify-center">
              {item.href ? (
                <a
                  href={item.href}
                  className="flex flex-col items-center text-primary p-2 relative"
                >
                  {item.icon}
                  <span className="text-xs mt-1">{item.label}</span>
                </a>
              ) : (
                <button
                  onClick={item.onClick}
                  className="flex flex-col items-center text-primary p-2 w-full"
                >
                  {item.icon}
                  <span className="text-xs mt-1">{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BottomTabBar;
