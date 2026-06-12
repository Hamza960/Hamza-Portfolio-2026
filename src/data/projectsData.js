import accessExpense from '../assets/projects/Access-Expense.png'
import mandgPruAdviser from '../assets/projects/M&G-PruAdviser.png'
import esker from '../assets/projects/Esker.png'
import tqf from '../assets/projects/TQF.png'
import SGUI from '../assets/projects/SG-UI.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'Access Expense',
        projectDesc: 'Worked for the expense management enterprise module for The Access Group (UK). This is an enterprise expense management application that enables employees to submit, track and manage expenses efficently',
        tags: ['React.js', 'HTML' ,'CSS', 'Javascript', 'JIRA', 'Azure', 'git'],
        demo: 'https://www.theaccessgroup.com/en-gb/finance/software/expense-management/',
        image: accessExpense
    },
    {
        id: 2,
        projectName: 'M&G Investments - PruAdviser',
        projectDesc: 'Working on the PruAdviser application for M&G client (US). This application is a digital platform for financial advisers to manage client investments, track portfolios and access financial products offered M&G plc',
        tags: ['React.js', 'Vite', 'MaterialUI', 'HTML', 'CSS', 'Javascript', 'JIRA', 'Azure', 'git'],
        demo: 'https://www.mandg.com/pru/adviser/en-gb',
        image: mandgPruAdviser
    },
    {
        id: 3,
        projectName: 'M&G - Surveillance Grid UI Migration',
        projectDesc: 'Surveillance Grid is a low-code enterprise application built on OutSystems for surveillance and monitoring of transactios, user exceptions, regulatory reports and workflows. I have contributed as a software engineer in migrating the low code Outsystems into modern React+Vite+Typescript app. Responsibilities include - migrating legacy user interfaces, API creation and integration, project analysis and requirement gathering. The development is in progress',
        tags: ['React.js', 'Vite', 'TailwindCSS', 'HTML', 'CSS', 'Javascript', 'JIRA', 'Azure', 'git', '.NET'],
        demo: '',
        image: SGUI
    },
    {
        id: 4,
        projectName: 'Esker BPA Automation',
        projectDesc: 'Worked on various client environments under the Esker Accounts Payable and Order Management domain. Esker is a Business Process Automation enterprise platform  used to streamline and digitize financial workflows',
        tags: ['JavaScript'],
        demo: 'https://www.esker.com/',
        image: esker
    },
    {
        id: 5,
        projectName: 'Hexaware - EMS',
        projectDesc: 'This is an internal project of Hexaware, designed to streamline the process of managing employee expenses, manage employee data and allows employees to submit leaves which can be approved by the management level',
        tags: ['React', 'Material UI', 'Express', "MongoDB", "NodeJS"],
        demo: '',
        image: ""
    },
    {
        id: 6,
        projectName: 'GuideMeDoc',
        projectDesc: 'GuideMeDoc is a heathcare CRM platform designed from scratch for the hospitals and clinics in the UAE to manage patient interactions, appointments and internal workflows efficiently',
        tags: ['React', 'Bootstrap', 'Express', "MongoDB", "NodeJS"],
        demo: 'https://healthfinder.ae/listings/guidemedoc-subsidiary-of-mediconnect-international-dmcc/',
        image: ""
    },
    {
        id: 7,
        projectName: 'The Quran Foundation',
        projectDesc: 'This website is a digital platform developed for an eduvational and community-based organization in Hyderabad, India. It focuses on providing access to Quranic learning resources and information about programs and initiatives',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel'],
        demo: 'https://www.thequranfoundation.org/',
        image: tqf
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/