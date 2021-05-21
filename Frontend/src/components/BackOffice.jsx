import React, { Component } from 'react';
import '../styles/BackOffice.css';
import fetchGetProduct from '../services/fetchGetProduct';

import {
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class BackOffice extends Component {
  state = {
    editing: false,
    newProduct: {
      name: "",
      description: "",
      brand: "",
      imageUrl: "",
      price: "",
      category: ""
    }
  };

  componentDidMount = async () => {
    let idFromTheURL = this.props.match.params.productId ? this.props.match.params.productId.toString() : ""
    if (idFromTheURL) {
      const getProduct = await fetchGetProduct(idFromTheURL);
      this.setState({ id: idFromTheURL, editing: true, newProduct: getProduct });
    }
  }

  submitNewProduct = async (e) => {
    e.preventDefault();
    const endpoint = `http://127.0.0.1:3001/products/`;
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(this.state.newProduct),
      headers: new Headers({
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjE1ODE1MTMsImV4cCI6MTYyMjc5MTExM30.xX1bdh-kAI426pIAHwyGgERUwH-di9UXYWKK1-jFlvY",
        "Content-Type": "application/json",
      }),
    });
    if (response.ok) {
      alert("Product added");
      this.setState({
        newProduct: {
          product: "",
        },
      });
    } else {
      alert("An error has occurred");
    }
  };


  submitEdit = async (e) => {
    e.preventDefault();
    const endpoint = `http://127.0.0.1:3001/products/${this.state.id}`;
    const response = await fetch(endpoint, {
      method: "PUT",
      body: JSON.stringify(this.state.newProduct),
      headers: new Headers({
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjE1ODE1MTMsImV4cCI6MTYyMjc5MTExM30.xX1bdh-kAI426pIAHwyGgERUwH-di9UXYWKK1-jFlvY",
        "Content-Type": "application/json",
      }),
    });
    if (response.ok) {
      alert("Product edited");
      this.setState({
        newProduct: {
          product: "",
        },
      });
    } else {
      alert("An error has occurred");
    }
  };

  submitDelete = async (e) => {
    e.preventDefault();
    const endpoint = `http://127.0.0.1:3001/products/${this.state.id}`;
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: new Headers({
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjE1ODE1MTMsImV4cCI6MTYyMjc5MTExM30.xX1bdh-kAI426pIAHwyGgERUwH-di9UXYWKK1-jFlvY",
        "Content-Type": "application/json",
      }),
    });
    if (response.ok) {
      alert("Product deleted");
      this.setState({
        newProduct: {
          product: "",
        },
      });
    } else {
      alert("An error has occurred");
    }
  };

  render() {
    return (
      <Container className="my-3">
        <h2 className="text-center">Back Office</h2>
        <Form onSubmit={this.submitProduct}>
          <Form.Group className="my-3">
            <Form.Label>Product Name</Form.Label>
            <FormControl
              type="text"
              placeholder="Name"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                let newProduct = this.state.newProduct;
                newProduct.name = e.currentTarget.value;
                this.setState({ newProduct });
              }}
              value={this.state.newProduct.name}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Product Description</Form.Label>
            <FormControl
              type="text"
              placeholder="Description"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                let newProduct = this.state.newProduct;
                newProduct.description = e.currentTarget.value;
                this.setState({ newProduct });
              }}
              value={this.state.newProduct.description}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Product Brand</Form.Label>
            <FormControl
              type="text"
              placeholder="Brand"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                let newProduct = this.state.newProduct;
                newProduct.brand = e.currentTarget.value;
                this.setState({ newProduct });
              }}
              value={this.state.newProduct.brand}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Product Category</Form.Label>
            <FormControl
              type="text"
              placeholder="Category"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                let newProduct = this.state.newProduct;
                newProduct.category = e.currentTarget.value;
                this.setState({ newProduct });
              }}
              value={this.state.newProduct.category}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Product Image URL</Form.Label>
            <FormControl
              type="text"
              placeholder="Image URL"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                let newProduct = this.state.newProduct;
                newProduct.imageUrl = e.currentTarget.value;
                this.setState({ newProduct });
              }}
              value={this.state.newProduct.imageUrl}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Product Price</Form.Label>
            <FormControl
              type="number"
              placeholder="Price"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                let newProduct = this.state.newProduct;
                newProduct.price = e.currentTarget.value;
                this.setState({ newProduct });
              }}
              value={this.state.newProduct.price}
            />
          </Form.Group>
          {this.state.editing ?
            <>
              <Button variant="primary" onClick={this.submitEdit}>Edit Product</Button>
              <span> </span>
              <Button variant="primary" onClick={this.submitDelete}>Delete Product</Button>
            </>
            :
            <Button variant="primary" onClick={this.submitNewProduct}>Add a new Product</Button>
          }
        </Form>
      </Container>

    )
  }
}

export default BackOffice;


