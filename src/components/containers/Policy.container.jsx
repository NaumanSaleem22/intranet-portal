import InfoCard from '../cards/InfoCard';
import { policyCards } from '../../data/policy';
import BreadcrumbSection from '../common/breadcrumb.section';

function PolicyContainer() {
    return (
        <>
            <BreadcrumbSection title='Policies & Guidelines' navSteps={['Home', 'Policies & Guidelines']} />
            <div className='c-container my-4'>
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <p className='policy-parah'>Policies and procedures are designed to regulate all major decisions, actions, and principles of an organization. These documents provide authority and necessary guidance to a company or a department on topics like- hiring practices, bank accounts, dress code, etc.</p>
                
                    </div>
                </div>
                
                <div className='card-grid'>
                    {policyCards.map((each, index) => (
                        <div key={index}>
                            <InfoCard 
                                name={each.text} 
                                img={each.icon} 
                                link={each.link} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PolicyContainer;