import { Col, Row, Image } from "antd";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import ParticlesComponent from '../General/ParticlesComponent';

const Project = () => {
   const {id} = useParams();
   const project = projects[id];

   if (!project) {
      return(
         <div id="test">
            This project doesn't exist!
         </div>
      );
   }

   let span = {
      lg: 12,
      md: 12,
      sm: 24
  }
   
   return(
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
                                    <h1 className="text-white text-center">{project.title}</h1>
                                </Col>
                            </Row>
                            <section className="pt-5 pb-5">
                                <div className="container">
                                    <Row gutter={24} >
                                        <Col {...span}>
                                          <p><strong>Company Name: </strong>{project.company}</p>
                                          <p><strong>Duration: </strong>{project.duration}</p>
                                          <p><strong>Website: </strong>
                                          <a href={project.website}>{project.website}</a>
                                          </p>
                                          <p><strong>Framework: </strong>{project.framework}</p>
                                          <p><strong>Template: </strong>{project.template}</p>
                                          <p><strong>Details: </strong>{project.details}</p>
                                        </Col>
                                    </Row>
                                </div>
                            </section>
                        </Col>
                    </div>
                </Row>
            </Col>
        </Row>
      // <div className="my-3">
      //    <Row gutter={16} style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
      //       <Col {...spanM}>
      //          <h5 className="text-white">{project.title}</h5>
      //          <p><strong>Company Name: </strong>{project.company}</p>
      //          <p><strong>Duration: </strong>{project.duration}</p>
      //          <p><strong>Website: </strong>
      //             <a href={project.website}>{project.website}</a>
      //          </p>
      //          <p><strong>Framework: </strong>{project.framework}</p>
      //          <p><strong>Template: </strong>{project.template}</p>
      //          <p><strong>Details: </strong>{project.details}</p>
      //       </Col>
      //       <Col {...spanM}>
      //          <Image src={project.img} />
      //          <a href={'/projects/' + project.id} className="ps-btn position-absolute bottom-0 start-50 translate-middle-x mb-5 d-block">View More</a>
      //       </Col>
      //    </Row>
      // </div>
   );
}

export default Project;