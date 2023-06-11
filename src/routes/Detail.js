import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

import MovieDetail from "../components/MovieDetail.js"

function Detail() {
  const {id} = useParams() // 중괄호로 변수 하나씩 저장 가능
  console.log(id);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async() => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    console.log(movie);
    setLoading(false);
  };
  useEffect(()=> {getMovie();}, []);

  return (
    <div>
      {loading ? <strong>Loading...</strong> : 
        <div>
          <MovieDetail
            coverImg={movie.medium_cover_image}
            titleYear={movie.title_long}
            rating={movie.rating}
            runtime={movie.runtime}
            descption={movie.description_intro}
            genres={movie.genres}
          />
        </div>
      }
    </div>
  );
}
export default Detail;