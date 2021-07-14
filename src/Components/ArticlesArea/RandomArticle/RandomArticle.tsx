import axios from "axios";
import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ArticleModel } from "../../../Models/ArticleModel";
import { articlesDownloadedAction } from "../../../Redux/ArticlesState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";

interface randomArticleProps extends RouteComponentProps {}


class RandomArticle extends Component<randomArticleProps> {

    public constructor(props: randomArticleProps) {
        super(props);
    }

    public async componentDidMount() {
        let articles: ArticleModel[];
        if (store.getState().articlesState.articles.length === 0) {
            const response = await axios.get<ArticleModel[]>(globals.urls.getAllArticles);
            articles = response.data;
            store.dispatch(articlesDownloadedAction(articles));
            this.setState({ articlesNumber: articles.length });
        } else {
            articles = store.getState().articlesState.articles;
            this.setState({ articlesNumber: articles.length });
        }

        const random = Math.floor(Math.random() * articles.length);

        this.props.history.push("/articles/" + articles[random].urlHeader);
    }

    public render(): JSX.Element {
        return (<> </>);
    }
}

export default RandomArticle;
