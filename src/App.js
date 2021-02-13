
import './App.css';
import Row from './Row'
import request from './request'
import Banner from './Banner'
import Nav from './Nav'
function App() {
 
  return (
    <div className="App">
      <Nav />
     <Banner />

    <Row title="Netflix originals" isLargeRow  fetchURL={request.fetchNetflixOriginals}/>
    <Row title="Trending Now" fetchURL={request.fetchTrending} />
    <Row title="Top Rated" fetchURL={request.fetchTopRated} />
    <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
    <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
    <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
    <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />
    

    </div>
  );
}

export default App;




//API KEY
//b93e832eb565674e0b557aa43b6c6f30

//Example API KEY
//https://api.themoviedb.org/3/movie/550?api_key=b93e832eb565674e0b557aa43b6c6f30