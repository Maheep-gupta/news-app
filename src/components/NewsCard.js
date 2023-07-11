import React from 'react';

const NewsCard = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }} onClick={() => props.newsUrl}>
            <img src={props.newsImg} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className='fw-bold'>{props.title} </p>

                <p className="card-text">{props.newsDesc} ...<a href={props.newsUrl} className="card-link">Read More</a> </p>
            </div>
        </div>
    )
}

export default NewsCard