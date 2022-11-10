import { Row, Col, Image } from "antd";
import HomeWhatWeDo from '../HomeLayouts/HomeWhatWeDo';
import ParticlesComponent from '../General/ParticlesComponent';
import logoTrendingUP from "../../assets/imgs/logos/trending-up.png";
import photoJacobD from "../../assets/imgs/persons/JacobD-photo.jpg";

export default function Project() {
    let span = {
        lg: 12,
        md: 12,
        sm: 24
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
                            <Row>
                                <Col span={24}>
                                    <h1 className="text-white text-center">Project
                                        <span style={{ maxWidth: "100px", paddingLeft: "20px" }}>
                                            <Image src={logoTrendingUP} className="text-center w-100" />
                                        </span>
                                    </h1>
                                </Col>
                            </Row>
                            <section className="pt-5 pb-5">
                                <div className="container">
                                    <Row gutter={24} >
                                        <Col {...span}>
                                            <Image src={photoJacobD} />
                                        </Col>
                                        <Col {...span}>
                                            <h6 className="text-white my-3">
                                                We create together, measure always, and revise often, ensuring your customers stay at the focus.
                                            </h6>
                                            <p className="text-white">
                                                Peace Marketing was founded by Jacob Davidson in 2017 – with a focus on providing small business and startups with strategic advice on marketing in a digital landscape. Jacob saw the gap between the ‘big wig’ agencies and hefty retainers and saw the need for ethical and affordable marketing advice and implementation. After many years of working ‘in-house’ and ‘agency-side’ roles he was able to identify the disconnect between both efforts and implementing campaigns across different channels.
                                            </p>
                                            <p className="text-white">
                                                Team members works individually. But If someone needs help for his project, we can corporate under a client's consent.
                                                All members are skilled website developers and uses this website to show their working history.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </section>
                            <HomeWhatWeDo />
                        </Col>
                    </div>
                </Row>
            </Col>
        </Row>
    );
}

