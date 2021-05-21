import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import BackOffice from './components/BackOffice';
import './App.css';
import Home from './components/Home';
import fetchProducts from './services/fetchProducts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  state = {
    products: [],
  };
  componentDidMount = async () => {
    const getProducts = await fetchProducts();
    this.setState({ products: getProducts });
  };
  render() {
    return (
      <Router>
        <MyNavbar />
        <Switch>
          <Container>
            <Route path="/" exact>
              <Home products={this.state.products}/>
            </Route>
            <Route path="/backoffice" exact>
              <BackOffice />
            </Route>
            <Route path="/detail" exact>
            </Route>
          </Container>
        </Switch>
      </Router>
    );
  }
}

export default App;
