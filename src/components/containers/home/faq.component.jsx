import React from 'react';
import { commonImages } from '../../common/images';

const FaqComponent = () => {
  return (
    <div className='FAQ-div mb-4'>
    <div className='FAQ-heading'>
        <span><img src={commonImages.FAQNew} alt="FAQ-icon" /></span> <h4 className='m-0'>FAQs</h4>
    </div>
    <div className='mt-4'>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Leave & Absence</Accordion.Header>
                <Accordion.Body>
                    <p>
                        Will I get paid while I am on a leave of absence?
                    </p>
                    <p>
                        Where do I find the policy on returning to work after sickness?
                    </p>
                    <p>
                        Employee’s care for covered service member with serious injury
                        or illness
                    </p>

                    <p>
                        What if I have to care for a seriously ill family member?
                    </p>

                    <p>
                        How do I apply for maternity or paternity leave?
                    </p>

                    <p>
                        I’m having a baby, what steps do I need to take to obtain
                        time off work?
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Training & Development</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Requests Documents</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Claims</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Corporate Benefits</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    </div>
</div>
  )
}

export default FaqComponent