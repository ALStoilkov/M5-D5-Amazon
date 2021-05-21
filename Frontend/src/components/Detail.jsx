import React, { Component } from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        //     const params = new URLSearchParams(location.search);
        //   const id = params.get("id");

        //   const endpoint = "https://striveschool-api.herokuapp.com/api/product/";

        //   window.onload = async () => {
        //     const response = await fetch(endpoint + id, {
        //       headers: {
        //         Authorization:
        //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjE1ODE1MTMsImV4cCI6MTYyMjc5MTExM30.xX1bdh-kAI426pIAHwyGgERUwH-di9UXYWKK1-jFlvY",
        //       },
        //     });
        //     const product = await response.json();
        //     displayProduct(product);
        //   };

        //   function displayProduct(product) {
        //     document.querySelector("#id").innerHTML = product._id;
        //     document.querySelector("#imageUrl").src = product.imageUrl;
        //     document.querySelector("#name").innerHTML = product.name;
        //     document.querySelector("#description").innerHTML = product.description;
        //     document.querySelector("#brand").innerHTML = product.brand;
        //     document.querySelector("#price").innerHTML = product.price;

        //     let backofficeLink =
        //       location.href.replace(/\/[^\/]+?\.[^\/]+?$/, "/") + "backoffice.html";

        //     document.querySelector("#edit").innerHTML = `
        //             <a class="btn btn-primary mx-auto w-50" href="${backofficeLink}?id=${product._id}">Edit</a>
        //         `;
        //   }
    }
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-10 col-md-6 mx-auto">
                    <h1 className="text-center my-3">Products Detail</h1>
                    <div>
                        <p className="d-flex justify-content-between">
                            <strong>ID:</strong>
                            <span id="id" />
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img id="imageUrl" style={{ maxHeight: 200 }} alt="" />
                    </div>
                    <div>
                        <div><strong>Name:</strong></div>
                        <p id="name" />
                    </div>
                    <div>
                        <div><strong>Description:</strong></div>
                        <p id="description" />
                    </div>
                    <div>
                        <p className="d-flex justify-content-between">
                            <strong>Brand:</strong>
                            <span id="brand" />
                        </p>
                    </div>
                    <div>
                        <p className="d-flex justify-content-between">
                            <strong>Price:</strong>
                            <span id="price" />
                        </p>
                    </div>
                    <div className="d-flex" id="edit" />
                </div>
            </div>
        </div>
        );
    }
}

export default Detail;