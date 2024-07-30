import PropTypes from 'prop-types';

const PostCatalog = ({ data, itemTitle, itemBody }) => {
  return (
    <div className="posts">
      <ul className="postslist">
        {data.map((item, index) => (
          <li
            className="posts_single-post "
            data-post-id={item.id}
            key={item.id + '_' + index}
          >
            <h3 className="postspost-title">{item[itemTitle]}</h3>
            <p className="postspost-description">{item[itemBody]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

PostCatalog.propTypes = {
  data: PropTypes.array.isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemBody: PropTypes.string.isRequired,
};

export default PostCatalog;
