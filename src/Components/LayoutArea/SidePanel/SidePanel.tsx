import axios from "axios";
import { Component } from "react";
import { ArticleModel } from "../../../Models/ArticleModel";
import { articlesDownloadedAction } from "../../../Redux/ArticlesState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import "./SidePanel.scss";

interface SidePanelState {
	articlesHeaders: ArticleModel[]
}

class SidePanel extends Component<{}, SidePanelState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			articlesHeaders:[]
        };
    }

    public async componentDidMount() {
        if(store.getState().articlesState.articles.length === 0){
            const response = await axios.get<ArticleModel[]>(globals.urls.getAllArticles);
            store.dispatch(articlesDownloadedAction(response.data));
            this.setState ({articlesHeaders: response.data});
        } else {
            const articles = store.getState().articlesState.articles;
            this.setState({articlesHeaders:  articles});
        }
    }

    public render(): JSX.Element {
        return (
            <div className="SidePanel">
				{this.state.articlesHeaders.map(a => a.header)}
            </div>
        );
    }
}

export default SidePanel;
