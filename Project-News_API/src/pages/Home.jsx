import { useState, useEffect } from "react";

const apiKey = "5d2829b8ccbd49888ade07b1f128b9e7";

const News = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("de");
    const [news, setNews] = useState ([]);
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {
        fetchNews();
    }, [selectedLanguage]);

    const fetchNews = () => {
        fetch(`https://newsapi.org/v2/top-headlines?language=${selectedLanguage}&apiKey=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setNews(data.articles);
            });
    };

    // const languageChange = (e) => {
    //     setSelectedLanguage(e.taget.value);
    // };

    // const search = () => {
    //     markText(searchKeyword);
    // };

    // const markText = (keyword) => {
    //     const markedText = document.querySelector("mark");
    //     markedText.forEach((el) => {
    //         el.replaceWith(...el.childNodes);
    //     });

    //     const everyText = document.querySelector("body *");

    //     everyText.forEach((el) => {
    //         const text = el.innerHTML;
    //         const markedText = text.replace(new RegExp (keyword, "gi"),(match) => `<mark>${match}</mark>`);
    //         el.innerHTML = markedText;
    //     });
    // };

    const createArticle = (article) => {
        const puplishedAt = article.publishedAt ? article.publishedAt.split("T")[0] : "";

        return (
            <article key={article.title}>
                <h2>{article.title}</h2>
                <p>{puplishedAt}</p>
                <a href={article.url}>READ MORE</a>
            </article>
        )
    }

    return (
        <section>
            <h1>World News</h1>
            {/* <label htmlFor="language">Select Language:</label>
            <select id="language" value={selectedLanguage} onChange={languageChange}>
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
            </select> */}

            {/* <input type="text" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} /> */}

            {/* <button onClick={search}>Search</button> */}

            <article id="newsContainer">
                {news.map((article) => createArticle(article))}
            </article>
        </section>
    );
};

export default News