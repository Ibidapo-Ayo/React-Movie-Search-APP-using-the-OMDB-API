import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";

function RawMovie() {
  const Movies = [
    {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Plot:
        "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Language: "English, Spanish",
      Country: "USA, UK",
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster:
        "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
    }
  ];
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="slider1">
            <div className="container">
              <div className="slider-details">
                <h1>Avatar</h1>
                <p>
                  Runtime: <i className="bx bx-time"></i> 162 min
                </p>
                <p className="overview">
                  Overview: A paraplegic marine dispatched to the moon Pandora
                  on a unique mission becomes torn between following his orders
                  and protecting the world he feels is his home.
                </p>
                <button className="play_btn">
                  <i className="bx bx-play"></i>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default RawMovie;
