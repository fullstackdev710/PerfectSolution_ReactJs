import { Row, Col, Image, Collapse, Space, Carousel } from "antd";
import ParticlesComponent from '../General/ParticlesComponent';
import ProgressComponent from '../General/ProgressComponent';
import ProjectOverviewComponent from "../General/ProjectOverviewComponent";
import profilePhoto from "../../assets/imgs/persons/JacobD-photo.jpg";
import imgOne from '../../assets/imgs/home/1.webp';
import imgTwo from '../../assets/imgs/home/2.webp';
import imgThree from '../../assets/imgs/home/3.webp';
import imgFour from '../../assets/imgs/home/4.webp';
import imgFive from '../../assets/imgs/home/5.webp';
import imgSix from '../../assets/imgs/home/6.webp';
import imgSeven from '../../assets/imgs/home/7.webp';

const { Panel } = Collapse;
const skills = [
   {
       id: 1,
       name: "PHP",
       percent: 97
   },
   {
       id: 2,
       name: "JavaScript",
       percent: 97
   },
   {
       id: 3,
       name: "C#",
       percent: 97
   },
   {
       id: 4,
       name: "CSS",
       percent: 97
   },
   {
       id: 5,
       name: "Python",
       percent: 97
   },
   {
       id: 6,
       name: "Html",
       percent: 97
   },
   {
       id: 7,
       name: "PHP",
       percent: 97
   },
   {
       id: 8,
       name: "jQuery",
       percent: 97
   },
   {
       id: 9,
       name: "Bootstrap",
       percent: 97
   },
   {
       id: 10,
       name: "VBA",
       percent: 97
   },
   {
       id: 11,
       name: "Google App Script",
       percent: 97
   },
   {
       id: 12,
       name: "Web Scrapping",
       percent: 97
   },
   {
       id: 13,
       name: "Data Programming",
       percent: 97
   },
   {
       id: 14,
       name: "Excel",
       percent: 97
   },
   {
       id: 15,
       name: "MySQL",
       percent: 97
   },
];

const frameworks = [
   {
       id: 1,
       name: "CodeIgniter",
       percent: 100
   },
   {
       id: 2,
       name: "WordPress",
       percent: 97
   },
   {
       id: 3,
       name: "Duda",
       percent: 97
   },
   {
       id: 4,
       name: "Shopify",
       percent: 97
   },
   {
       id: 5,
       name: "Webflow",
       percent: 97
   },
   {
       id: 6,
       name: "Asp.net",
       percent: 85
   },
   {
       id: 7,
       name: "React.Js",
       percent: 80
   },
   {
       id: 8,
       name: "Wix",
       percent: 80
   },
   {
       id: 9,
       name: "SquareSpace",
       percent: 90
   },
   {
       id: 10,
       name: "Django",
       percent: 50
   },
   {
       id: 11,
       name: "Flask",
       percent: 40
   },
   {
       id: 12,
       name: "Angular.Js",
       percent: 35
   },
   {
       id: 13,
       name: "Vue.Js",
       percent: 75
   },
   {
       id: 14,
       name: "HubSpot",
       percent: 70
   },
];

const work_history = [
   {
      id: 1,
      title: 'Website Redesign and Maintain',
      company: 'Kopetsky Auto Wash, LLC',
      duration: '2020/7–2021/11',
      website: 'https://www.kwash.com/',
      framework: 'WordPress',
      template: 'Custom Theme',
      details: 'Custom theme development without any builders',
      img: imgOne,
      url: '',
   },
   {
      id: 2,
      title: 'Website Redesign and Maintain',
      company: 'T-Scan Pty Ltd',
      duration: '2020/7–2021/11',
      website: 'http://t-scan.com.au/',
      framework: 'WordPress',
      template: 'Custom Theme',
      details: 'By using Divi builder, website development',
      img: imgTwo,
      url: '',
   },
   {
      id: 3,
      title: 'Maintain and Upgrade website',
      company: 'Grind Fitness',
      duration: '2020/7–2021/11',
      website: 'https://www.grindequipment.com/',
      framework: 'WordPress',
      template: 'Divi',
      details: 'By using Divi, website development',
      img: imgThree,
      url: '',
   },
   {
      id: 4,
      title: 'Website Redesign and Add New Features',
      company: 'Braaap Motocycles',
      duration: '',
      website: 'https://braaapmotorcycles.com/',
      framework: 'Shopify',
      template: '',
      details: 'Build all pages individually in liquid custom code',
      img: imgFour,
      url: '',
   },
   {
      id: 5,
      title: 'Maintain and Upgrade Website',
      company: 'Premier Corex',
      duration: '',
      website: 'https://www.premiercorex.com/',
      framework: 'WordPress',
      template: 'Beaver Builder',
      details: 'By using Beaver Builder website development',
      img: imgFive,
      url: '',
   },
   {
      id: 6,
      title: 'Website Development',
      company: 'Holistic Horizons',
      duration: '',
      website: '',
      framework: 'WordPress',
      template: 'Divi',
      details: 'Development from Scratch',
      img: imgSix,
      url: '',
   },
   {
      id: 7,
      title: 'Website Development',
      company: 'Gizber Donation',
      duration: '',
      website: '',
      framework: 'WordPress',
      template: '',
      details: 'Website development, in specially, build the special widget by custom code, responsive fix.',
      img: imgSeven,
      url: '',
   },
];

export default function JacobD() {
    let spanL = {
        lg: 6,
        md: 6,
        sm: 24
    };
    let spanR = {
        lg: 18,
        md: 18,
        sm: 24
    };

    return (
        <Row style={{ padding: "250px 0 150px 0", backgroundColor: "#000000" }}>
            <Col span={24} className="container">
                <Row>
                    <div className="background-overlay">
                        <ParticlesComponent />
                    </div>
                </Row>
                <Row>
                    <div className="container z-1" style={{ position: 'inherit' }}>
                        <Col>
                            <Row gutter={16}>
                                <Col {...spanL}>
                                    <Image src={profilePhoto} />
                                </Col>
                                <Col {...spanR} className="text-white">
                                    <h2 className="text-white">Jacob Peace Davidson</h2>
                                    <h4 className="text-white">CEO & Full Stack Developer</h4>
                                    <p><strong>Location: </strong>46 Arrabri Ave Jindalee QLD 4074, Australia </p>
                                    <p>
                                        Founder of multiple successful tech companies – focused on solving big industry problems with innovation.
                                    </p>
                                    <p><strong>Experience: </strong>15+ years</p>
                                    <p><strong>Projects: </strong>∞</p>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Row>
                <Row className="container my-5">
                    <div className="w-100">
                        <h4 className="text-white">Education</h4>
                        <Space type="panel" direction="vertical" className="w-100">
                            <Collapse defaultActiveKey={['1']} style={{ backgroundColor: "transparent", color: "#ffffff" }}>
                                <Panel header="Open Colleges" key="1">
                                    <p type="panel">2016 – 2018</p>
                                    <p>Bachelor's degree, Accounting and Business/Management</p>
                                </Panel>
                                <Panel header="Pokhara University" key="2">
                                    <p>2010 – 2014</p>
                                    <p>Bachelor of Computer Application (BCA), Computer Programming</p>
                                </Panel>
                            </Collapse>
                        </Space>
                        <hr className="text-white w-100" />
                    </div>
                </Row>
                <Row className="container my-5">
                    <div className="w-100">
                        <h4 className="text-white">Skills</h4>
                        <Space type="panel" direction="vertical" className="w-100 border p-3">
                           <Row gutter={16}>
                              {
                                 skills.map((skill, i) => {
                                    return (
                                       <ProgressComponent key={i} {...skill} />
                                    );
                                 })
                              }
                           </Row>
                        </Space>
                        <hr className="text-white w-100" />
                    </div>
                </Row>
                <Row className="container my-5">
                    <div className="w-100">
                        <h4 className="text-white">Experienced Web Frameworks</h4>
                        <Space type="panel" direction="vertical" className="w-100 border p-3">
                           <Row gutter={16}>
                              {
                                 frameworks.map((framework, i) => {
                                    return(
                                       <ProgressComponent key={i} {...framework} />
                                    );
                                 })
                              }
                           </Row>
                        </Space>
                        <hr className="text-white w-100" />
                    </div>
                </Row>
                <Row className="container my-5">
                    <div className="w-100">
                        <h4 className="text-white">Work History</h4>
                        <Carousel autoplay>
                           {
                              work_history.map((project, i) => {
                                 return(
                                    <ProjectOverviewComponent key={i} {...project} />
                                 );
                              })
                           }
                        </Carousel>
                    </div>
                </Row>
            </Col>
        </Row>
    );
}