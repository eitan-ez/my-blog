import { Component } from "react";
import MarcinPrzybyłowiczPic from "../../ArticlesArea/ArticlesList/MarcinPrzybyłowicz/MarcinPrzybyłowiczPic.jpg"
import DisneySongsTable from "../../ArticlesArea/ArticlesList/DisneySongs1/DisneySongsTable.jpg"
import Marx_Brothers_1948 from "../../ArticlesArea/ArticlesList/MarxBros/Marx_Brothers_1948.jpg"
import "./Home.scss";
import AllArticlesButton from "../AllArticlesButton/AllArticlesButton";
import { RouteComponentProps } from "react-router-dom";

interface HomeProps extends RouteComponentProps {}


class Home extends Component<HomeProps> {

    public constructor(props: HomeProps) {
        super(props);
    }


    public render(): JSX.Element {
        // gets the date 2 years ago
        // const now = new Date();
        // const myDate = new Date(now.getFullYear() - 2);



        return (
            <div className="Home">
                <div className="homeArticle" onClick={()=>this.props.history.push("/articles/marcin-przybyłowicz")}>
                    <div className="homeArticleText">
                        <h4>מצעד המלחינים – מרצ'ין פשיבילוביץ'</h4>
                        <p>המלחין שפותח את המצעד שלנו הוא גם המלחין הצעיר ביותר (נולד ב1985).<br /> הפולני בעל השם הקליט מצא עבודה מיד אחרי שסיים את התואר בחברת משחקים פולנית נישתית למדי – CD Project Red</p>
                    </div>
                    <img src={MarcinPrzybyłowiczPic} className="articleImg" alt="Marcin Przybyłowic by Solika27, CC BY-SA 4.0" />
                </div>

                <div className="homeArticle" onClick={()=>this.props.history.push("/articles/disney-songs-foreword")}>
                    <img src={DisneySongsTable} className="articleImg" alt="טבלת החלוקה לשירים של דיסני" />
                    <div className="homeArticleText">
                        <h4>שירי דיסני – רקע</h4>
                        <p>אחרי תקופה מסוימת של כישלונות בשנות השמונים
                            דיסני חשבו לוותר על יצירת סרטים מצוירים. לאחר רצף של כמה גלגולים חטיבת
                            הסרטים נתנה לאלן מנקן והווארד אשמן יד חופשית ליצור סרט כמו שהם רוצים
                            כסוג של ניסיון אחרון. השניים החליטו ליצור סרטים בצורת מחזות ברודווי,
                            מחזות עם תבנית שירים קבועה מראש</p>
                    </div>
                </div>

                <div className="homeArticle" onClick={()=>this.props.history.push("/articles/the-marx-bros")}>
                    <div className="homeArticleText">
                        <h4>גראוצ'ו מרקס וזכויות יוצרים</h4>
                        <p>
                            בשנת 1942 הוציאו אולפני האחים וורנר (Warner bros.) את אחת הקלאסיקות הקלונעיות המצליחות ביותר בהיסטוריה, "קזבלנקה", בכיכובם של אינגריד ברגמן והמפרי בוגרט. כשלוש שנים לאחר מכן נודע לאחים וורנר כי האחים מרקס (Marx bros), אחים בדרנים מהמפורסמים ביותר בתקופתם, החליטו להוציא סרט הומוריסטי שצוחק על סרטם שייקרא "לילות קזבלנקה". אולפני האחים וורנר לא תכננו לתת לתוכנית לעבור בשתיקה ושלחו מכתב משפטי מאיים לאחים מרקס המזהיר אותם מהפרת זכויות היוצרים ושימוש במילה "קזבלנקה" בכותרת הסרט. כתגובה לאיומם כתב גראוצ'ו מרקס, הידוע באחים, מכתב פומבי לאחים וורנר ואף שלח אותו לתקשורת. המכתב מוצלח כל כך שהחלטתי לתרגם אותו לעברית במלואו והרי הוא בפניכם
                        </p>
                    </div>
                    <img src={Marx_Brothers_1948} className="articleImg" alt="האחים מרקס ב1948" />
                </div>
                <div className="homeButton">
                    <AllArticlesButton />
                </div>
            </div >
        );
    }
}

export default Home;
