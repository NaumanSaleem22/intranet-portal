import React from 'react';
import { commonImages } from '../../common/images';

const GroupCompanyComponent = () => {
  return (
    <div className='companies-div'>
                <div>
                    <h3>
                        Basamh Group Companies
                    </h3>
                </div>
                <div className='basamh-companies'>
                    <div>
                        <img src={commonImages.company1Img} alt="group of companies" />
                    </div>
                    <div>
                        <img src={commonImages.company2Img} alt="group of companies" />
                    </div>
                    <div>
                        <img src={commonImages.company3Img} alt="group of companies" />
                    </div>
                </div>
            </div>
  )
}

export default GroupCompanyComponent