import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//HOC
import MovielayoutHOC from "../layout/Movie.layout";
import { MovieContext } from "../context/Movie.context";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import MovieHero from "../components/MovieHero/MovieHero.Component";

const MoviePage = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);
  const [cast, setCast] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const [recommendedMovies, setRecommendedMovies] = useState();

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(
        `/movie/${id}/`
      );
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id]);


  const settingsCast = {};

  const settings = {};

  return (
    <>
      {/*<MovieHero/>*/}
      <div className="my-12 container px-4 ml:ml-20 lg:w-2/1">
        <div className="text-gray-800 font-bold gap-3">
          <h1>About the movie</h1>
          <p>{movie.Overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3>Visa Stream Offer</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3>Film Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/*cast n crew slider */}

        <div className="my-8">
          <hr />
        </div>

        {/*recommended movie slider */}
       <div className="my-8">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
  </div>

        <div className="my-8">
          <hr />
        </div>

        {/*exclusive slider */}
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="BMS XCLUSICE"
            posters={similarMovies}
            isDark={false}
          />
  </div>
      </div>
    </>
  );
};
export default MovielayoutHOC(MoviePage);
