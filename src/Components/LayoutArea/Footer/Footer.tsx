import { useState } from "react";
import "./Footer.css";

function Footer(): JSX.Element {

    const [date, setDate] = useState(null);
    // setDate(Date);

    return (
        <div className="Footer">
			&#169; איתן עציון {date}
        </div>
    );
}

export default Footer;
