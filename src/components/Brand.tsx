import logo from "../assets/images/project-soul-logo.webp";

const Brand = () => {
  return (
    <h1 className="col-span-2 flex justify-center items-center font-bold text-sky-50">
      <a className="hover:text-pink-400 transition duration-500" href="#">
        <div className="flex justify-center items-center">
          <img className="h-9" src={logo} alt="Project Soul Logo" />
          Project Soul Media
        </div>
      </a>
    </h1>
  );
};

export default Brand;
