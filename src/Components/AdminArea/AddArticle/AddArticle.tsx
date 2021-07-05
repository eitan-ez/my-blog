import axios from "axios";
import {
  TextField,
  ButtonGroup,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { ArticleModel } from "../../../Models/ArticleModel";
import "./AddArticle.scss";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";

function AddArticle(): JSX.Element {
  const { register, handleSubmit } = useForm<ArticleModel>();

  async function send(article: ArticleModel) {
    try {
      await axios.post<ArticleModel>(
        globals.urls.admin + "/add-article",
        article
      );

      notify.success("article has been added.");
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <div className="AddArticle">
      <form onSubmit={handleSubmit(send)}>
        <TextField
          {...register("header")}
          label="כותרת"
          variant="standard"
          type="text"
          fullWidth
          required
        />
        <TextField
          {...register("paragraphs")}
          label="פסקאות"
          variant="standard"
          type="text"
          fullWidth
          required
          multiline
        />
        <TextField
          {...register("references")}
          label="הערות שוליים"
          variant="standard"
          type="text"
          fullWidth
          required
          multiline
        />
        <InputLabel>קטגוריה:</InputLabel>
        <Select {...register("category")} className="select" required>
          <InputLabel>Category</InputLabel>
          <MenuItem value="TECH">טכנולוגיה</MenuItem>
          <MenuItem value="TRIVIA">טריוויה</MenuItem>
        </Select>
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

export default AddArticle;
