import { Col, Row, Image } from "antd";

const ProjectOverviewComponent = (props) => {
   let spanM = {
      lg: 12,
      md: 12,
      sm: 24,
      xs: 24
  }
   
   return(
      <div className="my-3">
         <Row gutter={16} style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
            <Col {...spanM}>
               <h5 className="text-white">{props.title}</h5>
               <p><strong>Company Name: </strong>{props.company}</p>
               <p><strong>Duration: </strong>{props.duration}</p>
               <p><strong>Website: </strong>
                  <a href={props.website}>{props.website}</a>
               </p>
               <p><strong>Framework: </strong>{props.framework}</p>
               <p><strong>Template: </strong>{props.template}</p>
               <p><strong>Details: </strong>{props.details}</p>
            </Col>
            <Col {...spanM}>
               <Image src={props.img} />
               <a href={'/projects/' + props.id} className="ps-btn position-absolute bottom-0 start-50 translate-middle-x mb-5 d-block">View More</a>
            </Col>
         </Row>
      </div>
   );
}

export default ProjectOverviewComponent;