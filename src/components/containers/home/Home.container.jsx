import React from 'react'
import MainGridComponent from './main-grid.component';
import SeoVisionComponent from './seo-vision.component';
import MainNewsComponent from './main-news.component';
import MainTestiminialAnnounce from './main-testiminial-announce';
import MainHrDocumentComponent from './main-hr-document.component';
import UpcomingEventComponent from './upcoming-event.component';
import SearchPeopleComponent from './search-people.component';
import DepartmentComponent from './department.component';
import CorporateBenefitComponent from './corporate-benefit.component';
import QuickLinkComponent from './quick-link.component';
import ResourceHubComponent from './resource-hub.component';
import GroupCompanyComponent from './group-company.component';
function HomeContainer() {

    return (
        <section className='home-container-section'>
           <MainGridComponent />
            <div className='home-container-layout'>
                <div className='left-column'>
                    <SeoVisionComponent />
                    <MainNewsComponent />
                    <MainTestiminialAnnounce />
                </div>
                <div className='middle-column'>
                    <MainHrDocumentComponent />
                    <UpcomingEventComponent />
                    <SearchPeopleComponent />
                    <DepartmentComponent />
                </div>
                <div className='right-column'>
                    <CorporateBenefitComponent />
                    <QuickLinkComponent />
                    <hr className='m-0' />
                    <ResourceHubComponent/>
                </div>
            </div>
            <GroupCompanyComponent />
        </section>
    )
}

export default HomeContainer