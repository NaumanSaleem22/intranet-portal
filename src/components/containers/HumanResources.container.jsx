import InfoCard from '../cards/InfoCard';
import { humanResourcesCards } from '../../data/policy';
import BreadcrumbSection from '../common/breadcrumb.section';

function HumanResourcesContainer() {
    return (
        <>
            <BreadcrumbSection title='Human Resources' navSteps={['Home', 'Policies & Guidelines', 'Human Resources']} />
            <div className='c-container my-4'>
                <div class="row">
                    <div class="col-7">
                        <p className='policy-parah'>Policies and procedures are designed to regulate all major decisions, actions, and principles of an organization. These documents provide authority and necessary guidance to a company or a department on topics like- hiring practices, bank accounts, dress code, etc.</p>
                
                    </div>
                </div>
                
                <div className='card-grid'>
                    {humanResourcesCards.map((each, index) => (
                        <div key={index}>
                            <InfoCard 
                                name={each.text} 
                                img={each.icon} 
                                link={each.link} 
                                desc={each?.desc}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default HumanResourcesContainer;
