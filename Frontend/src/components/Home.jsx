import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        // // ***************** SET URL OF PAGES *****************
        // const setURLofPages = () => {
        //     backofficePageLink =
        //         location.href.replace(/\/[^\/]+?\.[^\/]+?$/, "/") + "backoffice.html";
        //     document.getElementById("backoffice-link").href = backofficePageLink;
        // };
        // // ***************** /SET URL OF PAGES *****************

        // // ***************** GET METHOD *****************
        // let endpoint = "https://striveschool-api.herokuapp.com/api/product/";
        // window.onload = async function () {
        //     document.getElementById("LoadingSpinner").classList.remove("d-none");
        //     setURLofPages();
        //     try {
        //         const products = await loadProducts();
        //         displayProducts(products);
        //     } catch (error) {
        //         alert(error.message);
        //     }
        // };

        // const loadProducts = async () => {
        //     const response = await fetch(endpoint, {
        //         headers: {
        //             Authorization:
        //                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjE1ODE1MTMsImV4cCI6MTYyMjc5MTExM30.xX1bdh-kAI426pIAHwyGgERUwH-di9UXYWKK1-jFlvY",
        //         },
        //     });
        //     const data = await response.json();
        //     return data;
        // };

        // const displayProducts = (products) => {
        //     let detailPageLink =
        //         location.href.replace(/\/[^\/]+?\.[^\/]+?$/, "/") + "detail.html";

        //     console.log("products:", products);
        //     let productsTable = document.querySelector("#products-table > tbody");
        //     productsTable.innerHTML = "";
        //     products.forEach((product) => {
        //         productsTable.innerHTML += `
        //    <tr>
        //       <td>${product._id}</td>
        //       <td><img src="${product.imageUrl}" class="img-fluid"></td>
        //       <td>${product.name}</td>
        //       <td>${product.description}</td>
        //       <td>${product.brand}</td>
        //       <td>$${product.price}</td>
        //       <td><a href="${detailPageLink}?id=${product._id}">Detail</a></td>
        //    </tr>
        // `;
        //     });
        //     document.getElementById("LoadingSpinner").classList.add("d-none");
        // };
        // // ***************** /GET METHOD *****************
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h1 className="text-center my-3">Products</h1>
                        <table className="table table-hover table-responsive center" id="products-table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Detail</th>
                                </tr>
                            </thead>
                            <tbody />
                        </table>
                        <div className="d-flex justify-content-center my-3">
                            <div className="d-none spinner-border text-info" role="status" id="LoadingSpinner">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;