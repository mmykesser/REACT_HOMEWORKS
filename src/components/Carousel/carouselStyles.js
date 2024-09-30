export const carouselStyles = {
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
  },
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
  },
  noProductsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
  },
  carouselContainer: {
    position: 'relative',
    width: '100%',
  },
  prevButton: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    zIndex: 10,
  },
  nextButton: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    zIndex: 10,
  },
  gridContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
};
