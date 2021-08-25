import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import Antivirus from "../../ArticlesArea/ArticlesList/Antivirus/Antivirus";
import Azerbaijan from "../../ArticlesArea/ArticlesList/Azerbaijan/Azerbaijan";
import DeezerSpotify from "../../ArticlesArea/ArticlesList/DeezerSpotify/DeezerSpotify";
import DisneySongs1 from "../../ArticlesArea/ArticlesList/DisneySongs1/DisneySongs1";
import DisneySongs2 from "../../ArticlesArea/ArticlesList/DisneySongs2/DisneySongs2";
import DisneySongs3 from "../../ArticlesArea/ArticlesList/DisneySongs3/DisneySongs3";
import DisneySongs4 from "../../ArticlesArea/ArticlesList/DisneySongs4/DisneySongs4";
import Likhtelekh from "../../ArticlesArea/ArticlesList/Likhtelekh/Likhtelekh";
import MarcinPrzybyłowicz from "../../ArticlesArea/ArticlesList/MarcinPrzybyłowicz/MarcinPrzybyłowicz";
import MarxBros from "../../ArticlesArea/ArticlesList/MarxBros/MarxBros";
import NetCencor from "../../ArticlesArea/ArticlesList/NetCensor/NetCensor";
import SofðuUnga from "../../ArticlesArea/ArticlesList/SofðuUnga/SofðuUnga";
import Tangled from "../../ArticlesArea/ArticlesList/Tangled/Tangled";
import TrevorMoris from "../../ArticlesArea/ArticlesList/TrevorMoris/TrevorMoris";
import VideoChat from "../../ArticlesArea/ArticlesList/VideoChat/VideoChat";
import RandomArticle from "../../ArticlesArea/RandomArticle/RandomArticle";
import AboutMe from "../../HomeArea/AboutMe/AboutMe";
import Home from "../../HomeArea/Home/Home";
import ContactMe from "../../SharedArea/ContactMe/ContactMe";
import Page404 from "../../SharedArea/Page404/Page404";

function Routing(): JSX.Element {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/random" component={RandomArticle} exact />
        <Route path="/about-me" component={AboutMe} exact />
        <Route path="/contact-me" component={ContactMe} exact />

        <Route path="/articles/disney-tangled" component={Tangled} exact />
        <Route path="/articles/internet-censorship" component={NetCencor} exact />
        <Route path="/articles/deezer-spotify" component={DeezerSpotify} exact />
        <Route path="/articles/trevor-moris" component={TrevorMoris} exact />
        <Route path="/articles/marcin-przybyłowicz" component={MarcinPrzybyłowicz} exact />
        <Route path="/articles/likhtelekh" component={Likhtelekh} exact />
        <Route path="/articles/disney-songs-protagonist" component={DisneySongs2} exact />
        <Route path="/articles/disney-songs-foreword" component={DisneySongs1} exact />
        <Route path="/articles/disney-songs-villain" component={DisneySongs3} exact />
        <Route path="/articles/disney-songs-theme-song" component={DisneySongs4} exact />
        <Route path="/articles/video-chat-apps" component={VideoChat} exact />
        <Route path="/articles/azerbaijan" component={Azerbaijan} exact />
        <Route path="/articles/sofðu-unga-ástin-mín" component={SofðuUnga} exact />
        <Route path="/articles/the-marx-bros" component={MarxBros} exact />
        <Route path="/articles/antivirus" component={Antivirus} exact />

        <Redirect from="/" to="/home" exact />
        <Route component={Page404} />


      </Switch>
    </div>
  );
}

export default Routing;
