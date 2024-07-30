import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import PostCatalog from './components/PostsCatalog';

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await request.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12}>
            <PostCatalog data={posts} itemTitle="title" itemBody="body" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
