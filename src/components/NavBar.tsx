import NavItem from "./NavItem";

const NavBar = () => {
  return (
    // <nav className="bg-sky-900 w-4/5">
    // <nav className="bg-red-900 col-span-3 flex flex-row justify-center items-center font-bold h-12">
    <nav className="col-span-7 flex justify-start items-center px-3 font-bold">
      <ul className="flex space-x-2">
        <NavItem href="#" text="Inicio" />
        <NavItem href="#" text="Juegos" />
        <NavItem href="#" text="Bandas Sonoras" />
        {/* <NavItem /> */}
        {/* <NavItem /> */}
      </ul>
    </nav>
  );
};

export default NavBar;
