import React from 'react';
import Search from "../../assets/search.svg"
import { Link } from 'react-router-dom';
import LibraryCard from "../StaticPages/LibraryCard"
import BookCard from "../StaticPages/BookCard"
import GenreCard from "../StaticPages/GenreCard"
const  Explore = (props) => {
  console.log(props)
  return (
    <div className="component-div">
      <div className="explore-left">
        <h3 className="explore-heading">Explore</h3>
        <form className="input" method="post">
          <input style={{ border: "0px", width: "90%", height: "20px", marginLeft: "10px" }} className="search-input" name="search" type="text" placeholder="ABC" />
          <button type="submit" className="search-button">
            <img width="60%" alt="search" src={Search} />
          </button>
        </form>
        <div className="data-div">
          <div className="data-container">
            <div className="data-heading">
              <h3 style={{ color: "#242126" }}>Libraries</h3>
              <Link className="nav-style" style={{ color: "#242126" }} to="#">See more</Link>
            </div>
            <div className="card-css">
              <LibraryCard />
              <LibraryCard />
              <LibraryCard />
              <LibraryCard />
              <LibraryCard />
            </div>
          </div>
          <div className="data-container">
            <div className="data-heading">
              <h3 style={{ color: "#242126" }}>Books</h3>
              <Link className="nav-style" style={{ color: "#242126" }} to="#">See more</Link>
            </div>
            <div className="card-css">
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
            </div>
          </div>
          <div className="data-container">
            <div className="data-heading">
              <h3 style={{ color: "#242126" }}>Genres</h3>
              <Link className="nav-style" style={{ color: "#242126" }} to="#">See more</Link>
            </div>
            <div className="card-css">
              <GenreCard />
              <GenreCard />
              <GenreCard />
              <GenreCard />
              <GenreCard />
            </div>
          </div>
        </div>
      </div>
      <div className="explore-right">right</div>
    </div>
  );
}

export default Explore;
