import { NavLink} from "react-router-dom";
import logo from "../../../Assets/Images/logo.png"
import "./Header.scss";

function Header(): JSX.Element {

  return (
    <div className="Header">
      <NavLink to="/home" className="mainHeader">
        <img src={logo} alt="logo"/>
      </NavLink>
      <div className="HeaderMenu">
        <NavLink to="/all-articles">כל המאמרים</NavLink>
        <NavLink to="/about-me">עלי</NavLink>
        <NavLink to="/random">מאמר אקראי</NavLink>
        <NavLink to="/contact-me">צרו קשר</NavLink>
      </div>
    </div>
  );
}

export default Header;
