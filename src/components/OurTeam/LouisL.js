import { Row, Col, Image, Collapse, Space, Carousel } from "antd";
import ParticlesComponent from '../General/ParticlesComponent';
import ProgressComponent from '../General/ProgressComponent';
import profilePhoto from "../../assets/imgs/persons/LouisL-photo.png";
import imgOne from '../../assets/imgs/home/1.webp';
import imgTwo from '../../assets/imgs/home/2.webp';
import imgThree from '../../assets/imgs/home/3.webp';
import imgFour from '../../assets/imgs/home/4.webp';
import imgFive from '../../assets/imgs/home/5.webp';
import imgSix from '../../assets/imgs/home/6.webp';

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

export default function LouisL() {
    let spanL = {
        lg: 6,
        md: 6,
        sm: 24
    }
    let spanR = {
        lg: 18,
        md: 18,
        sm: 24
    }
    let spanM = {
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24
    }

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
                                    <h2 className="text-white">Louis Lafata</h2>
                                    <h4 className="text-white">Web Developer</h4>
                                    <p><strong>Location: </strong>186 Claremont Avenue Jersey City New Jersey 07305, United States</p>
                                    <p>
                                        Full Stack Web developer with over 5 years of experience.
                                    </p>
                                    <p><strong>Experience: </strong>5+ years</p>
                                    <p><strong>Projects: </strong>100+</p>
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
                                <Panel header="Syracuse University" key="1">
                                    <p type="panel">2010 – 2014</p>
                                    <p>Syracuse University, United States</p>
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
                            <div className="my-3">
                                <Row style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Kopetsky Auto Wash, LLC</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.kwash.com/">https://www.kwash.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgOne} />
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Kopetsky Auto Wash, LLC</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.kwash.com/">https://www.kwash.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgTwo} />
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Kopetsky Auto Wash, LLC</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.kwash.com/">https://www.kwash.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgThree} />
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Kopetsky Auto Wash, LLC</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.kwash.com/">https://www.kwash.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgFour} />
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Kopetsky Auto Wash, LLC</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.kwash.com/">https://www.kwash.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgFive} />
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Kopetsky Auto Wash, LLC</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.kwash.com/">https://www.kwash.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgSix} />
                                    </Col>
                                </Row>
                            </div>
                        </Carousel>
                    </div>
                </Row>
            </Col>
        </Row>
    );
}