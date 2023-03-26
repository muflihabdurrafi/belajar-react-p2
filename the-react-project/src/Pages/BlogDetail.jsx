import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const params = useParams();
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(
        function () {
            async function getArticle() {
                const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

                if (!request.ok) {
                    return setNotFound(true);
                }

                const response = await request.json();
                setLoading(false);
                setArticle(response);
            }
            getArticle();
        },
        [params]
    );

    if (notFound) {
        return notFound && <p>Artikel tidak ditemukan</p>;
    }

    return (
        <section id="blogDetail">
            <h1>Blog Detail</h1>

            {!loading ? (
                <>
                    <h1>{article.title}</h1>
                    <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                    <br />
                    <img width="500px" src={article.imageUrl} alt={article.title} />
                    <p>{article.summary}</p>
                    <p>
                        Source:{" "}
                        <a href={article.url} target="_blank" rel="noreferrer">
                            {article.newsSite}
                        </a>
                    </p>
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </section>
    );
};

export default BlogDetail;
