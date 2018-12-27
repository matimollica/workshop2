import React, { Component } from 'react';
import {connect} from 'react-redux'
import {INCREMENT, DECREMENT_STOCK} from './../actions'
import './../styles/Product.css'

class Product extends Component {


    constructor(props){
        super(props)
        this.state = { selected : props.select}
    }

    buy = () => {
        this.props.increment();
        this.props.decrement_stock(this.props.data.id);
        this.forceUpdate();
    }

    getDetails = () =>{
    }

    render() {

        return(
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title text-left"> {this.props.data.title}</h4>
                </div>
                <div className="card-body">
                    <p className="card-text text-left">{this.props.data.description}</p>
                    <p className="text-left"><b>Stock:</b> {this.props.data.stock} {this.props.data.stock <= 0 ? <p>No hay stock</p> : <p className="text-right"><button onClick={this.getDetails} className="btn btn-primary">Ver más</button>&nbsp;<button className="btn btn-primary" onClick={this.buy}>Comprar</button></p>}
                    </p>
                </div>
    
            </div>
        );
    }
}


let mapDispatchToProps = dispatch => ({
    increment: () => dispatch({type:INCREMENT}),
    decrement_stock : (id) => dispatch({type:DECREMENT_STOCK, productId: id})
})

export default connect(null,mapDispatchToProps)(Product);