import React from 'react';
import { commonImages } from '../../common/images';


const SeoVisionComponent = () => {
  return (
    
    <div className='Ceo-quote-img-divv'>
    <div className='Ceo-quote-content-div'>
        <p className='Ceo-quote'>
            Chase the vision, not the money, the money will end up following you.
        </p>
        <h3 className='Ceo-name'>
            Khaled Temeirik
        </h3>
        <p className='Ceo-designation'>
            CEO
        </p>
    </div>
    <div>
        <img src={commonImages.KhaledTemeirik} className='Ceo-quote-img' alt='CEO' />
    </div>
    <img src={commonImages.UpQuote} className="Ceo-quote-up" alt="quote-up" />
    <img src={commonImages.DownQuote} className="Ceo-quote-down" alt="quote-up" />
</div>
    
    )
}

export default SeoVisionComponent