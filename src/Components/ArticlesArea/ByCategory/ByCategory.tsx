import "./ByCategory.scss";
import { Component } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import CategoryModel from "../../../Models/CategoryModel";
import axios from "axios";
import globals from "../../../Services/Globals";

interface ByCategoryState {
    categories: CategoryModel[]
}


class ByCategory extends Component<{}, ByCategoryState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            categories: []
        }
    }

    public async componentDidMount() {
        const response = await axios.get<CategoryModel[]>(globals.urls.getAllCategories);
        const categories: CategoryModel[] = response.data;
        let categoriesToState: CategoryModel[] = [];
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].parentCategory === 0) {
                categoriesToState.push(categories[i]);
            } else {
                
            }
        }
        this.setState({ categories: categoriesToState });
        console.log(categoriesToState);
        console.log(categories);
    }

    public render(): JSX.Element {
        return (
            <div className="ByCategory">
                {this.state.categories &&
                this.state.categories.map(category => <CategoryCard key={category.id} category={category} />)}
            </div>
        );
    }
}
export default ByCategory;
