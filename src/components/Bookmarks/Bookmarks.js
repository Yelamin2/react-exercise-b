
import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';


import {Row, Button, Form, Col, Container} from 'react-bootstrap';

function Bookmarks(){



    const [bookmark, setBookmark]=useState({url:"",type:"",description:""})
    const [bookmarkList, setBookmarkList]=useState([])

    const handleInput = (e) => {
        setBookmark({...bookmark, [e.target.name]:e.target.value});
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        setBookmarkList([...bookmarkList, bookmark]);
        console.log({bookmarkList})
        setBookmark({url:"",type:"",description:""});
    }

    const listItem= bookmarkList.map(({url,description, type}, index) => (
        <div key={index}>
            <Container>
                <Row>
                    <Col  xs={4}>
                        <Navbar.Brand href={url}>{description}</Navbar.Brand>
                    </Col>
                    <Col xs={2}>{type}</Col>
                </Row>
               
           </Container>
        </div>
    


    ));
    
    // const listGroup=(bookmarkList.map(({type}, index)=>
    //  key={index} );



    return(
        <>
        <Form onSubmit={handleSubmit}>
        <Row>
            <Col xs={5}>
            <Form.Control 
            placeholder="URL"
            value={bookmark.url}
            name="url"
            onChange={handleInput}
            required
             />
            </Col>
            <Col xs={2}>
            <Form.Control 
            placeholder="Type"
            value={bookmark.type}
            name="type"
            onChange={handleInput}
            required
            />
            </Col>
            <Col xs={4}>
            <Form.Control 
            placeholder="Description"
            value={bookmark.description}
            name="description"
            onChange={handleInput}
            />
            </Col>
            <Col xs={1}><Button variant="primary" type="submit">
                Submit
            </Button>
            </Col>
            
        </Row>
        </Form>
    
        <ul>
            {listItem}
        </ul>

        
        </>
    )

}

export default Bookmarks