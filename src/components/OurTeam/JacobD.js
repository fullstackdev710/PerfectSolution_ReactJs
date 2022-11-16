import { Row, Col, Image, Collapse, Space, Carousel, Progress } from "antd";
import ParticlesComponent from '../General/ParticlesComponent';
import profilePhoto from "../../assets/imgs/persons/JacobD-photo.jpg";
import imgOne from '../../assets/imgs/home/1.webp';
import imgTwo from '../../assets/imgs/home/2.webp';
import imgThree from '../../assets/imgs/home/3.webp';
import imgFour from '../../assets/imgs/home/4.webp';
import imgFive from '../../assets/imgs/home/5.webp';
import imgSix from '../../assets/imgs/home/6.webp';

const { Panel } = Collapse;
export default function JacobD() {
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
    let spanSkills = {
        lg: 8,
        md:12,
        sm:24,
        xs:24
    }
    let projectUrls = {
        kwash: '/Projects/',
        ttscan: '',
        grindfitness: '',
        braaapmotocycles: '',
        premier_corex: '',
        holistic_horizons: ''
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
                    <div className="w-100">
                        <h4 className="text-white">Skills</h4>
                        <Space type="panel" direction="vertical" className="w-100 border p-3">
                            <Row gutter={16}>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">PHP:</span>
                                    <Progress percent={97} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">JavaScript<span>:</span></span>
                                    <Progress percent={95} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">C#:</span>
                                    <Progress percent={85} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">CSS:</span>
                                    <Progress percent={100} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Python:</span>
                                    <Progress percent={75} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Html:</span>
                                    <Progress percent={100} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">jQuery:</span>
                                    <Progress percent={100} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Bootstrap:</span>
                                    <Progress percent={100} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">VBA:</span>
                                    <Progress percent={90} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Google App Script:</span>
                                    <Progress percent={75} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Web Scrapping:</span>
                                    <Progress percent={80} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Data Programming:</span>
                                    <Progress percent={90} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Excel:</span>
                                    <Progress percent={90} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">MySQL:</span>
                                    <Progress percent={90} strokeColor="#f9e54c" />
                                </Col>
                            </Row>
                        </Space>
                        <hr className="text-white w-100" />
                    </div>
                    <div className="w-100">
                        <h4 className="text-white">Experienced Web Frameworks</h4>
                        <Space type="panel" direction="vertical" className="w-100 border p-3">
                            <Row gutter={16}>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">CodeIgniter:</span>
                                    <Progress percent={100} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">WordPress:</span>
                                    <Progress percent={90} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Shopify:</span>
                                    <Progress percent={90} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Webflow:</span>
                                    <Progress percent={90} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Asp.net:</span>
                                    <Progress percent={80} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">React.Js:</span>
                                    <Progress percent={75} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Wix:</span>
                                    <Progress percent={85} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">SquareSpace:</span>
                                    <Progress percent={90} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Django:</span>
                                    <Progress percent={50} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Flask:</span>
                                    <Progress percent={60} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Angular.Js:</span>
                                    <Progress percent={20} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">Vue.Js:</span>
                                    <Progress percent={80} strokeColor="#f9e54c" />
                                </Col>
                                <Col {...spanSkills} className="d-flex">
                                    <span className="w-25">HubSpot:</span>
                                    <Progress percent={75} strokeColor="#f9e54c" />
                                </Col>
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
                                <Row gutter={16} style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
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
                                        <a href={projectUrls['kwash']} className="ps-btn position-absolute bottom-0 start-50 translate-middle-x mb-5 d-block">View More</a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row gutter={16} style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>T-Scan Pty Ltd</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="http://t-scan.com.au/">http://t-scan.com.au/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM} className="text-center">
                                        <Image src={imgTwo} />
                                        <a href={projectUrls['kwash']} className="ps-btn position-absolute bottom-0 start-50 translate-middle-x mb-5 d-block">View More</a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row gutter={16} style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Grind Fitness</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.grindequipment.com/">https://www.grindequipment.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Divi Builder</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgThree} />
                                        <a href={projectUrls['grindfitness']} className="ps-btn position-absolute bottom-0 start-50 translate-middle-x mb-5 d-block">View More</a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row gutter={16} style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Braaap Motorcycles</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://braaapmotorcycles.com/">https://braaapmotorcycles.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>Shopify</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgFour} />
                                        <a href={projectUrls['braaapmotocycles']} className="ps-btn position-absolute bottom-0 start-50 translate-middle-x mb-5 d-block">View More</a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row gutter={16} style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Premier Corex</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.premiercorex.com/">https://www.premiercorex.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Beaver Builder</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgFive} />
                                        <a href={projectUrls['premier_corex']} className="ps-btn position-absolute bottom-0 start-50 translate-middle-x mb-5 d-block">View More</a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row gutter={16} style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Holistic Horizons</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://holistichorizons.com.au/">https://holistichorizons.com.au/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgSix} />
                                        <a href={projectUrls['holistic_horizons']} className="ps-btn position-absolute bottom-0 start-50 translate-middle-x mb-5 d-block">View More</a>
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