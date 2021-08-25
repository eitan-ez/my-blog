import LikhtelekhPic from "./LikhtelekhPic.jpg";

function Likhtelekh(): JSX.Element {
  return (
    <div className="Article">
      <h2>איר קלײנע ליכטעלעך</h2>
      <div className="articleBody">
        <p>
          בתחילת המאה ה20 פירסם מוריס רוזנברג, משורר יידי ידוע, שיר באידיש בשם
          "איר קליינע ליכטעלעך", שיר לחנוכה שנזכר בערגה בימים בהם לישראל היתה
          ממלכה ותוהה בלשון עדינה וכואבת מה צופן העתיד.
        </p>
        <p>
          עברו הימים והשיר, בתור אחד השירים המוכרים ביותר לחנוכה, תורגם לעברית
          בידי ראובן גרוסמן בשם "נרותיי הזעירים" [1]. מכיוון שראובן גרוסמן היה
          ציוני אדוק והתרגום בוצע לאחר הקמת מדינת ישראל, גרוסמן שינה את כל
          הקטעים העדינים בשיר שדיברו על געגוע וכאב לקטעים הקוראים לעליה לישראל
          וכיבושה, לאור התקופה שיצאה נגד "היהודי הגלותי".
        </p>
        <p>
          מאחר [2] שאני מעדיף בהרבה את המודל העדין של היהודי רציתי להציג תרגום
          מחודש לשיר היידי, תרגום נאמן למקור. אני אומר רציתי, בגלל שניסיתי
          להוציא תחת ידי תרגום שאני אהיה מרוצה ממנו, באותו סגנון של גרוסמן, אבל
          אני לא מרגיש שהוצאתי משהו מדויק. בכל מקרה אני מפרסם פה את ניסיוני לצד
          תרגום גרוסמן, בתקוה שיעביר משהו מתחושת המקור.
        </p>
        <p>
          שני הבתים הראשונים של גרוסמן נאמנים למקור פחות או יותר ולכן אני נוגע
          רק בבבית האחרון בשיר [3].
        </p>
      </div>
      <img src={LikhtelekhPic} className="articleImg" alt="תרגום השיר"/>
      <ul className="articleReferences">
        <li>
          לשיר יצאו עוד הרבה תרגומים, כמעט כולם הלכו לכיוון שהלך בו גרוסמן.
        </li>
        <li>כידוע לכל מי שמכיר אותי irl.</li>
        <li>
          גרוסמן תירגם גם בית נוסף, שלא קיים במקור ונוסף בגרסאות מאוחרות יותר.
          תרגומו לבית הנוסף:
          <br />
          וּגְדֻלָּה הָיְתָה לְךָ, וַתִּכּוֹן הַמַּמְלָכָה, וַתִּשָּׂא הָרֹאשׁ,
          וַתִּשָּׂא הָרֹאשׁ. קוּם, בֵּיתְךָ שֵׁנִית קוֹמֵם וְחַדֵּשׁ מִבְצָר
          שׁוֹמֵם! קוּם, עֲלֵה וּכְבֹשׁ! קוּם, עֲלֵה וּכְבֹשׁ!.
        </li>
      </ul>
    </div>
  );
}

export default Likhtelekh;
