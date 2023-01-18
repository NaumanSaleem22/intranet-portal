import React from 'react';
import InfoCard from '../../cards/InfoCard';
import { commonImages } from '../../common/images';


const MainGridComponent = () => {
  return (
    <div className='home-infocard-layout'>
        <InfoCard name="Self Service" img={commonImages.SelfServiceNew} />
        <InfoCard name="Apply for Leaves" img={commonImages.ApplyLeaveNew} />
        <InfoCard name="Code of Conduct" img={commonImages.CodeConductNew} />
        <InfoCard name="Request a Training" img={commonImages.RequestTrainingNew} />
        <InfoCard name="Request a Document" img={commonImages.RequestDocumentNew} />
    </div>
  )
}

export default MainGridComponent