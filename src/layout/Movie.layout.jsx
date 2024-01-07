import React from 'react'

//component
import MovieNavbar from '../components/Navbar/MovieNavbar.Component'

const MovielayoutHOC =
(Component) =>
({...props}) =>{
    return (
        <div>
        <MovieNavbar/>
        <Component {...props}/>
        <div>footer</div>
        </div>
    );
};

export default MovielayoutHOC