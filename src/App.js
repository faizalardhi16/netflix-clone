import React from 'react'
import './App.css';
import Row from './Row'
import requests from './request'
import Banner from './Banner'
import Nav from './Nav'


function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row 
      title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginal}
      isLargeRow={true}
      />
      <Row title="Trending Films" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovie}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumenterMovie}/>
    </div>
  );
}

export default App;
