
export class ArticleModel {
    id: number;
    addedDate: Date;
    header: string;
    urlHeader: string;
    shortDescription: string;

    constructor(addedDate: Date, header: string, urlHeader: string, shortDescription: string) {
        this.id = Math.random()*5000;
        this.addedDate = addedDate;
        this.header = header;
        this.urlHeader = urlHeader;
        this.shortDescription = shortDescription;
    }
}
