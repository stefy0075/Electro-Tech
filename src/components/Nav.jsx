import Logo from '../assets/Logo.png';
import { useState } from 'react';
import { FiSearch, FiUser, FiShoppingBag, FiChevronDown } from 'react-icons/fi';

const Nav = () => {
  const [showNav] = useState(true);
  return (
    <>
      {/* Navbar Superior */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center md:h-20 border-b-2 border-secondary md:border-none">
            <img src={Logo} alt="ElectroTech" className=" m-2 h-20 md:h-12" />
          </div>

          {/* Contenido que solo aparece en desktop */}
          {showNav && (
            <div className="hidden md:flex items-center space-x-6">
              {/* Barra de Búsqueda */}
              <div className="py-3 ">
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
            <a href="/" className="hover:text-secondary font-medium">
              Inicio
            </a>
            <div className="group relative">
              <button className="hover:text-secondary font-medium flex items-center">
                Notebooks <FiChevronDown className="ml-1" />
              </button>
              <div className="absolute z-10 left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 hidden group-hover:block border border-secondary">
                <a
                  href="/notebooks/gamer"
                  className="block px-4 py-2 text-primary hover:bg-gray-100"
                >
                  Gamer
                </a>
                <a
                  href="/notebooks/ultrabooks"
                  className="block px-4 py-2 text-primary hover:bg-gray-100"
                >
                  Ultrabooks
                </a>
              </div>
            </div>
            <div className="group relative">
              <button className="hover:text-secondary font-medium flex items-center">
                Climatización <FiChevronDown className="ml-1" />
              </button>
              <div className="absolute z-10 left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 hidden group-hover:block border border-secondary">
                <a
                  href="/climatizacion/portatiles"
                  className="block px-4 py-2 text-primary hover:bg-gray-100"
                >
                  Portátiles
                </a>
                <a
                  href="/climatizacion/aires-acondicionados"
                  className="block px-4 py-2 text-primary hover:bg-gray-100"
                >
                  Aires Acondicionados
                </a>
              </div>
            </div>
            <div className="group relative">
              <button className="hover:text-secondary font-medium flex items-center">
                Climatización <FiChevronDown className="ml-1" />
              </button>
              <div className="absolute z-10 left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 hidden group-hover:block border border-secondary">
                <a
                  href="/climatizacion/portatiles"
                  className="block px-4 py-2 text-primary hover:bg-gray-100"
                >
                  Portátiles
                </a>
                <a
                  href="/climatizacion/aires-acondicionados"
                  className="block px-4 py-2 text-primary hover:bg-gray-100"
                >
                  Aires Acondicionados
                </a>
              </div>
            </div>
            <div className="group relative">
              <button className="hover:text-secondary font-medium flex items-center">
                Notebooks <FiChevronDown className="ml-1" />
              </button>
              <div className="absolute z-10 left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 hidden group-hover:block border border-secondary">
                <a
                  href="/notebooks/gamer"
                  className="block px-4 py-2 text-primary hover:bg-gray-100"
                >
                  Gamer
                </a>
                <a
                  href="/notebooks/ultrabooks"
                  className="block px-4 py-2 text-primary hover:bg-gray-100"
                >
                  Ultrabooks
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
