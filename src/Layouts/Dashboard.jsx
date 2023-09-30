
import {  NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import useSeller from "../Hook/useSeller";

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isSeller] = useSeller()

  console.log(isAdmin);
  return (
    <div>
      <div className="drawer md:drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer"
            className="btn btn-info drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-indigo-400 text-base-content">
            {/* Sidebar content here */}
            <div className=" my-6">
              <h1 className="text-4xl font-semibold flex items-center gap-2">
                RoboZone 
              </h1>
              
            </div>
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/">
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addToy">
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myToy">
                    My Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUser">
                    Manage Users
                  </NavLink>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <NavLink to="/">
                  Seller Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myItems">
                    My Items
                  </NavLink>
                </li>
              </>
            )}
            {!isAdmin && !isSeller &&(
              <>
                {/* <li>
                  <Link>
                    User Home
                  </Link>
                </li>
                <li>
                  <Link>
                    Selected Items
                  </Link>
                </li>
                <li>
                  <Link>
                    Add Review
                  </Link>
                </li> */}
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                Home Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
