import { Component } from "react";
import { ArticleModel } from "../../../Models/ArticleModel";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./Home.scss";


class Home extends Component <{}> {
    
    public constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="Home">
            </div>
        );
    }
}

export default Home;
