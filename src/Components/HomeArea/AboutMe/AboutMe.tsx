import { NavLink } from "react-router-dom";
import "./AboutMe.scss";

function AboutMe(): JSX.Element {
    return (
        <div className="AboutMe" dir='rtl'>
			אז מי אני?
            שמי איתן ובניתי את הבלוג הזה בעיקר לצורך הדגמת יכולות טכניות, למרות שאם כבר כתבתי אז מוזמנים גם לקרוא. הפרונט אנד כתוב בריאקט (TS)
            ואתם יכולים למצוא אותו&nbsp; 
            <a href="https://github.com/eitan-ez/my-blog">כאן</a>.
            להעלאה לרשת אני משתמש ב
            gitPages.
            <br />
            <br />

            הבאק אנד בנוי על ג'אוה עם ספרינג בוט ומאוחסן על AWS.
            לצורך אבטחת מידע הגיט פרטי, אם אתם רוצים לראות אותו כדי להתרשם מוזמנים
            &nbsp;<NavLink to="/contact-me">ליצור קשר</NavLink>.

            

        </div>
    );
}

export default AboutMe;
