import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Detail</th>
                                </tr>
                                {this.props.products.map((item) => (
                                    <tr key={item._id}>
                                        <th scope="col">
                                            <img
                                                className="my-1 userImg"
                                                src={item.imageUrl}
                                                width=" 40px"
                                                height="40px"
                                                alt=""
                                            />
                                        </th>
                                        <th scope="col">{item.name}</th>
                                        <th scope="col">{item.description}</th>
                                        <th scope="col">{item.brand}</th>
                                        <th scope="col">{item.category}</th>
                                        <th scope="col">{item.price}</th>
                                        <th scope="col"><a href={"/detail/" + item._id}>Detail</a></th>
                                    </tr>
                                ))}

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
            </div >

        );
    }
}

export default Home;