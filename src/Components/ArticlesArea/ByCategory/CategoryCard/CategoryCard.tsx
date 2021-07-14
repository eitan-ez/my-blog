import axios from "axios";
import { NavLink } from "react-router-dom";
import { Component } from "react";
import { ArticleModel } from "../../../../Models/ArticleModel";
import globals from "../../../../Services/Globals";
import notify from "../../../../Services/Notification";
import "./CategoryCard.scss";
import { Typography } from "@material-ui/core";
import CategoryModel from "../../../../Models/CategoryModel";

interface CategoryCardProps {
    category: CategoryModel
}

interface CategoryCardState {
    articles: ArticleModel[]
}

class CategoryCard extends Component<CategoryCardProps, CategoryCardState> {

    public constructor(props: CategoryCardProps) {
        super(props);
        this.state = {
            articles: null
        };
    }

    public async componentDidMount() {
        console.log(this.props.category)
        try {
            const response = await axios.get<ArticleModel[]>(globals.urls.getByCategory + this.props.category);
            this.setState({ articles: response.data });
        } catch (err) {
            notify.error(err);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="CategoryCard">
                
                <Typography variant="h5">{this.props.category.hebrewName}:</Typography>
                {this.state.articles &&
                this.state.articles.map(a =>
                    <div key={a.id}>
                        <NavLink className="singleArticle" to={"/articles/" + a.urlHeader}>{a.header}</NavLink>
                    </div>
                )}
            </div>
        );
    }
}

export default CategoryCard;
