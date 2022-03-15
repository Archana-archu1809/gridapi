import React from "react";
import {Card,Row,Col} from "antd"
const Component=(props)=>{
    return(
        <Row>
            <Col  md={3}>

 
       
            
                <p >{props.data.company.catchPhrase}</p>
      
       
        </Col>
        </Row>
      
    )
}
export default Component 