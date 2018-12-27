import React, {Component} from 'react'
import {connect} from 'react-redux'
import {INCREMENT} from './../actions'

let CartCounter = props => {
    return (
        <i className="badge badge-info">{props.total}</i>
    )
}

let mapStateToProps = state => ({ 
    total: state.total
})

let mapDispatchToProps = dispatch => ({
    filter: (product) => dispatch({type:INCREMENT})
})



export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);