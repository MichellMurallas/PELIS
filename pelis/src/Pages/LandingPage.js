import { useQuery } from "../Components/Hooks/UseQuery";
import { MoviesGrid } from "../Components/MoviesGrid";
import { Search } from "../Components/Search";

export function LandingPage(){

  const query = useQuery();
  const search =query.get("search");
    return(
        <div>
          <Search />
        <MoviesGrid key={search} />
        </div>
    )
}