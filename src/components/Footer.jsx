const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold text-lg mb-4 text-secondary">
                Categorías
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-secondary">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/notebooks" className="hover:text-secondary">
                    Notebooks
                  </a>
                </li>
                <li>
                  <a href="/climatizacion" className="hover:text-secondary">
                    Climatización
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-secondary">Ayuda</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/contacto" className="hover:text-secondary">
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="/preguntas-frecuentes"
                    className="hover:text-secondary"
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-secondary">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/terminos" className="hover:text-secondary">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="/privacidad" className="hover:text-secondary">
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
            © {new Date().getFullYear()} ElectroTech - Todos los derechos
            reservados
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
