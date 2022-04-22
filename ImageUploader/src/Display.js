import React from 'react';
import './Display.css';
import { Button, Card } from 'react-bootstrap';
import { useState,useEffect } from "react";
import axios from 'axios';



function Display() {

  const [users, setUsers] = useState([]);
  const url = "http://localhost:9000/pic";
 useEffect(() => {
   axios.get(url).then((response) => {
      setUsers(response.data)
   }).catch((err) => {
      console.log(err)
   })
   }, [users])
   const userDelete = (id) => {
    axios.delete(`http://localhost:9000/${id}`).then((response) => {
        if (response.status === 200) {
        } else {
            alert("Network Error")
        }
    }).catch((err) => {
        alert("Server Error", err)
    })
}


//   return (
//     <div>
//         <h1>Pictures</h1>
//         { users && users.map((user) => {
//           return (
//             <div class="cards">
//         <Card style={{ width: '18rem' }} class="crd" >
//         <Card.Img variant="top" src={user.img} class="imgs"/>
//   <Card.Body>
//     <Button variant="primary" class="dbtn" onClick={() => userDelete(user._id)}>Delete</Button>
//   </Card.Body>
// </Card>
// </div>
//  )
// })
// }
//     </div>
//   )
// }
return (
  <div>
<ul class="cards">{
users && users.map((user) => {
  return (
  <li class="cards_item">
    <div class="card">
              <div class="card_image ims"><img src={user.img}/></div>
              <div class="card_content">
                <h2 class="card_title"></h2>
                <p class="card_text"></p>
                <button class="btn card_btn" onClick={() => userDelete(user._id)}>Delete</button>
              </div>
    </div>
  </li>
     )
    })
}

</ul>
</div>
)
}

export default Display