
export class ArticleModel {
    id: number;
    addedDate: Date;
    header: string;
    urlHeader: string;

    constructor(addedDate: Date, header: string, urlHeader: string) {
        this.id = Math.random()*5000;
        this.addedDate = addedDate;
        this.header = header;
        this.urlHeader = urlHeader;
    }
}
