import './App.css';
import Row from './Row';
import requests from './requests';

//9fa97ce22b1157cfeb46a1c36c86a366
//https://api.themoviedb.org/3/movie/550?api_key=9fa97ce22b1157cfeb46a1c36c86a366


function App() {
  return (
    <div className="App">
      <h1>Netflix-Clone</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOroginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
