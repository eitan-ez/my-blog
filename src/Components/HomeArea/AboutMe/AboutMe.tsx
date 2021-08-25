import { NavLink } from "react-router-dom";
import "./AboutMe.scss";

function AboutMe(): JSX.Element {
    return (
        <div className="AboutMe" dir='rtl'>
			אז מי אני?
            שמי איתן ובניתי את הבלוג הזה בעיקר לצורך הדגמת יכולות טכניות, למרות שאם כבר כתבתי אז מוזמנים גם לקרוא. האתר סטטי, כתוב בריאקט (TS)
            ואתם יכולים למצוא אותו&nbsp; 
            <a href="https://github.com/eitan-ez/my-blog">כאן</a>.
            להעלאה לרשת אני משתמש ב
            Firebase.
            <br />
            <br />
            במקור בניתי באק אנד בנוי על ג'אוה עם ספרינג בוט שמאוחסן על AWS. די מהר הבנתי שמדובר בדרך יקרה לתחזוקת שרתים כשאני יכול לעשות הכל בחינם אם אני רק אלך על אתר סטטי, אז הגענו למצב הנוכחי.
            <br/>
            לדברים נוספים מוזמנים 
            &nbsp;<NavLink to="/contact-me">ליצור קשר</NavLink>.
        

            

        </div>
    );
}

export default AboutMe;
