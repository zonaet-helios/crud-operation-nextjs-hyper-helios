import React from 'react'
import { Row } from 'react-bootstrap';
import Service from './Service';

const Services = ({users}) => {
    console.log(users);

  return (
    <div>
        <Row xs={1} md={3} className="g-4">
        {
            users.map(user=><Service key={user.id} user={user}></Service>)
        }
        </Row>
        
    </div>
  )
}

export default Services;

