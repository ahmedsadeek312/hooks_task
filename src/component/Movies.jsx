import React, { useRef, useState } from "react";
import FilmList from "./FilmList";

const Movies = () => {
  const [film_list, SetFilm_list] = useState([
    {
      title: "The Shawshank Redemption",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfVAuPN9qOG_52Kecu0nTDkKmMm5KZYUjPg&usqp=CAU",
      desc: "nice movie",
      rate: "5",
    },
    {
      title: "breaking bad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcLiWCuhGEVdZzKq1H3kJHETYjjqW8Bpmcg&usqp=CAU",
      desc: "nice movie",
      rate: "3",
    },
    {
      title: "breaking bad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcLiWCuhGEVdZzKq1H3kJHETYjjqW8Bpmcg&usqp=CAU",
      desc: "nice movie",
      rate: "2",
    },
    {
      title: "breaking bad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcLiWCuhGEVdZzKq1H3kJHETYjjqW8Bpmcg&usqp=CAU",
      desc: "nice movie",
      rate: "1",
    },
  ]);
  // add title dynamic
  const [inputName, setInputName] = useState("");
  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };
  // add image url dynamic
  const [inputImage, setInputImage] = useState("");
  const handleImageChange = (e) => {
    setInputImage(e.target.value);
  };
  // add desc dynamic
  const [inputDesc, setInputDesc] = useState("");
  const handleDescChange = (e) => {
    setInputDesc(e.target.value);
  };
  // add rate dynamic
  const [inputRate, setInputRate] = useState("");
  const handleRateChange = (e) => {
    setInputRate(e.target.value);
  };
  // const film_name_ref = useRef();
  // const film_desc_ref = useRef();
  // const film_rate_ref = useRef();
  // const film_image_ref = useRef();

  // const mytitle = film_name_ref.current.value;
  // const mydesc = film_desc_ref.current.value;
  // const myrate = film_rate_ref.current.value;
  // const myimage = film_image_ref.current.value;

  const [addMovie, setAddMovie] = useState([
    {
      title: inputName,
      desc: inputDesc,
      rate: inputRate,
      img: inputImage,
    },
  ]);

  const [opMovie, setOPMovie] = useState(film_list);

  const handleTextChange = (val) => {
    const filteredTextMovies = film_list.filter((movie) => {
      return movie.title.toLowerCase().includes(val.toLowerCase());
    });
    setOPMovie(filteredTextMovies);
  };

  const handleNumberChange = (val) => {
    const filteredNumberMovies = film_list.filter((movie) => {
      return movie.rate.includes(val);
    });
    setOPMovie(filteredNumberMovies);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputName);
    console.log(inputImage);
    console.log(inputDesc);
    console.log(inputRate);
    const add_movie = [...addMovie, []];
    setAddMovie(add_movie);
  };

  return (
    <div>
      <header>
        <p>your FavMovie </p>
      </header>
      <form>
        <div className="input_section">
          <p>enter film name : </p>
          <p>enter film image link : </p>
          <p>enter film description : </p>
          <input
            onChange={handleNameChange}
            value={inputName}
            className="input_1"
            type="text"
            // ref={film_name_ref}
            placeholder="film name"
          />
          <input
            onChange={handleImageChange}
            value={inputImage}
            className="input_2"
            type="text"
            // ref={film_image_ref}
            placeholder="image url"
          />
          <textarea
            onChange={handleDescChange}
            value={inputDesc}
            className="input_3"
            type="text"
            // ref={film_desc_ref}
            placeholder="film description"
          />
          <p className="p4">
            enter film rate <span>(from 1 to 5)</span> :{" "}
          </p>
          <input
            onChange={handleRateChange}
            value={inputRate}
            className="input_4"
            type="number"
            // ref={film_rate_ref}
            min={1}
            max={5}
          />
          <button type="submit" onClick={handleSubmit}>
            {" "}
            submit{" "}
          </button>
        </div>
      </form>
      <div className="search_section">
        <p>search by name : </p>
        <input onChange={(e) => handleTextChange(e.target.value)} type="text" />
        <p>search by rating : </p>
        <input
          onChange={(e) => handleNumberChange(e.target.value)}
          className="number_input"
          type="number"
          min={1}
          max={5}
        />
      </div>
      <div>
        {opMovie.map((film_list) => (
          <FilmList
            title={film_list.title}
            image={film_list.img}
            desc={film_list.desc}
            rate={film_list.rate}
          />
        ))}
        {addMovie.map((addMovie) => (
          <FilmList
            title={inputName}
            desc={inputDesc}
            image={inputImage}
            rate={inputRate}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
