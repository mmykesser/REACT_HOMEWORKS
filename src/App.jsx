import Carousel from './components/Carousel.jsx';
import firstImage from './img/first.jpg';
import secondImage from './img/second.jpg';
import thirdImage from './img/third.jpg';

function App() {
  const img = [firstImage, secondImage, thirdImage];
  return (
    <div className="App">
      <Carousel img={img} />
    </div>
  );
}

export default App;
