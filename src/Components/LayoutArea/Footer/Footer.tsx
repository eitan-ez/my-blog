import { useEffect } from "react";
import { useState } from "react";
import "./Footer.css";

function Footer(): JSX.Element {

    const [date, setDate] = useState("");

    useEffect(() => {
        const now = new Date().getFullYear().toString();
        setDate(now);
    },[])

    return (
        <div className="Footer">
            &#169; איתן עציון {date}
        </div>
    );
}

export default Footer;
