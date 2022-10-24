import { useState } from "react"
import { useAccordionButton } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const INITIAL_BLOG = [
    {
        id: 4,
        title:"Looking for the dot!!",
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis erat id neque consequat pharetra. Quisque ultricies ante quis sollicitudin elementum. Mauris pharetra lacus sed dictum mattis. Quisque fringilla felis at mauris vestibulum lobortis. Cras laoreet massa eu erat ullamcorper ultricies. Maecenas sit amet quam eget dui eleifend rhoncus. Aliquam pretium leo nec sem auctor ornareCurabitur vehicula venenatis nisi, a molestie nibh tempus vitae. Donec sagittis finibus est, vel congue dolor aliquet a. Nunc dapibus pretium arcu, eu efficitur ipsum aliquet et. Donec posuere lorem ut ex rhoncus porta. Donec eu nulla vitae ex pretium posuere. Praesent sed eros volutpat, porta nulla non, efficitur mi. In convallis maximus erat, ac aliquam felis ultrices id. Nulla facilisi. Donec vitae diam nec turpis bibendum vulputate quis eget nisl. Donec elementum felis a efficitur rutrum. Suspendisse mollis lobortis dolor eu maximus. Donec at eleifend mauris, ut mattis dui. Fusce rutrum rutrum tortor a feugiat. Sed id arcu id ipsum convallis ullamcorper. "
     },

    {
        id: 5,
        title:"Why I changed the bulb?",
        blog: "Curabitur vehicula venenatis nisi, a molestie nibh tempus vitae. Donec sagittis finibus est, vel congue dolor aliquet a. Nunc dapibus pretium arcu, eu efficitur ipsum aliquet et. Donec posuere lorem ut ex rhoncus porta. Donec eu nulla vitae ex pretium posuere. Praesent sed eros volutpat, porta nulla non, efficitur mi. In convallis maximus erat, ac aliquam felis ultrices id. Nulla facilisi. Donec vitae diam nec turpis bibendum vulputate quis eget nisl. Donec elementum felis a efficitur rutrum. Suspendisse mollis lobortis dolor eu maximus. Donec at eleifend mauris, ut mattis dui. Fusce rutrum rutrum tortor a feugiat. Sed id arcu id ipsum convallis ullamcorper."
    },

    {
        id: 2,
        title:"When I reached the end of my thread?",
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis erat id neque consequat pharetra. Quisque ultricies ante quis sollicitudin elementum. Mauris pharetra lacus sed dictum mattis. Quisque fringilla felis at mauris vestibulum lobortis. Cras laoreet massa eu erat ullamcorper ultricies. Maecenas sit amet quam eget dui eleifend rhoncus. Aliquam pretium leo nec sem auctor ornareCurabitur vehicula venenatis nisi, a molestie nibh tempus vitae. Donec sagittis finibus est, vel congue dolor aliquet a. Nunc dapibus pretium arcu, eu efficitur ipsum aliquet et. Donec posuere lorem ut ex rhoncus porta. Donec eu nulla vitae ex pretium posuere. Praesent sed eros volutpat, porta nulla non, efficitur mi. In convallis maximus erat, ac aliquam felis ultrices id. Nulla facilisi. Donec vitae diam nec turpis bibendum vulputate quis eget nisl. Donec elementum felis a efficitur rutrum. Suspendisse mollis lobortis dolor eu maximus. Donec at eleifend mauris, ut mattis dui. Fusce rutrum rutrum tortor a feugiat. Sed id arcu id ipsum convallis ullamcorper. "
     },
     {
        id: 3,
        title:"Finding the missing comma!!",
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis erat id neque consequat pharetra. Quisque ultricies ante quis sollicitudin elementum. Mauris pharetra lacus sed dictum mattis. Quisque fringilla felis at mauris vestibulum lobortis. Cras laoreet massa eu erat ullamcorper ultricies. Maecenas sit amet quam eget dui eleifend rhoncus. Aliquam pretium leo nec sem auctor ornareCurabitur vehicula venenatis nisi, a molestie nibh tempus vitae. Donec sagittis finibus est, vel congue dolor aliquet a. Nunc dapibus pretium arcu, eu efficitur ipsum aliquet et. Donec posuere lorem ut ex rhoncus porta. Donec eu nulla vitae ex pretium posuere. Praesent sed eros volutpat, porta nulla non, efficitur mi. In convallis maximus erat, ac aliquam felis ultrices id. Nulla facilisi. Donec vitae diam nec turpis bibendum vulputate quis eget nisl. Donec elementum felis a efficitur rutrum. Suspendisse mollis lobortis dolor eu maximus. Donec at eleifend mauris, ut mattis dui. Fusce rutrum rutrum tortor a feugiat. Sed id arcu id ipsum convallis ullamcorper. "
     }

]

function ReadBlog(){

    const [readBlog, setReadBlog]= useState(INITIAL_BLOG)

    const title = INITIAL_BLOG.map((readBlog) => (
        <p key={readBlog.id} onClick = { () => setReadBlog(readBlog)}>
            {readBlog.title}
        </p>

    ));

    return(
        <>
        <Container>
                <Row>
                    <Col xs={3}>{title}</Col>
                    
                    <Col xs={7}>{readBlog && (
                  <>
                  <h2>{readBlog.title}</h2>
                  <p>{readBlog.blog}</p>
                </>  
                )}</Col>
                </Row>
               
           </Container>
        
        </>

    );
}

export default ReadBlog