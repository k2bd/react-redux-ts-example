import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"


type Props = {
    article: IArticle
    removeArticle: (article: IArticle) => void
}


export const Article: React.FC<Props> = ({ article, removeArticle }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteArtcile = React.useCallback(
        (article: IArticle) => dispatch(removeArticle(article)),
        [dispatch, removeArticle]
    )

    const deleteText = (article.addPending || article.removePending) ? "⌛" : "🗑️"

    return (
        <div className="Article">
            <div>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
            </div>
            <button
                onClick={() => deleteArtcile(article)}
                disabled={article.addPending || article.removePending}
            >
                {deleteText}
            </button>
        </div>
    )
}
