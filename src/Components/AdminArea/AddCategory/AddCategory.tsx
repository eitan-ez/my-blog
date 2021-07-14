import { Button, ButtonGroup, TextField } from "@material-ui/core";
import axios from "axios";
import { useForm } from "react-hook-form";
import CategoryModel from "../../../Models/CategoryModel";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./AddCategory.scss";

function AddCategory(): JSX.Element {

    const { register, handleSubmit } = useForm<CategoryModel>();

    async function send(category: CategoryModel) {

        try {
            await axios.post<CategoryModel>(
                globals.urls.admin + "/add-category",
                category
            );
            console.log(category);
            notify.success("category has been added.");
        } catch (err) {
            console.log(category);
            notify.error(err);
        }
    }

    return (
        <div className="AddCategory">
            <form onSubmit={handleSubmit(send)}>

                <TextField
                    {...register("name")}
                    label="name"
                    variant="standard"
                    type="text"
                    fullWidth
                    required
                />
                <TextField
                    {...register("hebrewName")}
                    label="hebrewName"
                    variant="standard"
                    type="text"
                    fullWidth
                    required
                />
                <TextField
                    {...register("parentCategory")}
                    label="parentId"
                    variant="standard"
                    type="number"
                    fullWidth
                />
                <ButtonGroup variant="text" fullWidth>
                    <Button type="submit" color="primary">
                        Send
                    </Button>
                    <Button type="reset" color="secondary">
                        Clear
                    </Button>
                </ButtonGroup>
            </form>
        </div>
    );
}

export default AddCategory;
