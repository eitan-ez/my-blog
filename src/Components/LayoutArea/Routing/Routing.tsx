import { Route, Switch } from "react-router";
import AddArticle from "../../AdminArea/AddArticle/AddArticle";
import AddCategory from "../../AdminArea/AddCategory/AddCategory";
import ByCategory from "../../ArticlesArea/ByCategory/ByCategory";
import RandomArticle from "../../ArticlesArea/RandomArticle/RandomArticle";
import SingleArticle from "../../ArticlesArea/SingleArticle/SingleArticle";
import Home from "../../HomeArea/Home/Home";

function Routing(): JSX.Element {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/articles" component={ByCategory} exact />
        <Route path="/articles/:articleHeader" component={SingleArticle} exact />
        <Route path="/random" component={RandomArticle} exact />
        <Route path="/add-article" component={AddArticle} exact />
        <Route path="/add-category" component={AddCategory} exact />


      </Switch>
    </div>
  );
}

export default Routing;
