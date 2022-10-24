import React, { useState } from "react"
import CRUDForm from "./components/CRUDForm"
import CRUDList from "./components/CRUDList"
import {Row, Button, Form, Col, Container} from 'react-bootstrap';
import { nanoid } from 'nanoid'


const INITIAL_BLOG = [
    {
        id: 4,
        title:"Looking for the dot!!",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis erat id neque consequat pharetra. Quisque ultricies ante quis sollicitudin elementum. Mauris pharetra lacus sed dictum mattis. Quisque fringilla felis at mauris vestibulum lobortis. Cras laoreet massa eu erat ullamcorper ultricies. Maecenas sit amet quam eget dui eleifend rhoncus. Aliquam pretium leo nec sem auctor ornareCurabitur vehicula venenatis nisi, a molestie nibh tempus vitae. Donec sagittis finibus est, vel congue dolor aliquet a. Nunc dapibus pretium arcu, eu efficitur ipsum aliquet et. Donec posuere lorem ut ex rhoncus porta. Donec eu nulla vitae ex pretium posuere. Praesent sed eros volutpat, porta nulla non, efficitur mi. In convallis maximus erat, ac aliquam felis ultrices id. Nulla facilisi. Donec vitae diam nec turpis bibendum vulputate quis eget nisl. Donec elementum felis a efficitur rutrum. Suspendisse mollis lobortis dolor eu maximus. Donec at eleifend mauris, ut mattis dui. Fusce rutrum rutrum tortor a feugiat. Sed id arcu id ipsum convallis ullamcorper. "
     },

    {
        id: 5,
        title:"Why I changed the bulb?",
        body: "Curabitur vehicula venenatis nisi, a molestie nibh tempus vitae. Donec sagittis finibus est, vel congue dolor aliquet a. Nunc dapibus pretium arcu, eu efficitur ipsum aliquet et. Donec posuere lorem ut ex rhoncus porta. Donec eu nulla vitae ex pretium posuere. Praesent sed eros volutpat, porta nulla non, efficitur mi. In convallis maximus erat, ac aliquam felis ultrices id. Nulla facilisi. Donec vitae diam nec turpis bibendum vulputate quis eget nisl. Donec elementum felis a efficitur rutrum. Suspendisse mollis lobortis dolor eu maximus. Donec at eleifend mauris, ut mattis dui. Fusce rutrum rutrum tortor a feugiat. Sed id arcu id ipsum convallis ullamcorper."
    },

    {
        id: 2,
        title:"When I reached the end of my thread?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis erat id neque consequat pharetra. Quisque ultricies ante quis sollicitudin elementum. Mauris pharetra lacus sed dictum mattis. Quisque fringilla felis at mauris vestibulum lobortis. Cras laoreet massa eu erat ullamcorper ultricies. Maecenas sit amet quam eget dui eleifend rhoncus. Aliquam pretium leo nec sem auctor ornareCurabitur vehicula venenatis nisi, a molestie nibh tempus vitae. Donec sagittis finibus est, vel congue dolor aliquet a. Nunc dapibus pretium arcu, eu efficitur ipsum aliquet et. Donec posuere lorem ut ex rhoncus porta. Donec eu nulla vitae ex pretium posuere. Praesent sed eros volutpat, porta nulla non, efficitur mi. In convallis maximus erat, ac aliquam felis ultrices id. Nulla facilisi. Donec vitae diam nec turpis bibendum vulputate quis eget nisl. Donec elementum felis a efficitur rutrum. Suspendisse mollis lobortis dolor eu maximus. Donec at eleifend mauris, ut mattis dui. Fusce rutrum rutrum tortor a feugiat. Sed id arcu id ipsum convallis ullamcorper. "
     },
     {
        id: 3,
        title:"Finding the missing comma!!",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis erat id neque consequat pharetra. Quisque ultricies ante quis sollicitudin elementum. Mauris pharetra lacus sed dictum mattis. Quisque fringilla felis at mauris vestibulum lobortis. Cras laoreet massa eu erat ullamcorper ultricies. Maecenas sit amet quam eget dui eleifend rhoncus. Aliquam pretium leo nec sem auctor ornareCurabitur vehicula venenatis nisi, a molestie nibh tempus vitae. Donec sagittis finibus est, vel congue dolor aliquet a. Nunc dapibus pretium arcu, eu efficitur ipsum aliquet et. Donec posuere lorem ut ex rhoncus porta. Donec eu nulla vitae ex pretium posuere. Praesent sed eros volutpat, porta nulla non, efficitur mi. In convallis maximus erat, ac aliquam felis ultrices id. Nulla facilisi. Donec vitae diam nec turpis bibendum vulputate quis eget nisl. Donec elementum felis a efficitur rutrum. Suspendisse mollis lobortis dolor eu maximus. Donec at eleifend mauris, ut mattis dui. Fusce rutrum rutrum tortor a feugiat. Sed id arcu id ipsum convallis ullamcorper. "
     }

]

function Blogs_CRUD(){
   
    const [curdBlog, setCurdBlog]=useState(INITIAL_BLOG)


    const addFormBlog = (newFormBlog) => { 
        setCurdBlog([...curdBlog, newFormBlog]);
      }

    const titleBlog =  (curdBlog).map((curdBlog) => (
        <p key= {curdBlog.id} >
            {curdBlog.title}
        </p>
    ));


      console.log(CRUDList.title , curdBlog , titleBlog)
      return(
        <>
         <Form className="col-md-12" >
           
            
           <Row >
              <Col xs-4><CRUDForm addFormBlog={addFormBlog}/></Col>
              <Col xs-8><CRUDList curdBlog={curdBlog}/></Col> 
           </Row>
           
       </Form>
        
        
      
           
        </>
      )

}
export default Blogs_CRUD