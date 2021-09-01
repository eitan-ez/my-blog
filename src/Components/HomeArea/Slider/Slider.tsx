import "./Slider.scss";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import MarcinPrzybyłowiczPic from "../../ArticlesArea/ArticlesList/MarcinPrzybyłowicz/MarcinPrzybyłowiczPic.jpg";
import DisneySongsTable from "../../ArticlesArea/ArticlesList/DisneySongs1/DisneySongsTable.jpg"
import Marx_Brothers_1948 from "../../ArticlesArea/ArticlesList/MarxBros/Marx_Brothers_1948.jpg"
import { NavLink, RouteComponentProps } from "react-router-dom";
import { Component, createRef } from "react";
import ReactImageGallery from "react-image-gallery";

interface SliderProps extends RouteComponentProps {}

class Slider extends Component<SliderProps> {
  private myRef;

  public constructor(props: SliderProps) {
    super(props);
    this.myRef = createRef<ReactImageGallery>();
  }

  componentDidMount() {
    console.log(this.myRef.current.getCurrentIndex());
  }

  public render(): JSX.Element {
    // const history = useHistory();
    const SliderImages: ReactImageGalleryItem[] = [
      {
        original: MarcinPrzybyłowiczPic,
        description:
          "המלחין שפותח את המצעד שלנו הוא גם המלחין הצעיר ביותר (נולד ב1985).הפולני בעל השם הקליט מצא עבודה מיד אחרי שסיים את התואר בחברת משחקים פולנית נישתית למדי – CD Project Red",
        thumbnailTitle: "/articles/marcin-przybyłowicz",
      },
      {
        original: Marx_Brothers_1948,
        description: "מכתבו של גראוצ'ו מרקס לאחים וורנר לאחים וורנר על זכויות יוצרים. המכתב מוצלח כל כך שהחלטתי לתרגם אותו לעברית במלואו והרי הוא בפניכם."
      },
      {
        original: DisneySongsTable,
        description: "אחרי תקופה מסוימת של כישלונות בשנות השמונים דיסני חשבו לוותר על יצירת סרטים מצוירים. לאחר רצף של כמה גלגולים חטיבת הסרטים נתנה לאלן מנקן והווארד אשמן יד חופשית ליצור סרט כמו שהם רוצים כסוג של ניסיון אחרון. השניים החליטו ליצור סרטים בצורת מחזות ברודווי, מחזות עם תבנית שירים קבועה מראש."
      },
    ];

    function onImageClick(index: number): string {
      switch (index) {
        case 0:
          return "/articles/marcin-przybyłowicz";
        case 2:
          return "/articles/disney-songs-foreword";
        case 1:
          return "/articles/the-marx-bros";
        default:
          return null;
      }
    }

    return (
      <div className="Slider">
        <ImageGallery
          autoPlay={true}
          slideInterval={6000}
          showIndex={true}
          showBullets={true}
          isRTL={true}
          showPlayButton={false}
          showFullscreenButton={false}
          ref={this.myRef}
          items={SliderImages}
          onClick={() => {
            <NavLink to={onImageClick(this.myRef.current.getCurrentIndex())}></NavLink>
            this.props.history.push(
              onImageClick(this.myRef.current.getCurrentIndex())
            );
          }}
        />
      </div>
    );
  }
}

export default Slider;
