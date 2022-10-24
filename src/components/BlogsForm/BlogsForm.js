import React from "react";
import { useState } from "react";
import {Row, Col, Form, Container, Button} from 'react-bootstrap';

function BlogsForm({addBlog}){
    const [blog, setBlog] = useState({title:"", body:""});
   

    const handleInput = (e) => {
        setBlog((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       if (blog.title == "" && blog.body==""){
        return
       }
        addBlog(blog);
        setBlog({title:"", body:""});
    }

    return(
        <>
        <Form onSubmit={handleSubmit} className="col-md-5" >
           
            
            <Row className="mb-2">
                <Form.Group as={Col} controlId="title">
                <Form.Label>Blog title</Form.Label>
                <Form.Control 
                type="text"
                name="title" 
                placeholder=" "
                value={blog.title}
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
                value={blog.body}
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

export default BlogsForm