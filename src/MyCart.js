import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//this class list renders the items present in the cart and display them on the page
class MyCart extends Component {
    render(){
        return(
            <div className='item-list'>
                <Link className='close-create-contact' to='/'>Shop More Items</Link>
                {this.props.selectItem.length === 0 && (
                    <div className='emptyBag'>
                <img src='https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png' alt='remove'/>
                <h2>You cart is empty!</h2>
                </div>
                )}
                
                {this.props.selectItem.map((item) => (
                    <div key={item.id} className='emptyCart'>
                    <div key={item.name} className='item-list-item'>
                    <h1 className='name'>{item.name}</h1>
                    <img className='image'src={item.imageUrl} alt="newImage"/>
                    <p className='price'>Price: ${item.price}</p>
                    <p className='quantity'>Quantity: {item.quantity}</p>
                    <p className='description'>Description: ${item.description}</p>
                    <button onClick={()=> this.props.removeItem(item)} className='remove'>Remove</button>
                   </div>
                   </div>
                ))}
            </div>
        );
    }
}
export default MyCart