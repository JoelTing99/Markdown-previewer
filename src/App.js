import React from 'react';
import { Container, Col, Row, Badge } from 'react-bootstrap';
import { marked } from 'marked';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);


    /*a header (H1 size), 
    a sub header (H2 size), 
    a link, inline code, a code block, 
    a list item, 
    a blockquote, an image, 
    and bolded text*/
    this.state = {
      inputText: "# H1\n## H2\n[title](https://www.example.com)\n`code`\n```\nsomthing\n```\n1. First item\n2. Second item\n3. Third item\n> blockquote\n![alt text](image.jpg)\n**bold text**"
    }

    this.handleTextChange = this.handleTextChange.bind(this);

    marked.setOptions({
      breaks: true,
    })
  }

  handleTextChange = (event) => {
    this.setState({
      inputText: event.target.value,
    })

    
  }

  

  render() {
    return (
      <Container fluid className='text-center p-2'>
        <h1>
          <Badge>Markdown Previewer</Badge>
        </h1>
        <Row className='my-4'>
          <Col sm={6}>
            <h4>
              <Badge>Editor</Badge>
            </h4>
            <textarea id='editor'
             onChange={this.handleTextChange} 
             value={this.state.inputText}
            ></textarea>
          </Col>

          <Col sm={6}>
            <h4>
              <Badge className=''>Previewer</Badge>
            </h4>
            <div id='preview'
             dangerouslySetInnerHTML={{
            __html:marked(this.state.inputText) 
               }}>

            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}


