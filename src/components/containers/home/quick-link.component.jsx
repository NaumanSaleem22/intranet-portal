import React from 'react';
import { commonImages } from '../../common/images';

const QuickLinkComponent = () => {
  return (
    <div className='quick-links-div mb-4'>
                        <div className='quick-links-heading'>
                            <span><img src={commonImages.QuickLinkNew} alt="quicklink-icon" /></span> <h4>Quick Links</h4>
                        </div>
                        <div className="quicklinks-list">
                            <div className="quicklinks-inner-list mb-4">
                                <span><img src={commonImages.SelfServicelinknew} alt="self-service" /></span> <p className='mb-0'>Self Services</p>
                            </div>
                            <div className="quicklinks-inner-list">
                                <span><img src={commonImages.PerformanceNew} alt="performance-management" /></span> <p className='mb-0'>Performance Management</p>
                            </div>
                        </div>
                    </div>
  )
}

export default QuickLinkComponent