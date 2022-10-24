
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PersonsList({persons}){
    console.log({persons});
    const personItems = persons.map(({firstName,lastName, address, phone}, index) => (
        <div key={index}>
            <Container>
      <Row>
        <Col>
            <ul>
                <li>{firstName}   {lastName}</li>
                <li>{address}</li>
                <li>{phone}</li>
            </ul>
        </Col>
      </Row>
    </Container>
            
            
        </div>
    ));
        return (
            <ul>
                {personItems}
            </ul>
        );

}

export default PersonsList