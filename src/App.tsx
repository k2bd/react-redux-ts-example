import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./styles.css"

import { Article } from "./components/Article"
import { AddArticle } from "./components/AddArticle"
import { addArticle, removeArticle } from "./store/actionCreators"
import { Dispatch } from "redux"


const App: React.FC = () => {
    const articles: readonly IArticle[] = useSelector(
        (state: ArticleState) => state.articles,
        shallowEqual
    )
    const dispatch: Dispatch<any> = useDispatch()

    const saveArticle = React.useCallback(
        (article: IArticle) => dispatch(addArticle(article)),
        [dispatch]
    )

    const displayArticles = articles.map(
        (article: IArticle) => (
            <Article
                key={article.id}
                article={article}
                removeArticle={removeArticle}
            />

        )
    )

    return (
        <main>
            <h1>Articles:</h1>
            <AddArticle saveArticle={saveArticle}/>
            {displayArticles}
        </main>
    )
}

export default App
