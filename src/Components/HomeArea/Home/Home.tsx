import { Component } from "react";
import { NavLink } from "react-router-dom";
import allArticles from "../../ArticlesArea/ArticlesList/AllArticles";
import "./Home.scss";


class Home extends Component<{}> {

    public constructor(props: {}) {
        super(props);
    }


    public render(): JSX.Element {
        // gets the date 2 years ago
        // const now = new Date();
        // const myDate = new Date(now.getFullYear() - 2);



        return (
            <div className="Home">
                שלום לכולם וברוכים הבאים לבלוג הצנוע שלי. אם תרצו לקרוא בקצרה על הבלוג מוזמנים ל
                <NavLink to="about-me">כאן</NavLink>.
                 אם אתם מעדיפים פשוט לקרוא פוסט (הבחירה הנכונה אגב) מוזמנים לבחור פוסט מהרשימה למטה או מזו שבצד. תהנו!
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                {allArticles.map((a) =>
                    <div key={a.id}>
                        <NavLink to={"articles/"+ a.urlHeader}><h4>{a.header}</h4>{a.shortDescription}</NavLink>
                        <br/>
                        <br/>
                    </div>
                )}
            </div>
        );
    }
}

export default Home;
