import * as actionTypes from "./actionTypes"


const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: "post 1",
            body: "Something cool happened yesterday!",
        },
        {
            id: 2,
            title: "another post",
            body: "Doctors hate this one trick to learn Redux",
        }
    ],
}


const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction,
): ArticleState => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const nextId = Math.max(...state.articles.map(
                a => a.id
            )) + 1
            const newArticle: IArticle = {
                id: nextId,
                title: action.article.title,
                body: action.article.body,
            }
            return {
                ...state,
                articles: state.articles.concat([newArticle]),
            }
        case actionTypes.REMOVE_ARTICLE:
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
