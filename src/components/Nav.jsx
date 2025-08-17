import Logo from '../assets/Logo.png';
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi';
import { useEffect, useState, useCallback } from 'react';

const Nav = () => {
  const [showNav] = useState(true);
  const [categories, setCategories] = useState([]);

  const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchCategories = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/api/products/categories`);
      const result = await response.json();

      if (result.success && result.data && result.data.categories) {
        setCategories(result.data.categories);
        console.log(result.data.categories);
      } else {
        throw new Error('Formato de respuesta inesperado');
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  }, [BASE_API_URL]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Función para formatear el nombre de la categoría
  const formatCategoryName = (category) => {
    return category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <>
      {/* Navbar Superior */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center md:h-20 border-b-2 border-secondary md:border-none">
            <img src={Logo} alt="ElectroTech" className="m-2 h-20 md:h-12" />
          </div>

          {/* Contenido que solo aparece en desktop */}
          {showNav && (
            <div className="hidden md:flex items-center space-x-6">
              {/* Barra de Búsqueda */}
              <div className="py-3">
                <form className="relative max-w-3xl mx-auto">
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="w-full py-2 px-4 rounded-lg focus:outline-none"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary"
                  >
                    <FiSearch size={20} />
                  </button>
                </form>
              </div>

              {/* Acciones */}
              <a
                href="/login"
                className="flex items-center hover:text-secondary"
              >
                <FiUser className="mr-1" /> Ingresá / Registrate
              </a>
              <a
                href="/cart"
                className="flex items-center hover:text-secondary relative"
              >
                <FiShoppingBag className="mr-1" />
                Carrito{' '}
                <span className="ml-1 bg-secondary text-primary rounded-full px-2 py-0.5 text-xs">
                  0
                </span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Menú de Categorías */}
      <div className="bg-secondary text-white hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 py-3">
            <a href="/" className="hover:text-primary font-medium">
              Inicio
            </a>
            {categories.map((category, index) => (
              <a
                key={index}
                href={`/category/${category}`}
                className="hover:text-primary font-medium text-lg"
              >
                {formatCategoryName(category)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
