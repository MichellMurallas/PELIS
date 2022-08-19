import { useEffect, useState } from "react";
import { useQuery } from "./Hooks/UseQuery";
import { get } from "../Utils/HttpClients";
import { MovieCard } from "./MovieCard";
//import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const query = useQuery();
  const search = query.get("search");

  useEffect(() =>{

  },[search] )

  useEffect(() => {
    setIsLoading(true)
    const searchUrl = search 
  ? "/search/movie?query=" + search + "&page=" + page
  : "/discover/movie?page=" + page;
    get(searchUrl).then((data)=> {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false)
    });
  }, [search, page]);

  //const location = useLocation();

  return (
    <InfiniteScroll 
    dataLength={movies.length} 
    hasMore={hasMore}
    next={() => setPage((prevPage)=> prevPage +1) } 
    loader={ <Spinner /> }>

    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
    </InfiniteScroll>
  );
}
