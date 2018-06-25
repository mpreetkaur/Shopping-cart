import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//this class list render all items and displays all the items that we can shop for, and the link to shopping cart
class CartList extends Component {
    render(){
        return (
            <div>
                <h1>Shopping Cart</h1>
            
                <Link to="/myCart" className='cartName'>Show Cart<img className="head-two"src="https://cdn3.iconfinder.com/data/icons/ikooni-flat-online-shopping/128/shopping-14-512.png" alt='src/imk'/><div className='totalItems'>Total Items: {this.props.selectItem.length}</div>
                <div className='totalPrice'>Sub-Total: ${this.props.selectItem.length ? this.props.selectItem.reduce((acc, item) => (
                acc + item.price * item.quantity    
                ), 0).toFixed(2) : Number(0).toFixed(2)}</div>
                </Link>
                <div className='item-list'>
            
                    {this.props.items.map((item) => (
                        <div key={item.id} className='item-list-item'>
                        <h2 className='name'>{item.name}</h2>
                        <img className='image'src={item.imageUrl} alt="newImage"/>
                        <p className='price'>Price: ${item.price}</p>
                        <p className='description'>Description: {item.description}</p>
                        <button onClick={() => this.props.addItem(item)} className='add-item'>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default CartList