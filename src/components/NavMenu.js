import { NavLink, Outlet } from "react-router-dom";

function NavMenu() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li>
              <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="departments">Departments</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="employees">Employees</NavLink>
          </li>          
          <li className="nav-item">
            <NavLink className="nav-link" to="products">Products</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink className="nav-link" to="newcounter">Counter</NavLink>
          </li> 
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;
