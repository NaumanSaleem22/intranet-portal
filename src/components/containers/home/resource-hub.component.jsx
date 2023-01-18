import React from 'react';
import { commonImages } from '../../common/images';

const ResourceHubComponent = () => {
  return (
    <div className='Resources-div'>
    <div className='Resources-heading'>
        <span><img src={commonImages.ResourcesNew} alt="Resources-icon" /></span> <h4 className='m-0'>Resources Hub</h4>
    </div>
    <div className="resource-wallpaper mt-4">
        <div>
            <img src={commonImages.ResourceImg} alt="Resource Img" />
            <p>
                Corporate Wallpaper
            </p>
        </div>
        <div className="resource-download-div">
            <button>
                <img src={commonImages.DownloadIcon} />
            </button>
        </div>
    </div>
    <div className='view-all-resources-btn'>
        <button>
            View All
        </button>
    </div>
</div>
  )
}

export default ResourceHubComponent