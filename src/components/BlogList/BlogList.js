import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function BlogList({blogs}){
    console.log({blogs})

    const blogItems = blogs.map(({title, body}, index) => (
        <div key={index}>
            {/* <ul>
            <li>{title}</li>
            <li>{body}</li>
            </ul> */}
            <Container>
                <Row>
                    <Col xs={3}>{title}</Col>
                    <Col xs={7}>{body}</Col>
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

export default BlogList