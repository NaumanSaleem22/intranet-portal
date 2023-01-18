import React from 'react';
import NewsCard from '../../cards/NewsCard';
import { commonImages } from '../../common/images';

const MainNewsComponent = () => {
  return (
    <div className="news-left-main-div">
    <div className='news-heading-div'>
        <span><img src={commonImages.NewsIcon} alt="news-icon" /></span>  <h2> News</h2>
    </div>
    <div className='news-overlay-div'>
        <img src={commonImages.NewsOverlayImg} alt="news-img" />
        <div className='news-overlay-text'>
            <p>
                May 05
            </p>
            <h2>
                Lorem ipsum dolor sit
                amet, consectetuer adipis
                cing elit.
            </h2>
        </div>
    </div>

    <div className='news-container-div'>
        <NewsCard img={commonImages.NewsImg1} date="MAY 05" desc="Lorem ipsum dolor sit amet, consectetuer adipis cing elit." />
        <NewsCard img={commonImages.NewsImg2} date="MAY 09" desc="Lorem ipsum dolor sit amet, consectetuer adipis cing elit." />
        <NewsCard img={commonImages.NewsImg3} date="MAY 10" desc="Lorem ipsum dolor sit amet, consectetuer adipis cing elit." />

        <div className='view-all-news-btn'>
            <button>
                View All
            </button>
        </div>
    </div>
</div>
  )
}

export default MainNewsComponent