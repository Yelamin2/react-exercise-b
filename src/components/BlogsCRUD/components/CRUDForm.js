import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid'
import {Row, Col, Form, Container, Button} from 'react-bootstrap';

function CRUDForm({addFormBlog}){
    const [formBlog, setFormBlog] = useState({id:"",title:"", body:""});
   

    const handleInput = (e) => {
        setFormBlog((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        formBlog.id = nanoid(6);
        console.log({formBlog})
       if (formBlog.title == "" && formBlog.body==""){
        return
       }
        addFormBlog(formBlog);
        setFormBlog({title:"", body:""});
    }

    return(
        <>
            
        <Form onSubmit={handleSubmit} className="col-md-8" >
           
            
           <Row className="mb-2">
               <Form.Group as={Col} controlId="title">
               <Form.Label>Blog title</Form.Label>
               <Form.Control 
               type="text"
               name="title" 
               placeholder=" "
               value={formBlog.title}
               onChange={handleInput}
               required
                />
               </Form.Group>
           </Row>
           <Row className="mb-3">
               <Form.Group as={Col} controlId="body">
               
               <Form.Control 
               as="textarea" 
               name= "body"
               value={formBlog.body}
               onChange={handleInput}
               required
               placeholder=" "
                />
               </Form.Group>
           </Row>
           <Button variant="primary" type="submit" className="mb-5">Submit</Button>
       </Form>
       
       
        </>

    );

    
}

export default CRUDForm