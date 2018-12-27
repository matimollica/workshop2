import React, { Component } from 'react';
import {connect} from 'react-redux'
import {INCREMENT} from './../actions'
import ProductList from './ProductList'
import Navbar from './Navbar'
import Modal from 'react-modal'
import 'bootstrap/dist/css/bootstrap.css'
import './../styles/App.css';



class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        modalIsOpen: false
      }
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }
  
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount(){
    fetch("http://localhost:3001/products")
        .then(response => response.json())
        .then(response => {
          this.props.fillProducts(response)
        })
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="App container">
          <div className="row">
            <ProductList></ProductList>
          </div>
      </div>
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Example Modal"
      />
    
    </div>
  
      
    );
  }
}

let mapStateToProps = state => ({ 
    total: state.total
})

let mapDispatchToProps = dispatch => ({
    increment: () => dispatch({type:INCREMENT}),
    fillProducts: (products) => dispatch({type:'FETCH_PRODUCTS', products})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
