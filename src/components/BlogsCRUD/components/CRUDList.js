import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function CRUDList({curdBlog}){
    console.log({curdBlog})

    const blogItems = curdBlog.map(({title, body}, index) => (
        <div key={index}>
            {/* <ul>
            <li>{title}</li>
            <li>{body}</li>
            </ul> */}
            <Container>
                <Row>
                    <Col xs={3}>{title}</Col>
                    <Col xs={7}>{body} ,\n</Col>
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