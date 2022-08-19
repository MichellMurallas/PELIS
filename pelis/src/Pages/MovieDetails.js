import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../Components/Spinner";
import { get } from "../Utils/HttpClients";
import styles from "./MovieDetails.module.css";

export function MovieDetails (){
    const {movieId}=useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] =useState(null);

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data)=>{
      setMovie(data);
      setIsLoading(false);
        
    })
  }, [movieId]);

  if(isLoading){
    return <Spinner />
  }


    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <div className={styles.detailsContainer}>
            <img 
            className={`${styles.col} ${styles.movieImage}`}
            src={imageUrl} 
            alt={movie.title} 
            />
            
            <div className={`${styles.col} ${styles.movieDetails}}`}> 
                <p className={styles.firsItem}>
                    <trong>Title:</trong> {movie.title}
                </p>
                <p>
                <strong>Genres:</strong> {" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p>
                
                    <strong>Description: </strong> {movie.overview}
                    </p>
                
            </div>
        </div>

    );
};