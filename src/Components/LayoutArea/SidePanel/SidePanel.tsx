import { NavLink } from "react-router-dom";
import { Component } from "react";
import "./SidePanel.scss";
import allArticles from "../../ArticlesArea/ArticlesList/AllArticles";

class SidePanel extends Component<{}> {

    public constructor(props: {}) {
        super(props);
    }


    public render(): JSX.Element {
        return (
            <div className="SidePanel">
                {allArticles.map(a =>
                    <span className="url" style={{fontSize: (Math.ceil(Math.random()*100) + 100) + "%"}} key={a.id}>
                        <NavLink to={"/articles/" + a.urlHeader}>{a.header}</NavLink>
                    </span>
                )}
            </div>
        );
    }
}

export default SidePanel;
