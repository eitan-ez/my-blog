import { NavLink } from "react-router-dom";
import "./Page404.scss";
import OhNo from "./OhNo.jpg"

function Page404(): JSX.Element {
    return (
        <div className="Page404">
			העמוד לא קיים :(
            אפשר במקום לנסות לקרוא &nbsp;
            <NavLink to="/random">מאמר אקראי</NavLink>
            <br/>
            <img src={OhNo} alt="Oh No" />
        </div>
    );
}

export default Page404;
