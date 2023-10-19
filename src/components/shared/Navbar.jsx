import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import { Divide as Hamburger } from 'hamburger-react'

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

  // menu animation
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-aos="fade-down" className="navbar bg-black/50 px-4 fixed z-50">
      <div className="navbar-start">
        <details className="dropdown duration-200 lg:hidden">
          <summary className="m-1 btn glass group p-0 hover:bg-white/40" onClick={() => setIsOpen((isOpen) => !isOpen)}>
          <Hamburger toggled={isOpen} size={25} color="#d0d0d0" />
          </summary>
          <motion.ul
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="p-4 -ml-4 my-2 h-screen overflow-hidden shadow-2xl menu dropdown-content z-[1] bg-black/95 w-72"
          >
            {navLinks}
          </motion.ul>
        </details>
        <div className="flex justify-center items-center px-4 gap-2">
          <img
            className="h-10 rounded-full w-10 bg-brand-primary hidden md:flex"
            src="/logo.svg"
            alt="logo"
          />
          <Link
            to="/"
            className="btn btn-ghost text-white opacity-80 normal-case text-xl font-orbitron tracking-widest px-2"
          >
            NE<span className="text-brand-primary">X</span>US
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex gap-2 lg:gap-6">
          <Link className="group"
            to="/auth"
          >
        <div className="btn glass text-white opacity-80 group-hover:text-brand-primary group-hover:bg-white">
            LOG IN / REGISTER
        </div>
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
