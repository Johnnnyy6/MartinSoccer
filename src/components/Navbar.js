import "./NavbarStyles.css";
import { Component } from "react";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">MH Coaching & Private Training</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <FontAwesomeIcon
            icon={this.state.clicked ? faTimes : faBars} // Use FontAwesome icons
            className="fa-icon" // Add a class name for styling if needed
          />
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
