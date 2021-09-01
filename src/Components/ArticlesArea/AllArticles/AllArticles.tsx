import { NavLink } from "react-router-dom";
import allArticles from "../ArticlesList/AllArticles";
import "./AllArticles.scss";

function AllArticles(): JSX.Element {
    return (
        <div className="AllArticles">
            שלום לכולם וברוכים הבאים לבלוג הצנוע שלי. אם תרצו לקרוא בקצרה על הבלוג מוזמנים ל
            <NavLink to="about-me">כאן</NavLink>.
            אם אתם מעדיפים פשוט לקרוא פוסט (הבחירה הנכונה אגב) מוזמנים לבחור פוסט מהרשימה למטה או מזו שבצד. תהנו!
            <br />
            <br />
            <br />
            <br />
            {allArticles.map((a) =>
                <div key={a.id} className="post">
                    <NavLink to={"articles/" + a.urlHeader}><h4>{a.header}</h4>{a.shortDescription}</NavLink>
                    <br />
                </div>
            )}

        </div>
    );
}

export default AllArticles;
