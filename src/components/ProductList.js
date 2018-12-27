import React, { Component } from 'react';
import {connect} from 'react-redux'
import {FILTER_PRODUCT} from './../actions'
import Product from './Product.js'
import Modal from 'react-modal'

Modal.setAppElement('#root')

let ProductList = (props) => {
    return (
        <div className="card-columns">
            {props.products.map(product => (
                <Product key={product.id} data={product} selected={false}/>
            ))}
          
        </div>
    )
}

let mapStateToProps = state => ({ 
    products: state.products
})

let mapDispatchToProps = dispatch => ({
    filter: (product) => dispatch({type:FILTER_PRODUCT, product: product})
})



export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
