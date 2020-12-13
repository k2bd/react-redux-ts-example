interface IArticle {
    id: number
    title: string
    body: string
    addPending: boolean
    removePending: boolean
}


type ArticleState = {
    articles: IArticle[]
}


type ArticleAction = {
    type: string
    article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction
