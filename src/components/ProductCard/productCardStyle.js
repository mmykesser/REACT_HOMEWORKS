export const productCardStyle = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  box: {
    position: 'relative',
    paddingTop: '100%',
    overflow: 'hidden',
  },
  cardMedia: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    backgroundColor: '#ffffff',
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    lineHeight: '1.2em',
    height: '2.4em',
  },
  description: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    flexGrow: 1,
  },
};

export const buttonStyle = {
  backgroundColor: '#e8573d',
  '&:hover': {
    backgroundColor: '#b64531',
  },
};
