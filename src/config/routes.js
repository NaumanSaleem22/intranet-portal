import { Route } from 'react-router-dom';

import Homepage from '../pages/homepage';
import Policiespage from '../pages/policies';
import HumanResourcesPage from '../pages/human-resources';

export const routes = [
    {
        text: '',
        route: '/',
        component: <Route path='/' element={<Homepage />} />,
    },
    {
        text: 'Policies and Guidelines',
        route: '/policies-and-guidelines',
        component: (
            <Route path='/policies-and-guidelines'>
                <Route index={true} element={<Policiespage />} />
                <Route path='human-resources'>
                    <Route index={true} element={<HumanResourcesPage />} />
                    <Route path='policies' element={<Policiespage />} />
                </Route>
            </Route>
        ),
    },
    {
        text: 'Employee Services',
        route: '/employee-services',
        component: <Route path='/employee-services' element={<Policiespage />} />,
    },
    {
        text: 'Performance Management',
        route: '/performance-management',
        component: <Route path='performance-management/' element={<Policiespage />} />,
    },
    {
        text: 'L & D Portal',
        route: '/ld-portal',
        component: <Route path='/ld-portal' element={<Policiespage />} />,
    },
    {
        text: 'Employee Benefits',
        route: '/employee-benefits',
        component: <Route path='/employee-benefits' element={<Policiespage />} />,
    },
    {
        text: 'Communication Hub',
        route: '/communication-hub',
        component: <Route path='/communication-hub' element={<Policiespage />} />,
    },
    {
        text: 'Meet the LT',
        route: '/meet-the-lt',
        component: <Route path='/meet-the-lt' element={<Policiespage />} />,
    },
    {
        text: 'FAQs',
        route: '/faqs',
        component: <Route path='/faqs' element={<Policiespage />} />,
    },
];