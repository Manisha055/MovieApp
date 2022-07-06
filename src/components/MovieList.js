import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieList({ movie }) {
  const [users, setUsers] = useState([]);

  const getMovie = async () => {
    const url =
      await fetch`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743`;
    console.log(url);
    const data = await url.json();
    console.log("HelloManish", data);
    if (data) {
      setUsers(data.results);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
    <div className="container-fluid mt-5 ml-5"> 
        <div className="row">
          {users &&
            users.map((obj) => {
              return (
                <div className="col-10 col-md-3 mt-5 ml-5">
                  <div
                    className="card p-0"
                    style={{ height: "87%", width: "13vw",marginLeft:'100px',backgroundColor:"#31373D" }}
                  >
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + obj.poster_path}
                      alt="card image"
                    />
                  </div>
                  <div class="cardtext ">
                    <p className="texttitle">{obj.title}</p>
                    <p className="rate">Rating:{obj.vote_average}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default MovieList;
