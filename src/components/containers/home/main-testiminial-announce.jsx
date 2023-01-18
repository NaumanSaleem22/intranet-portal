import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { commonImages } from '../../common/images';


const MainTestiminialAnnounce = () => {
  return (
    <div className='announcement-div'>
    <div className='announcement-heading-div'>
        <span><img src={commonImages.AnnouncementIcon} alt="announcement-icon" /></span>  <h2> Testimonials</h2>
    </div>
    <div className='announcement-carousel-div'>
        <Carousel controls={false}>
            <Carousel.Item>
                <div className="announcement-carousel-content">
                    <h3>
                        New Chief Technology
                        Officer appointed at
                        Basmah Trading Company
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                        et justo duo dolores et ea rebum...
                    </p>
                    <div className='profile-circle-img'>
                        <img src={commonImages.CircleProfileImage} alt="" />
                    </div>
                    <a href='#'>
                        Read All
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="announcement-carousel-content">
                    <h3>
                        New Chief Technology
                        Officer appointed at
                        Basmah Trading Company
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                        et justo duo dolores et ea rebum...
                    </p>
                    <div className='profile-circle-img'>
                        <img src={commonImages.CircleProfileImage} alt="" />
                    </div>
                    <a href='#'>
                        Read All
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="announcement-carousel-content">
                    <h3>
                        New Chief Technology
                        Officer appointed at
                        Basmah Trading Company
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                        et justo duo dolores et ea rebum...
                    </p>
                    <div className='profile-circle-img'>
                        <img src={commonImages.CircleProfileImage} alt="" />
                    </div>
                    <a href='#'>
                        Read All
                    </a>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
</div>
  )
}

export default MainTestiminialAnnounce