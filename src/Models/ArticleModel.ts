import Category from "./CategoryModel";

export class ArticleModel {
    id: number;
    category: Category;
    addedDate: Date;
    header: string;
    urlHeader: string;
    paragraphs: string;
    references: string;
}
export class ArticleModelToSend {
    id: number;
    category: number;
    addedDate: Date;
    header: string;
    urlHeader: string;
    paragraphs: string;
    references: string;
}

