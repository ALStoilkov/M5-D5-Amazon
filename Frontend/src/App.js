import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
// import BackOffice from './components/BackOffice';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div>
      <MyNavbar />
      <Home />
      {/* <BackOffice /> */}
    </div>
  );
}

export default App;
