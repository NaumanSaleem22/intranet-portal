import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { commonImages } from '../../common/images';

const CorporateBenefitComponent = () => {
  return (
    <div className='corporate-benefits-div mb-4'>
                        <div className='corporate-benefits-heading'>
                            <span><img src={commonImages.CorporateBriefcase} alt="briefcase-icon" /></span> <h4>Corporate Benefits</h4>
                        </div>
                        <div className='corporate-benefits-carousel-div'>
                            <Carousel controls={false}>
                                <Carousel.Item>
                                    <h3>
                                        15% Off at Four Seasons
                                        Hotel Riyadh Season Nights
                                        for you and your family,
                                        Book Now!
                                    </h3>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <h3>
                                        15% Off at Four Seasons
                                        Hotel Riyadh Season Nights
                                        for you and your family,
                                        Book Now!
                                    </h3>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <h3>
                                        15% Off at Four Seasons
                                        Hotel Riyadh Season Nights
                                        for you and your family,
                                        Book Now!
                                    </h3>
                                </Carousel.Item>
                            </Carousel>
                        </div>

                    </div>
  )
}

export default CorporateBenefitComponent