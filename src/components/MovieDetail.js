import PropTypes from "prop-types";

function MovieDetail({coverImg, titleYear, rating, runtime,descption, genres}) {
  return (
    <div>
      <h2>
        {titleYear}
      </h2>
      <img src={coverImg} alt={titleYear}></img><br/>
      {genres.map((g) => (<span key={g}>{`${g}  `}</span>))}
      <h5>{`rating: ${rating}`}</h5>
      <h5>{`runtime: ${runtime} mins`}</h5>
      <hr />
      <p>{descption}</p>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  titleYear: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  descption: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;