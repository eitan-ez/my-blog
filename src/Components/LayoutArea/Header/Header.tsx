import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <div className="HeaderTitle">דברים אקראיים</div>
      <div className="HeaderMenu">
        <NavLink to="/about-me">עלי</NavLink>
        <NavLink to="/articles">כל המאמרים</NavLink>
        <NavLink to="/categories">קטגוריות</NavLink>
        <NavLink to="/random">מאמר אקראי</NavLink>
      </div>
    </div>
  );
}

export default Header;
