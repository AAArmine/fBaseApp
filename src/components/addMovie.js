import React, { useState } from "react";
import { addDoc } from "firebase/firestore";
import { moviesCollectionList } from "../App";

const AddMovie = ({ getMovies }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [oscar, setOscar] = useState(false);
  const handleSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionList, { title, releaseYear: year, oscar });
    getMovies();//we call this func here to make the parent component show the new added movie
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h3>Add Movie</h3>
      <input
        type="text"
        placeholder="Movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <div>
        <label htmlFor="oscar">Received oscar</label>
        <input
          type="checkbox"
          id="oscar"
          checked={oscar}
          onChange={(e) => setOscar(e.target.checked)}
        />
      </div>
      <button onClick={handleSubmitMovie}>Submit</button>
    </div>
  );
};

export default AddMovie;
