import TangledPic from "./TangledPic.jpg";

function Tangled(): JSX.Element {
    return (
        <div className="Article">
            <h2>שירי דיסני – Tangled (פלונטר. להלן: רפונזל)</h2>
            <div className="articleBody">
                <p>
                    לאחר הפסקה ארוכה המדור חוזר באופן חד פעמי לטובת ניתוח של השירים בסרט
                    רפונזל. בסרט יש שירים, אבל נתחיל ממה שאין בו: היצמדות לתבנית. דיסני זנחו
                    את השירים בתבנית המוכרת ששרטטנו כאן בעבר ועברו לתבנית בה הדמויות הרבה
                    פחות שרות. בסרט יש רק שלושה שירים מלאים שהדמויות שרות [1], כל שאר השירים או
                    נחתכו (שיר הפתיחה הוחלף בקריין לדוגמה), או קוצרו מאוד (שיר היציאה מהמגדל
                    לדוגמה), או מושרים על ידי זמר בלתי נראה (שיר הנושא). הניחוש שלי לסיבה
                    הוא ניסיון לשמור על רמת העניין בקרב ילדים כיום – כולנו יודעים שהשירים הם
                    הקטעים שמעממים ילדים, קיצור שלהם עוזר לשמור את רמת העניין גבוהה בקרב קהל
                    היעד.
                </p>
                <p>ולמה שכן יש בסרט: </p>
                <p>
                    קודם כל יש פה קול כחלק מרכזי בעלילה. השיר שצריך לשיר כדי להפעיל את
                    תכונותיו הקסומות של השיער משחק בעצמו תפקיד, בצורה דומה לדרך בה בבת הים
                    הקטנה הקול של אריאל משחק תפקיד מרכזי בסרט. את השיר שרות דמויות שונות
                    בסרט ומדי פעם המנגינה חוזרת ומזכירה לנו את השיר [2].
                </p>
                <p>
                    דמיון נוסף לבת הים הקטנה הוא ברצון הנבלה [3]– גם פה הנבל מציגה את עצמה
                    כרוצָה בטובת הגיבורה [4] ולכן השיר שלה מופנה לגיבורה ומנסה לשכנע אותה לבטוח
                    בה. היא גם מצליחה, עד שקורה מהפך שמגלה את טבעה האמיתי.
                </p>
                <p>
                    שיר דמויות המשנה הוא הקטע ההומוריסטי והסרט הזה לא יוצא דופן, אולי זו
                    הסיבה שהוא הושאר במלואו על כנו – ילדים משתעממים מרוב השירים, אבל את השיר
                    הזה הם דווקא אוהבים.
                </p>
                <p>
                    שיר הנושא הוא הקטע בו הגיבורים שלנו מתאהבים, או מבינים שהם כבר מאוהבים
                    וגם פה הסרט לא יוצא דופן. ההבדל הוא שהם לא שרים בעצמם את השיר (חוץ משתי
                    השורות האחרונות) אלא מבצעים את הקליפ בזמן שהשיר מושמע ברקע. למה? האמת
                    שאין לי מושג, היה די מתבקש שהם ישירו בעצמם. בחירה שגויה של דיסני בעיני.
                </p>
                <p>
                    חוץ מזה ויתרו על כל השירים המתבקשים (הכניסה לעיר של זוג המאוהבים שלנו
                    לדוגמה) וקיבלנו במקומם קטעים אינסטרומנטליים, מה שמשווה לסרט פחות אופי של
                    מחזמר בו הדמויות שרות כשיש להם רגשות עזים ויותר אופי של סרט בו אנחנו
                    שומעים תזמורת בלתי נראית, מגמה כללית של דיסני בשנים האחרונות שמשתלבת עם
                    המקום הכללי בו תעשיית האנימציה נמצאת.
                </p>
            </div>
            <img src={TangledPic} alt="טבלת החלוקה לשירים של דיסני"/>
            <ul className="articleReferences">
                <li>Mother Knows Best, When Will My Life Begin, I've Got A Dream</li>
                <li>לא אכתוב כאן את כל המופעים שלו, תצטרכו לצפות בעצמכם בסרט כדי לגלות. לא חשבתם שאעשה לכם את כל העבודה, נכון?</li>
                <li>ככה אומרים "נבל" בנקבה, שלחתי שאילתה לאקדמיה בנושא</li>
                <li>חייבים למצוא פתרון לקטע הזה של זכר ונקבה (ועל הדרך תרגום נורמלי לprotagonist)</li>
            </ul>
        </div>
    );
}

export default Tangled;
