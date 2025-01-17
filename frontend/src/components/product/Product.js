import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, col }) => {
    return (
        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
            <div className="card card p-3 rounded">
                <Link to={`/product/${product._id}`}>
                    <img className="card-img-top mx-auto" src={product.images[0].url} alt='' />
                </Link>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                    </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                        </div>
                        <span id="no_of_reviews">({product.numOfReviews} đánh giá)</span>
                    </div>
                    <p className="card-text">{(product.price).toLocaleString()}đ</p>
                    <div className="sizes">
                        <p className="mt-2"><strong>Size:</strong></p>
                        <ul>
                            {product.sizes.map((size, index) => (
                                <li key={index}>{size}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="container">
                        <div className="row">
                            <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">
                                <i className="fa fa-eye" aria-hidden="true"><span>&nbsp;</span></i>Xem chi tiết
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
