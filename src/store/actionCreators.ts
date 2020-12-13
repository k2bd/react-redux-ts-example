import { request } from "http"
import * as actionTypes from "./actionTypes"


export function addArticle(article: IArticle) {
    const request_action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE_REQUESTED,
        article,
    }

    const recieve_ok_action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE_RECIEVED_OK,
        article,
    }

    return (dispatch: DispatchType) => {
        dispatch(request_action)

        // Simulate HTTP request delay
        setTimeout(
            () => {dispatch(recieve_ok_action)},
            1000
        )
    }
}


export function removeArticle(article: IArticle) {
    const request_action: ArticleAction = {
        type: actionTypes.REMOVE_ARTICLE_REQUESTED,
        article,
    }

    return simulateHttpRequest(request_action)
}


export function simulateHttpRequest(action: ArticleAction) {
    return (dispatch: DispatchType) => {
        setTimeout(
            () => {
                dispatch(action)
            },
            500
        )
    }
}
