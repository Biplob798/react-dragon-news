import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types, no-unused-vars
const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    details,
    rating,
    total_view,
    author,
    thumbnail_url,
    image_url,
  } = news;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl mb-6 p-4">
        <figure>
          <img className="" src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link
                to={`/news/${_id}`}
                className="font-bold text-xl text-red-500"
              >
                Read More...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

// NewsCard.propTypes = {
//   news: PropTypes.object,
// };
