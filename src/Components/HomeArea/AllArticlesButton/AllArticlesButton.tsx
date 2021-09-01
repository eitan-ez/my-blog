import "./AllArticlesButton.scss";
import { useHistory } from "react-router-dom";

function AllArticlesButton(): JSX.Element {

    const history = useHistory();
    return (
        <button className="btn draw-border" onClick={() => history.push("/all-articles")}>לכל המאמרים</button> 
    );
}

export default AllArticlesButton;
