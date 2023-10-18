import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // active route styling
  const activeLink =
    "text-donation-primary font-bold underline decoration-2 underline-offset-4";

  // navbar routes
  const navLinks = (
    <div className="text-brand-primary opacity-80 flex flex-col lg:flex-row gap-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : "text-white")}
      >
        HOME
      </NavLink>
      <NavLink
        to="/add-product"
        className={({ isActive }) => (isActive ? activeLink : "text-white")}
      >
        ADD PRODUCT
      </NavLink>
      <NavLink
        to="/my-cart"
        className={({ isActive }) => (isActive ? activeLink : "text-white")}
      >
        MY CART
      </NavLink>
    </div>
  );

  return (
    <div data-aos="fade-down" className="navbar bg-black px-4 fixed z-50">
      <div className="navbar-start">
        <details className="dropdown duration-200 lg:hidden">
          <summary className="m-1 btn glass group">
            <GiHamburgerMenu className="text-2xl text-white opacity-80 group-hover:text-black"></GiHamburgerMenu>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-black w-52">
            {navLinks}
          </ul>
        </details>
        <div className="flex justify-center items-center px-4 gap-2">
          <img
            className="h-10 rounded-full w-10 bg-brand-primary hidden md:flex"
            src="./logo.svg"
            alt="logo"
          />
          <Link to='/' className="btn btn-ghost text-white opacity-80 normal-case text-xl font-orbitron tracking-widest px-2">
            NE<span className="text-brand-primary">X</span>US
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex gap-2 lg:gap-6">
        <div className="btn glass group">
          <Link
            className="text-white opacity-80 group-hover:text-brand-primary"
            to="/auth"
          >
            LOG IN / REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
