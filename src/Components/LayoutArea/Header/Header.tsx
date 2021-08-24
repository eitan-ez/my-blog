import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <h1>דברים אקראיים</h1>
      <h4>הבלוג של איתן עציון</h4>
      <div className="HeaderMenu">
        <NavLink to="/about-me">עלי</NavLink>
        <NavLink to="/articles">מאמרים לפי קטגוריות</NavLink>
        <NavLink to="/random">מאמר אקראי</NavLink>
        <NavLink to="/contact-me">צרו קשר</NavLink>
      </div>
    </div>
  );
}

export default Header;
