import axios from "axios";
import { Component } from "react";
import { ArticleModel } from "../../../Models/ArticleModel";
import { articlesDownloadedAction } from "../../../Redux/ArticlesState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./Home.scss";

interface HomeState {
    articles: ArticleModel[];
}

class Home extends Component <{}, HomeState> {

    public constructor(props: {}) {
        super(props);
        this.state = { articles: [] }; // Without Redux
    }

    public async componentDidMount() {
        if (store.getState().articlesState.articles.length === 0) {
            try{
                const response = await axios.get<ArticleModel[]>(globals.urls.getAllArticles);
                store.dispatch(articlesDownloadedAction(response.data));
                this.setState ({articles: response.data})
                console.log(this.state.articles);
                console.log(store.getState().articlesState.articles);
            }catch (err){
                notify.error(err);
            }

        }
    }
    public render(): JSX.Element {
        return (
            <div className="Home">
				{this.state.articles.map(a => a.header)}
            </div>
        );
    }
}

export default Home;
