import React from 'react';
import Slider from 'react-slick';
import Form from 'react-bootstrap/Form';
import { FaChevronRight } from "react-icons/fa";
import { commonImages } from '../../common/images';


const HeroBanner = () => {

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        <div className='hero-slider'>
          <img src={commonImages.homeBanner} className='' alt='Banner'/>

          <div className='hero_banner__text'>
            <h1>
            Digital Transformation in the
            <span>Kingdom of Saudi Arabia</span>
            </h1>
          </div>
        </div>

        <div className='hero-slider'>
          <img src={commonImages.homeBanner} className='' alt='Banner'/>

          <div className='hero_banner__text'>
            <h1>
            Digital Transformation in the
            <span>Kingdom of Saudi Arabia</span>
            </h1>
          </div>
        </div>
      </Slider>

      


      <div className='card-area'>
        <div className='card eventCard'>
          <div className='row'>
            <div className='col-6'>
            <div className='eventDay'>
              <div className='heroCardFlex'>
                <img src={commonImages.timerCalender} className='' alt=''/>
                <span className="day">Today</span>
              </div>

              <span className='eventName'>
                Rabi Al Awwal 7, 1444 
              </span>
            </div>
            </div>
            <div className='col-6'>
            <div className='eventTime'>
                <span className='date'>03 Oct 22</span>
                <span className='time'>10:45<sub>AM</sub></span>

            </div>
            </div>
          </div>
        </div>

        <div className='card eventCard'>
          <div className='row'>
            <div className='col-6'>
            <div className='eventDay'>
              <div className='heroCardFlex'>
                <img src={commonImages.weather} className='' alt=''/>
                <span className="day">Weather</span>
              </div>

              <span className='eventName'>
                Riyadh, Saudi Arabia 
              </span>
            </div>
            </div>
            <div className='col-6'>
            <div className='eventTime'>
                <span className='time'>36<sup>°</sup></span>
            </div>
            </div>
          </div>
        </div>


        <div className='card eventCard'>
          <div className='row'>
            <div className='col-6'>
            <div className='eventDay'>
              <div className='heroCardFlex'>
                <img src={commonImages.mosque} className='' alt=''/>
                <span className="day">Prayers</span>
              </div>

                <span className='eventName'>
                  Riyadh, Saudi Arabia
                </span>
              </div>
            </div>
            <div className='col-6'>
            <div className='eventTime'>
                <span className='date'>ASR</span>
                <span className='time'>3:45<sub>PM</sub></span>
            </div>
            </div>
          </div>
        </div>



        <div className='card eventCard'>
          <div className='row'>
            <div className='col-12'>
            <div className='eventDay'>
              <div className='heroCardFlex'>
                <img src={commonImages.poll} className='' alt=''/>
                <span className="day">Polls & Surveys</span>
              </div>
              <span className='eventQuestion'>
                  Would you be willing to travel this EID after covid?
              </span>


              <div className='d-flex mt-3 mb-3'>
                <div className='d-flex align-items-center gap-1'>
                <input type="radio"  />
                <span className='radioOption'>Yes</span>
                </div>
                <div className='d-flex align-items-center gap-1'>
                  <input type="radio" />
                  <span className='radioOption'>No</span>
                </div>
                <div className='d-flex align-items-center gap-1'>
                  <input type="radio" />
                  <span className='radioOption'>Don't Know</span>
                </div>
              </div>
                <button className='btn-card-submit'>Submit</button>

              </div>
            </div>
            
          </div>

          
        </div>



   {/* <div className='card eventCard'>
          <div className=''>
            <div className='eventDay'>
              <div>
                <img src={} className='' alt=''/>
                <span className="day">Polls & Surveys</span>
              </div>

              <span className='eventQuestion'>
                  Would you be willing to travel this EID after covid?
              </span>

              <div className='d-flex'>
                <div className='d-flex align-items-center gap-1'>
                <input type="radio"  />
                <span className='radioOption'>Yes</span>
                </div>
                <div className='d-flex align-items-center gap-1'>
                  <input type="radio" />
                  <span className='radioOption'>No</span>
                </div>
                <div className='d-flex align-items-center gap-1'>
                  <input type="radio" />
                  <span className='radioOption'>Don't Know</span>
                </div>
              </div>
              <div>
              <a href='' className='btn-card-submit'>Submit</a>
              </div>
            </div>
            
          </div>
        </div>   */}

    

      </div>
   
    </>
  )
}

export default HeroBanner