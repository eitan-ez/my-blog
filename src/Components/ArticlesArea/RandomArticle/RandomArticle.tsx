import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import allArticles from "../../../Components/ArticlesArea/ArticlesList/AllArticles";

interface randomArticleProps extends RouteComponentProps {}


class RandomArticle extends Component<randomArticleProps> {

    public constructor(props: randomArticleProps) {
        super(props);
    }

    public async componentDidMount() {
        const random = Math.floor(Math.random() * allArticles.length);
        this.props.history.push("/articles/" + allArticles[random].urlHeader);
    }

    public render(): JSX.Element {
        return (<> </>);
    }
}

export default RandomArticle;
