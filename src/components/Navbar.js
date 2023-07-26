import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <Link to={"/"} className="p-4">
          Home
        </Link>
        <Link to={"/company"} className="p-4">
          Company
        </Link>

        <Link to={"/About"} className="p-4">
          About
        </Link>
        <Link to={"/Contact"} className="p-4">
          Contact
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {toggleNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          toggleNav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className=" uppercase p-4">
          <Link to={"/"} className="p-4 border-b border-gray-600 block">
            Home
          </Link>
          <Link to={"/company"} className="p-4 border-b border-gray-600 block ">
            Company
          </Link>
          <Link to={"/About"} className="p-4 border-b border-gray-600 block">
            About
          </Link>
          <Link to={"/Contact"} className="p-4 block">
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
