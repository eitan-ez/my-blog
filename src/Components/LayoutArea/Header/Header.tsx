import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <NavLink to="/home" className="mainHeader">
      <h1>דברים אקראיים</h1>
      </NavLink>
      <h4>הבלוג של איתן עציון</h4>
      <div className="HeaderMenu">
        <NavLink to="/home">דף ראשי</NavLink>
        <NavLink to="/about-me">עלי</NavLink>
        <NavLink to="/random">מאמר אקראי</NavLink>
        <NavLink to="/contact-me">צרו קשר</NavLink>
      </div>
    </div>
  );
}

export default Header;
