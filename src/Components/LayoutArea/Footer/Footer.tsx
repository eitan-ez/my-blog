import { useState } from "react";
import "./Footer.css";

function Footer(): JSX.Element {

    const [date, setDate] = useState(null);

    return (
        <div className="Footer">
			&#169; איתן עציון {date}
        </div>
    );
}

export default Footer;
