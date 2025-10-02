import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-content">
          <h1 className="navbar-title">LiteNotes</h1>
          <div className="navbar-actions">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="icon" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;