import MarkdownEditor from './components/MarkdownEditor.jsx';
import { Col, Container, Row } from 'react-bootstrap';

const handleChange = (content) => {
  console.log(content);
};

function App() {
  return (
    <Container>
      <Col xs={12}>
        <Row>
          <div className="App">
            <h1 className="text-center mb-4">Markdown Editor</h1>
            <MarkdownEditor contentChange={handleChange} />
          </div>
        </Row>
      </Col>
    </Container>
  );
}

export default App;
