import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavItems = (
    <>
      <li><Link to="/" className="font-bold">Home</Link></li>
      <li><Link to="/about" className="font-bold">About</Link></li>
      <li><Link to="/blog" className="font-bold">Blog</Link></li>
      <li><Link to="/services" className="font-bold">All Toys</Link></li>
      <li><Link to="/booking" className="font-bold">My Toys</Link></li>
      <li><Link to="/booking" className="font-bold">Add A Toy</Link></li>
    </>
  );

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-3 mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           {NavItems}
          </ul>
        </div>
        <Link to="/" className=" w-14 md:w-16">
          <img src="https://i.ibb.co/98q6Fq5/robot-logo-on-bar.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {NavItems}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn btn-outline btn-error">Log In</Link>
      </div>
    </div>
    );
};

export default Navbar;