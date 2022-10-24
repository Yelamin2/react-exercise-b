import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';





function CRUDList({curdBlog}){

    
    console.log({curdBlog})
    const handleEdit= {}

    const handleDelete= {}

    const blogItems = curdBlog.map(({title, body,id}) => (
        <div key={id}>
            {/* <ul>
            <li>{title}</li>
            <li>{body}</li>
            </ul> */}
            <Container>
                <Row>
                    <Col xs={4}>{title}</Col>
                    <Col xs={8}>
                        <div>
                            <div>{body}</div>
                            <Button onClick={handleEdit}>Edit</Button>  
                            <Button onClick={handleDelete} >Delete</Button>
                        </div>
                        
                        </Col>
                </Row>
                <Row>
                    
                </Row>
               
           </Container>
        
        </div>


    ));
        return (
            <ul>
                {blogItems}
            </ul>
        );

}

export default CRUDList