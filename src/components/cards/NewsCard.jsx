import React from 'react'
import PropTypes from 'prop-types';

function NewsCard({ img, date, desc }) {
    return (
        <div className='Newscard-div'>
            <div className='newcard-img-div'>
                <img src={img} alt="news-img"/>
            </div>
            <div className='newscard-content-div'>
                <p>
                    {date}
                </p>
                <h5>
                    {desc}
                </h5>
            </div>
        </div>
    )
}

NewsCard.propTypes = {
    img: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string,
};

export default NewsCard;