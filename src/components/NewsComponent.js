import React from 'react'
import NewsCard from './NewsCard'
// import news from '../news'
import '../App.css'
import { useState, useEffect } from 'react'
import Navbar from './Navbar';


const NewsComponent = () => {
    const [news, setnews] = useState('')
    function getNewsData() {
        fetch(` https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`).then(
            (response) => {
                if (response.ok) {
                    return response.json()
                }
                console.log(response);

                return Promise.reject(response)
            }
        )
            .then((newsData) => {
                setnews(newsData)
                console.log(newsData);
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getNewsData()

    }, [])

    return (
        <>
            {console.log("news" + news)}

            {news === "" ? <div className='loading'>
                Loading...
            </div> :
                <div className='top-main'>
                    <Navbar />

                    <div className='main'>
                        <div className='topHeadlines'>Top Headlines</div>
                        <div className='newsComponent'>

                            {news.articles.map((newsItem) => {
                                if (newsItem.title === null || newsItem.description === null || newsItem.url === null || newsItem.urlToImage === null) {
                                    return null;
                                }
                                return (<NewsCard key={newsItem.urlToImage} title={newsItem.title} newsImg={newsItem.urlToImage} newsUrl={newsItem.url} newsDesc={(newsItem.description).substring(0, 75)} />
                                )
                            })}
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default NewsComponent