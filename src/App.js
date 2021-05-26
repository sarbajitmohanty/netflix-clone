import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";

//9fa97ce22b1157cfeb46a1c36c86a366
//https://api.themoviedb.org/3/movie/550?api_key=9fa97ce22b1157cfeb46a1c36c86a366

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOroginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
