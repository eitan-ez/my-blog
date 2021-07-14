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
import { ArticleModel, ArticleModelToSend } from "../../../Models/ArticleModel";
import "./AddArticle.scss";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import { useEffect } from "react";
import CategoryModel from "../../../Models/CategoryModel";
import { useState } from "react";


function AddArticle(): JSX.Element {
  const { register, handleSubmit } = useForm<ArticleModel>();
  const [categories, setCategories] = useState<Array<CategoryModel>>([]);

  const getCategories = async () => {
    try{
      const response = await axios.get<CategoryModel[]>(globals.urls.getAllCategories).then((result) => {
        return result.data;
      });
     return response;
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if(categories.length === 0){
      getCategories().then((result) => {
        setCategories(result);;
      })
      
      console.log(categories);
    }
  })

  async function send(articleTemp: ArticleModelToSend) {
    
    try {
    const article = new ArticleModel();
    article.header = articleTemp.header;
    article.urlHeader = articleTemp.urlHeader;
    article.paragraphs = articleTemp.paragraphs;
    article.references = articleTemp.references;
    article.category = new CategoryModel();
    article.category.id = articleTemp.category;

    console.log(article);
    
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
          {...register("urlHeader")}
          label="URL"
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
          {categories.map(c => <MenuItem key={c.id} value={c.id}>{c.hebrewName}</MenuItem>)}
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
  )
}

export default AddArticle;
