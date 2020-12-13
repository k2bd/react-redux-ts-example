import { request } from "http"
import * as actionTypes from "./actionTypes"


export function addArticle(article: IArticle) {
    const request_action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE_REQUESTED,
        article,
    }

    const response_ok_action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE_RECIEVED_OK,
        article,
    }

    return simulateHttpRequest(request_action, response_ok_action)
}


export function removeArticle(article: IArticle) {
    const request_action: ArticleAction = {
        type: actionTypes.REMOVE_ARTICLE_REQUESTED,
        article,
    }

    const response_ok_action: ArticleAction = {
        type: actionTypes.REMOVE_ARTICLE_RECIEVED_OK,
        article,
    }

    return simulateHttpRequest(request_action, response_ok_action)
}


export function simulateHttpRequest(
    request_action: ArticleAction,
    response_ok_action: ArticleAction,
) {
    return (dispatch: DispatchType) => {
        dispatch(request_action)

        // Simulate HTTP request delay
        setTimeout(
            () => {dispatch(response_ok_action)},
            1000
        )
    }
}
