import { Route, Switch } from "react-router";
import AddArticle from "../../AdminArea/AddArticle/AddArticle";
import Articles from "../../ArticlesArea/Articles/Articles";
import Home from "../../HomeArea/Home/Home";
import Layout from "../Layout/Layout";

function Routing(): JSX.Element {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/articles" component={Articles} exact />
        <Route path="/add-article" component={AddArticle} exact />


      </Switch>
    </div>
  );
}

export default Routing;
