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
                    <Col xs={2}>{title}</Col>
                    <Col xs={5}>{body}</Col>
                </Row>
               
           </Container>
        
        </div>
    ));
        return (
            <ul>
                Blog Posts
                {blogItems}
            </ul>
        );

}

export default BlogList