import React from "react";
import { useState, useEffect } from "react";

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        async function getArticles() {
            const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
            const response = await request.json();
            setLoading(false);
            setArticles(response);
            console.log(response);
        }
        getArticles();
    }, []);

    return (
        <section id="blog">
            <h1>Ini Halaman Blogku</h1>
            <p>Berikut merupakan tulisan</p>

            {!loading ? (
                <div>
                    {articles.map(function (article, i) {
                        return <article key={article.id}>{article.title}</article>;
                    })}
                </div>
            ) : (
                <i>Loading...</i>
            )}
        </section>
    );
};

export default Blog;
