import React from 'react';
import { commonImages } from '../../common/images';

const UpcomingEventComponent = () => {
  return (
    <div className='upcoming-events-div'>
    <div className="upcoming-events-heading-div">
        <span><img src={commonImages.CalendarIcon} alt="people-icon" /></span> <h3>Upcoming Event</h3>
    </div>
    <div className='events-card mt-4'>
        <div>
            <img src={commonImages.DateIcon} />
        </div>
        <div className='events-card-content'>
            <h3>
                Online seminar on Food Safety
                (A Basic Training on HACCP)
            </h3>
            <p>
                3:00 - 5:00 PM
            </p>
        </div>
    </div>
    <div className='events-card'>
        <div>
            <img src={commonImages.DateIcon} />
        </div>
        <div className='events-card-content'>
            <h3>
                Online seminar on Food Safety
                (A Basic Training on HACCP)
            </h3>
            <p>
                3:00 - 5:00 PM
            </p>
        </div>
    </div>
    <div className='events-card'>
        <div>
            <img src={commonImages.DateIcon} />
        </div>
        <div className='events-card-content'>
            <h3>
                Online seminar on Food Safety
                (A Basic Training on HACCP)
            </h3>
            <p>
                3:00 - 5:00 PM
            </p>
        </div>
    </div>
    <div className='view-all-events-btn-div'>
        <button>
            View All
        </button>
    </div>
</div>
  )
}

export default UpcomingEventComponent