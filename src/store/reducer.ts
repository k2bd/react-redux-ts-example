import * as actionTypes from "./actionTypes"


const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: "post 1",
            body: "Something cool happened yesterday!",
            addPending: false,
            removePending: false,
        },
        {
            id: 2,
            title: "another post",
            body: "Doctors hate this one trick to learn Redux",
            addPending: false,
            removePending: false,
        }
    ],
}


const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction,
): ArticleState => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE_REQUESTED:
            const nextId = Math.max(...state.articles.map(
                a => a.id
            )) + 1
            const newArticle: IArticle = {
                id: nextId,
                title: action.article.title,
                body: action.article.body,
                addPending: true,
                removePending: false,
            }
            return {
                ...state,
                articles: state.articles.concat([newArticle]),
            }
        case actionTypes.ADD_ARTICLE_RECIEVED_OK:
            const mappedArticles = state.articles.map(
                (article) => {
                    if (
                        article.addPending
                        && (article.title === action.article.title)
                        && (article.body === action.article.body)
                    ) {
                        return {
                            ...article,
                            addPending: false,
                        }
                    } else {
                        return article
                    }
                }
            )
            return {
                ...state,
                articles: mappedArticles,
            }
        case actionTypes.REMOVE_ARTICLE_REQUESTED:
            const toRemoveArticles = state.articles.map(
                (article) => {
                    if (article.id === action.article.id) {
                        return {
                            ...article,
                            removePending: true,
                        }
                    } else {
                        return article
                    }
                }
            )
            return {
                ...state,
                articles: toRemoveArticles,
            }
        case actionTypes.REMOVE_ARTICLE_RECIEVED_OK:
            const newArticles = state.articles.filter(
                article => article.id !== action.article.id
            )
            return {
                ...state,
                articles: newArticles,
            }
    }
    return state
}

export default reducer
