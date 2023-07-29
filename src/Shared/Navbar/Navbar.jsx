import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const NavItems = (
    <>
      <li>
        <Link to="/" className="font-semibold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="font-semibold">
          About
        </Link>
      </li>
      <li>
        <Link to="/blog" className="font-semibold">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/allToy" className="font-semibold">
          All Toys
        </Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/myToy" className="font-semibold">
              My Toys
            </Link>
          </li>
          <li>
            <Link to="/addToy" className="font-semibold">
              Add Toy
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="font-semibold">
              Dashboard
            </Link>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );

  const handleLogOut = () => {
    logOutUser()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100 static shadow-lg px-3 mb-5">
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
        <Link to="/" className="">
          <img src="https://i.ibb.co/51DyF86/logo.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            </div>

            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">{user?.displayName}</Link>
              </li>
              <li>
                <Link onClick={handleLogOut}>Log Out</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <Link to="/login" className="btn btn-warning">
              Login
            </Link>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
