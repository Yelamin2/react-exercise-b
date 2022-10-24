import React from 'react';
import { useState } from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import BlogList from "./components/BlogList/BlogList";
import BlogsForm from "./components/BlogsForm/BlogsForm";
import Person from "./components/Persons/Person";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import PersonsList from "./components/Persons/PersonList";
import ReadBlog from "./components/ReadBlog/ReadBlog";
import Blogs_CRUD from "./components/BlogsCRUD/Blogs_CRUD";
import {Row, Col, Container, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





function App() {
 
  
  const [persons, setPersons] = useState([{firstName:"",lastName:"", address:"", phone:""}]);
  const [blogs, setBlogs]=useState([{title:"",body:""}]);

  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  }
  const addBlog = (newBlog) => { 
    setBlogs([...blogs, newBlog]);
  }



  



  return (
    <>
   
    
   
  
    <div className="App">
    <Container>
                <Row>
                    <Col >

                      <Router>
                        <Menu />
                        <Routes>
                          <Route path = '/ReadBlog' element = {<ReadBlog/>}/>
                          <Route path = '/BlogsForm' element = {<><BlogsForm addBlog={addBlog}/><BlogList blogs={blogs}/></>}/>
                          <Route path = '/Blogs_CRUD' element = {<Blogs_CRUD/>}/>
                          <Route path = '/Person' element = {<><Person addPerson={addPerson}/><PersonsList persons={persons}/></>}/>
                          <Route path = '/Bookmarks' element = {<Bookmarks/>}/>
                          <Route path = '/PersonsList' element = {<PersonsList persons={persons}/>}/>
                        </Routes>
                      </Router>
                    </Col>
                </Row>
               
           </Container>

    </div>

    {/* <BlogsForm addBlog={addBlog}/>
    <BlogList blogs={blogs}/>
    <Person addPerson={addPerson}/>
    <PersonsList persons={persons}/>
    <ReadBlog />  */}
    
    

 

  </>

  
  );
}

export default App;
