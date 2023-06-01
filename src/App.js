import { useEffect, useState } from "react";
import Auth from "./components/auth";
import Login from "./components/login";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";
import AddMovie from "./components/addMovie";
export const moviesCollectionList = collection(db, "movies"); //name the collection
function App() {
  const [movieList, setMovieList] = useState([]);
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionList);

        const filteredData = data.docs.map((movie) => ({
          ...movie.data(),
          id: movie.id,
        }));
        setMovieList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
  useEffect(() => {
    getMovieList();
  }, [moviesCollectionList]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MovieList</h1>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <h3 style={{ color: movie.oscar ? "green" : "blue" }}>
              {movie.title}
            </h3>
            <p>{movie.releaseYear}</p>
          </div>
        ))}
        <Auth />
        <Login />
        <AddMovie getMovies={getMovieList} />
      </header>
    </div>
  );
}

export default App;
