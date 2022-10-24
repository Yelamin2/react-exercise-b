import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const INITIAL_PERSON= [{
        firstName:"",
        lastName:"",
        address:"",
        phone:"",
         }]

function Person({addPerson}){
    const [person, setPerson]= useState({INITIAL_PERSON});

    const handleChange = (e) => {
        setPerson((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
            
        }
        ));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(person,"add person") 
    //     addPerson(person);
    //     console.log('after addperson')
    //     setPerson({INITIAL_PERSON});
    //     console.log(person, "initial person2")
        
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
    //    if (blog.title == "" && blog.body==""){
    //     return
    //    }
        addPerson(person);
        
        setPerson({
            firstName:"",
            lastName:"",
            address:"",
            phone:"",
             });
    }


    

    return(
        <>
         <div>    
            <Form onSubmit={handleSubmit} >
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control 
                type="text"
                name="firstName" 
                placeholder="First name"
                value={person.firstName}
                onChange={handleChange}
                required
                 />
                </Form.Group>

                <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control 
                type="text" 
                name= "lastName"
                value={person.lastName}
                onChange={handleChange}
                required
                placeholder="Last name"
                 />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                type="text" 
                name= "address"
                placeholder="1234 Main St"
                value={person.address} 
                onChange={handleChange}/>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formPhone">
                <Form.Label>City</Form.Label>
                <Col sm="3">
                    <Form.Control 
                    type="tel" 
                    name= "phone"
                    placeholder="1111-222-1234"
                    value={person.phone}
                    onChange={handleChange}
                     />
                </Col>
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>   
        

        </>
    );


}

export default Person