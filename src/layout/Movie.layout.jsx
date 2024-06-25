import React from "react";

// component
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

const MovielayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
      </div>
    );
  };

export default MovielayoutHoc;
