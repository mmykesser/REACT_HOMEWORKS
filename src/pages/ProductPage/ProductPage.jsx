import { useParams } from 'react-router-dom';
import { useGetSingleProduktQuery } from '../../store/slicesApi/fakeStoreApi';
import SingleProduct from '../../components/SingleProduct';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import { Box } from '@mui/material';

const ProductPage = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetSingleProduktQuery(productId);

  return (
    <Box>
      <Header />
      <SearchBar />
      <Box sx={{ padding: 4, backgroundColor: '#fff' }}>
        <SingleProduct product={product} isLoading={isLoading} error={error} />
      </Box>
    </Box>
  );
};

export default ProductPage;
