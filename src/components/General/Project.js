import { Col, Row, Image } from "antd";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import ParticlesComponent from '../General/ParticlesComponent';

const Project = () => {
   const {id} = useParams();
   const project = projects[id];

   const ProjectNoExist = () => {
      return(
         <div className="container z-1" style={{ position: 'inherit' }}>
            This project doesn't exist!
         </div>
      );
   }

   const ProjectDetail = () => {
      return(
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
      );
   }

   let span = {
      lg: 12,
      md: 12,
      sm: 24
   }
   
   return(
      <Row style={{ padding: "250px 0 150px 0", backgroundColor: "#000000", minHeight: "calc(100vh - 346px)" }}>
         <Col span={24} className="container">
            <Row>
               <div className="background-overlay">
                  <ParticlesComponent />
               </div>
            </Row>
            <Row>
               {!project
                  ? <ProjectNoExist />
                  : <ProjectDetail />
               }               
            </Row>
         </Col>
      </Row>
   );
}

export default Project;