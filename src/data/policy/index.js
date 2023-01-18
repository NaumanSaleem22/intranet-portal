import { commonImages } from "../../components/common/images";

export const policyCards = [
    {
        text: 'Human Resource',
        link: '/policies-and-guidelines/human-resources',
        icon: commonImages.humanResource,
    },
    {
        text: 'Procurement Department',
        link: '/policies-and-guidelines/procurement-department',
        icon: commonImages.procurementDepart,
    },
    {
        text: 'Internal Control Documents',
        link: '/policies-and-guidelines/internal-control-documents',
        icon: commonImages.internalDocument,
    },
    {
        text: 'Information Technology',
        link: '/policies-and-guidelines/information-technology',
        icon: commonImages.informationTechnology,
    },
    {
        text: 'Corporate Communications',
        link: '/policies-and-guidelines/corporate-communications',
        icon: commonImages.corporateComunication,
    },
];

const getLinkFromPolicy = (txt) => {
    return policyCards.filter(each => each.text === txt)[0].link;
};

export const humanResourcesCards = [
    {
        text: 'Policies',
        link: `${getLinkFromPolicy('Human Resource')}/policies`,
        icon: commonImages.hrPolicy,
    },
    {
        text: 'Code of Conduct',
        link: `${getLinkFromPolicy('Human Resource')}/code-of-conduct`,
        icon: commonImages.codeConduct,
    },
    {
        text: 'Office Etiquette',
        link: `${getLinkFromPolicy('Human Resource')}/office-etiquette`,
        icon: commonImages.officeEttic,
    },
    {
        text: 'Facilities Management Guidelines',
        link: `${getLinkFromPolicy('Human Resource')}/facilities-management-guidelines`,
        icon: commonImages.hrFacilty,
    },
    {
        text: 'Competency Framework',
        link: `${getLinkFromPolicy('Human Resource')}/competency-framework`,
        icon: commonImages.compentanceFramework,
    },
    {
        text: 'Performance Management',
        link: `${getLinkFromPolicy('Human Resource')}/performance-management`,
        icon: commonImages.PerformanceManage,
    },
    {
        text: 'SLAs',
        link: `${getLinkFromPolicy('Human Resource')}/slas`,
        icon: commonImages.sLa,
    },
    {
        text: 'HARD BACK',
        link: '',
        icon: '',
        desc: 'Policies & Guidelines'
    },
];