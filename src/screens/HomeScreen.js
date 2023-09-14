import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/*Nav Bar */}
      <Nav></Nav> 
      
      {/*Bannner */}
      <Banner></Banner>

      {/*Rows */}
      <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow/> 
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} /> 
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} /> 
      <Row title="Action Moives" fetchURL={requests.fetchActionMovies} /> 
      <Row title="Comdey Movies" fetchURL={requests.fetchComedyMovies} /> 
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} /> 
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} /> 
      <Row title="Documnentaries" fetchURL={requests.fetchDocumentaries} /> 
    </div>
  );
}

export default HomeScreen;