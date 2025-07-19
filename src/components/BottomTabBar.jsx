import { useState } from 'react';
import {
  FiHome,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
} from 'react-icons/fi';

const BottomTabBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Menú de categorías móvil */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setShowMenu(false)}
        >
          <div className="fixed bottom-16 left-0 right-0 bg-white p-4 rounded-t-lg shadow-lg z-50 animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-primary">Categorías</h3>
              <button
                onClick={() => setShowMenu(false)}
                className="text-gray-500"
              >
                <FiX size={20} />
              </button>
            </div>
            <div className="space-y-3">
              <a
                href="/"
                className="block py-2 px-2 text-primary hover:bg-gray-100 rounded"
              >
                Inicio
              </a>
              <div className="border-t border-gray-200 pt-3">
                <h4 className="font-medium text-primary mb-2">Notebooks</h4>
                <div className="pl-4 space-y-2">
                  <a
                    href="/notebooks/gamer"
                    className="block py-1 text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Gamer
                  </a>
                  <a
                    href="/notebooks/ultrabooks"
                    className="block py-1 text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Ultrabooks
                  </a>
                </div>
              </div>
              {/* Resto de las categorías... */}
            </div>
          </div>
        </div>
      )}

      {/* Barra inferior */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="flex justify-around items-center py-3">
          {/* Inicio */}
          <a href="/" className="flex flex-col items-center text-primary">
            <FiHome size={20} />
            <span className="text-xs mt-1">Inicio</span>
          </a>

          {/* Buscar */}
          <a href="/search" className="flex flex-col items-center text-primary">
            <FiSearch size={20} />
            <span className="text-xs mt-1">Buscar</span>
          </a>

          {/* Menú de categorías (reemplaza Oferta Efectivo) */}
          <button
            onClick={() => setShowMenu(true)}
            className="flex flex-col items-center text-primary"
          >
            <FiMenu size={20} />
            <span className="text-xs mt-1">Categorías</span>
          </button>

          {/* Carrito */}
          <a
            href="/cart"
            className="flex flex-col items-center text-primary relative"
          >
            <FiShoppingBag size={20} />
            <span className="absolute -top-1 -right-3 bg-secondary text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
            <span className="text-xs mt-1">Carrito</span>
          </a>

          {/* Cuenta */}
          <a
            href="/account"
            className="flex flex-col items-center text-primary"
          >
            <FiUser size={20} />
            <span className="text-xs mt-1">Cuenta</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default BottomTabBar;
