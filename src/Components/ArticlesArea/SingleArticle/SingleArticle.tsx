import axios from "axios";
import { Typography } from "@material-ui/core";
import { Component } from "react";
import { RouteComponentProps } from "react-router";
import { ArticleModel } from "../../../Models/ArticleModel";
import { articlesDownloadedAction } from "../../../Redux/ArticlesState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import "./SingleArticle.scss";

interface RouteParams {
    articleHeader: string
}

interface SingleArticleProps extends RouteComponentProps<RouteParams> { }

interface SingleArticleState {
    article: ArticleModel
}

class SingleArticle extends Component<SingleArticleProps, SingleArticleState> {

    public constructor(props: SingleArticleProps) {
        super(props);
        this.state = {
            article: null
        };
    }

    public async componentDidMount() {
        const header = this.props.match.params.articleHeader;
        if (store.getState().articlesState.articles.length === 0) {
            const response = await axios.get<ArticleModel[]>(globals.urls.getAllArticles);
            store.dispatch(articlesDownloadedAction(response.data));
            const article = response.data.find(a => a.urlHeader === header);
            this.setState({ article: article });
        } else {
            const article = store.getState().articlesState.articles.find(a => a.urlHeader === header);
            this.setState({ article: article });
        }
    }

    public render(): JSX.Element {
        return (
            <div className="SingleArticle">
                <Typography align="center" display="block" variant="h2">
                    {this.state.article && this.state.article.header}
                </Typography>
                <p className="mainBody">
                    {this.state.article && this.state.article.paragraphs}
                </p>
                <p>
                    {this.state.article && this.state.article.references}
                </p>
            </div>
        );
    }
}

export default SingleArticle;
