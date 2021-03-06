import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import BackOffice from './components/BackOffice';
import Home from './components/Home';
import Detail from './components/Detail';
import fetchGetProducts from './services/fetchGetProducts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  state = {
    products: [],
  };
  componentDidMount = async () => {
    const getProducts = await fetchGetProducts();
    this.setState({ products: getProducts });
  };
  render() {
    return (
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/" exact> <Home products={this.state.products} /> </Route>
          <Route path="/backoffice" exact render={(props) => <BackOffice {...props} />} />
          <Route path="/backoffice/:productId" render={(props) => <BackOffice {...props} />} />
          <Route path="/detail/:productId" exact render={(props) => <Detail {...props} />} />
        </Switch >
      </Router >
    );
  }
}

export default App;
