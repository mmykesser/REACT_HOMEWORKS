import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Carousel from '../../components/Carousel';

const HomePage = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Carousel itemsPerSlide={4} autoPlayInterval={5000} />
    </div>
  );
};

export default HomePage;
