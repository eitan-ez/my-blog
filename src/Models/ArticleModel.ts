export enum Category {
    TECH, TRIVIA
}

export class ArticleModel {
    id: number;
    category: Category;
    addedDate: Date;
    header: string;
    paragraphs: string;
    references: string;
}
