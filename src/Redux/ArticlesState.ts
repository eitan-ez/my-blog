import { ArticleModel } from './../Models/ArticleModel';

export class ArticlesState {
    public articles: ArticleModel[] = [];
}

export enum ArticlesActionType {
    articleDownloaded = "ArticlesDownloaded",
    articleAdded = "ArticlesAdded",
    articleUpdated = "ArticlesUpdated",
    articleDeleted = "ArticlesDeleted"
}

export interface ArticleAction {
    type: ArticlesActionType;
    payload?: any;
}

export function articlesDownloadedAction(articles: ArticleModel[]): ArticleAction {
    return { type: ArticlesActionType.articleDownloaded, payload: articles };
}
export function productAddedAction(product: ArticleModel): ArticleAction {
    return { type: ArticlesActionType.articleAdded, payload: product };
}
export function productUpdatedAction(product: ArticleModel): ArticleAction {
    return { type: ArticlesActionType.articleUpdated, payload: product };
}
export function productDeletedAction(id: number): ArticleAction {
    return { type: ArticlesActionType.articleDeleted, payload: id };
}

export function articlesReducer(currentState: ArticlesState = new ArticlesState(), action: ArticleAction): ArticlesState {
    
    const newState = {...currentState};

    switch(action.type) {
        case ArticlesActionType.articleDownloaded:
            newState.articles = action.payload;
            break;
        case ArticlesActionType.articleAdded:
            newState.articles.push(action.payload);
            break;
        case ArticlesActionType.articleUpdated: 
            // TODO
            break;
        case ArticlesActionType.articleDeleted: 
            // TODO
            break;
    }

    return newState;
}
