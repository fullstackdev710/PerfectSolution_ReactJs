import { Col, Progress } from "antd";

const ProgressComponent = (props) => {
   let spanSkills = {
       lg: 8,
       md:12,
       sm:24,
       xs:24
   }
   
   return(
      <Col {...spanSkills} className="d-flex">
         <span className="w-25">{props.name}:</span>
         <Progress percent={props.percent} strokeColor="#f9e54c" />
      </Col>
   );
}

export default ProgressComponent;