import React, { Component } from 'react';


class BackOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {

    // ***************** SET URL OF PAGES *****************
    // const setURLofPages = () => {
    //   let hrefWithoutFileName = location.href.replace(
    //     /\/[^\/]+?\.[^\/]+?$/,
    //     "/"
    //   );
    //   document.getElementById("home-link").href =
    //     hrefWithoutFileName + "index.html";
    // };

    // ***************** /SET URL OF PAGES *****************
    // const loadCurrentProduct = async () => {
    //   const response = await fetch(endpoint, {
    //     headers: {
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjE1ODE1MTMsImV4cCI6MTYyMjc5MTExM30.xX1bdh-kAI426pIAHwyGgERUwH-di9UXYWKK1-jFlvY",
    //     },
    //   });
    //   const data = await response.json();
    //   return data;
    // };

    // const displayCurrentProducts = (products) => {

    //   console.log("products:", products);

    //   document.querySelector("#name").value = products.name;
    //   document.querySelector("#description").value = products.description;
    //   document.querySelector("#brand").value = products.brand;
    //   document.querySelector("#imageUrl").value = products.imageUrl;
    //   document.querySelector("#price").value = products.price;
    // };

    // window.onload = async function () {
    //   setURLofPages();
    //   const searchParam = new URLSearchParams(location.search);
    //   id = searchParam.get("id");
    //   endpoint = "";
    //   if (id) {
    //     endpoint = "https://striveschool-api.herokuapp.com/api/product/" + id;
    //     document.getElementById("addNewProductBtn").remove();
    //     try {
    //       const products = await loadCurrentProduct();
    //       displayCurrentProducts(products);
    //     } catch (error) {
    //       alert(error.message);
    //     }
    //   } else {
    //     endpoint = "https://striveschool-api.herokuapp.com/api/product/";
    //     document.getElementById("editBtn").remove();
    //     document.getElementById("deleteBtn").remove();
    //   }
    // };

    // ***************** PUT METHOD *****************
    // const editFx = async () => {
    //   let ProductName = document.querySelector("#name").value;
    //   let ProductDescription = document.querySelector("#description").value;
    //   let ProductBrand = document.querySelector("#brand").value;
    //   let ProductImageURL = document.querySelector("#imageUrl").value;
    //   let ProductPrice = document.querySelector("#price").value;

    //   const editproduct = {
    //     name: ProductName,
    //     description: ProductDescription,
    //     brand: ProductBrand,
    //     imageUrl: ProductImageURL,
    //     price: ProductPrice,
    //   };
    //   try {
    //     const response = await fetch(endpoint, {
    //       method: "PUT",
    //       headers: {
    //         Authorization:
    //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjE1ODE1MTMsImV4cCI6MTYyMjc5MTExM30.xX1bdh-kAI426pIAHwyGgERUwH-di9UXYWKK1-jFlvY",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(editproduct),
    //     });
    //   } catch (error) {
    //     alert(error.message);
    //   }
    //   finally {
    //     alert("Product Successfully Edited");
    //   }
    // };

    // ***************** /PUT METHOD ****************

    // ***************** DELETE METHOD *****************
    // const deleteFx = async () => {
    //   let homePageLink = location.href.replace(/\/[^\/]+?\.[^\/]+?$/, "/") + "index.html";
    //   try {
    //     const response = await fetch(endpoint, {
    //       method: "DELETE",
    //       headers: {
    //         Authorization:
    //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjE1ODE1MTMsImV4cCI6MTYyMjc5MTExM30.xX1bdh-kAI426pIAHwyGgERUwH-di9UXYWKK1-jFlvY",
    //       },
    //     });
    //   } catch (error) {
    //     alert(error.message);
    //   }
    //   finally {
    //     alert("Product Successfully deleted");
    //     location.assign(homePageLink)
    //   }
    // };

    // ***************** /DELETE METHOD ****************

    // ***************** POST METHOD *****************
    //   const addNewProducts = async () => {
    //     event.preventDefault();
    //     const newProduct = {
    //       name: document.querySelector("#name").value,
    //       description: document.querySelector("#description").value,
    //       brand: document.querySelector("#brand").value,
    //       imageUrl: document.querySelector("#imageUrl").value,
    //       price: document.querySelector("#price").value,
    //     };

    //     try {
    //       const response = await fetch(endpoint, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           Authorization:
    //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjE1ODE1MTMsImV4cCI6MTYyMjc5MTExM30.xX1bdh-kAI426pIAHwyGgERUwH-di9UXYWKK1-jFlvY",
    //         },
    //         body: JSON.stringify(newProduct),
    //       });
    //       if (!response.ok) throw new Error("Failed to post");
    //       const data = await response.json();
    //       alert("Products added successfully with id " + data._id);
    //     } catch (error) {
    //       alert(error.message);
    //     }
    //   };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Amazon</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href id="home-link">Home</a>
              <a className="nav-link active" href="/">Back Office<span className="sr-only">(current)</span></a>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-6 mx-auto">
              <h1 className="text-center my-3">Back Office</h1>
              <form onsubmit="addNewProducts(event)">
                {/*Product Name*/}
                <label>Product Name</label>
                <input id="name" type="text" className="form-control" placeholder="Write here product name" required />
                {/*Product Description*/}
                <label>Product Description</label>
                <input id="description" type="text" className="form-control" placeholder="Write here product description" required />
                {/*Product brand*/}
                <label>Product Brand</label>
                <input id="brand" type="text" className="form-control" placeholder="Write here product brand" required />
                {/*Product imageUrl*/}
                <label>Product Image URL</label>
                <input id="imageUrl" type="text" className="form-control" placeholder="Write here product image Url" required />
                {/*Product Price*/}
                <label>Product Price</label>
                <input type="number" className="form-control" id="price" placeholder={0.00} required name="price" min={0} defaultValue={0} step="0.01" title="Currency" pattern="^\d+(?:\.\d{1,2})?$" />
                <div className="d-flex justify-content-around mb-4">
                  <button type="submit" className="btn btn-primary w-50" id="addNewProductBtn">
                    Add a new Product
            </button>
                  <button type="button" className="btn btn-primary" id="editBtn" style={{ width: 100 }} onclick="editFx()">
                    Save (Edit)
            </button>
                  <button type="button" className="btn btn-primary" id="deleteBtn" style={{ width: 100 }} onclick="deleteFx()">
                    Delete
            </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>





    );
  }
}

export default BackOffice;


