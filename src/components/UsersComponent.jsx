import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";
import Card from "./CardComponent";
import {Row,Col} from "antd"
function Users(){
const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading=useSelector((state)=>state.users.loading)
  const error=useSelector((state)=>state.users.error)
  useEffect(() => {
    dispatch(getUsers())

  },[]);

  return (
    <div>
      <h1 className="App">Users</h1>
      <Row >
      {users.loading && <p>loading...</p>}
      {users.length > 0 &&
        users.map((user) => {return(
          <Col md={8} xs={24}sm={12}>
           

           
      
          <h4>{user.name}</h4>
       
          
     </Col>)})}
      {users.length === 0 && !loading && <p>No users available</p>}
      {error &&!loading &&<p>{error}</p>}
  </Row>
    </div>
  );
}


export default Users