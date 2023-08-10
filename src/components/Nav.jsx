import Logo from "../assets/Logo.png";
const Nav = () => {
  return (
    <>
      <div className=" shadow-lg w-full sticky z-50 top-0 left-0 h-[5em] md:h-[7.5em]">

        <div className=" flex items-center justify-center md:justify-start	 bg-primary h-[4em] md:h-[5.5em]">
        <img className="h-[85%] md:ml-[3.5em]" src={Logo} alt="Logo" />
        </div>


        <div className="shadow-lg w-full bg-secondary h-[1em] md:h-[2em]"></div>
      </div>
    </>
  );
};

export default Nav;
