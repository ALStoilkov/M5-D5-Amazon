import React, { Component } from 'react';
import fetchProduct from '../services/fetchProduct';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount = async () => {
        let idFromTheURL = this.props.match.params.productId.toString()
        const getProduct = await fetchProduct(idFromTheURL);
        console.log('getProduct:', getProduct)
        this.setState({ product: getProduct });
    }

    render() {
        return (<div className="container">
            <div className="row">
                <h1 className="text-center my-3">Products Detail</h1>
                <div className="col-10 col-md-6 mx-auto">
                    {this.state.product && (
                        <div>
                            <div className="d-flex justify-content-center">
                                <img id="imageUrl" style={{ maxHeight: 200 }} alt="" src={this.state.product.imageUrl} />
                            </div>
                            <div>
                                <div><strong>Name:</strong></div>
                                <p id="name" >{this.state.product.name}</p>
                            </div>
                            <div>
                                <div><strong>Description:</strong></div>
                                <p id="description" >{this.state.product.description}</p>

                            </div>
                            <div>
                                <div>
                                    <strong>Brand:</strong>
                                    <p id="brand" >{this.state.product.brand}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <strong>Price:</strong>
                                    <div id="price" >{this.state.product.price}</div>
                                </div>
                            </div>


                        </div>

                    )}

                </div>
            </div>
        </div>
        );
    }
}
// <div className="text-white" key={uniqid()}>
//     <hr />
//     {comment.comment}
//     <div className="text-white">Rate: {comment.rate} </div>
// </div>
export default Detail;