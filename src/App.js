import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CartList from "./CartList";
import MyCart from "./MyCart";
import './App.css';

//this class contains all items in the cart and their relative functions
class App extends Component {
  state = {
    screen: 'myCart', //myCart, CartList
    selectItem: [],
    items: [
      {
          name: 'Prada Goggles',
          id: 1,
          quantity: 1,
          imageUrl: 'https://item2.tradesy.com/images/prada-spr-51r-1bo-0a7-matte-black-frame-w-grey-gradient-new-60-16-aviator-w-lenses-sunglasses-10849621-0-1.jpg?width=720&height=960',
          description: 'Prada oval black nylon sunglasses with light grey/dark grey gradient lenses. Come in a designer-stamped case.',
          price: 700
      },
      {
          name: 'Dr dre Head-Phones',
          id: 2,
          quantity: 1,
          imageUrl: 'https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-pro/color_selector/_0069_overear-pro-black-rgb-thrqrtleft_V2.png',
          description: 'Enjoy a premium listening experience and complete wireless freedom with the Beats Studio 3 over-ear headphones. Pure Adaptive Noise Canceling (Pure ANC) actively blocks unwanted external noise, while real-time audio calibration preserves the clarity, range, and emotion in your favourite music.',
          price: 278
      },
      {   
          name: "GUESS Women's Rose Gold-Tone Stainless Steel Watch",
          id: 3,
          quantity: 1,
          imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/3677550_fpx.tif?op_sharpen=1&wid=400&hei=489&fit=fit,1&$filterlrg$',
          description: 'watch Sizing Guide A petite silver-tone watch with a minimalistic dial and stainless steel buckle. The pairing of its slim case and minimalistic dial makes this silhouette perfect as an everyday watch. Stainless steel case. Stainless steel bracelet with fold-over, double push-button release. Round face. Three-hand analog display with quartz movement. ',
          price: 700
      },
      {
          name: "WOMEN'S NMD_R2 SHOES",
          id: 4,
          quantity: 1,
          imageUrl: 'https://www.adidas.ca/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/default/dw34c34375/zoom/CQ2007_01_standard.jpg?sh=840&strip=false&sw=840',
          description: "OPEN MESH UPPER WITH A LEATHER HEEL OVERLAY AND INTEGRATED WEBBING3-STRIPES Progressive, premium, pioneering. The NMD is streetwear that's relevant for today. These women's shoes merge streetwise style with the latest adidas technologies.",
          price: 180
      },
      {
        name: 'TC 2017 Trucker',
        id: 5,
        quantity: 1,
        description: 'Premium meshback cotton front trucker hat. Made by FlexFit, with the official embroidered patch of Team Canada 2017! 47% Cotton / 25% Polyester / 28% Nylon, contrast trucker mesh back, matching plastic snap, hard buckram, matching undervisor. One size fits all',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71u4bznz-TL._UX562_.jpg',
        price: 19
      }
    ]
  }
  //addToCart function adds the items to the cart and if item to be added next is same as the previous one it just increase qantity of item
  addToCart = (item) => {
    const newItemArray = [...this.state.selectItem];
    let foundItem = false;
    for(const product of newItemArray){
        if(product.id === item.id){          
          product.quantity+=1;
          foundItem = true
        }
      }
      if(!foundItem){
          newItemArray.push(item)
        } 
      this.setState({selectItem: newItemArray});
  }
  //removeCart function removes items from the cart but if the quantity of item is more than one it just reduces the quantity by one
  removeFromCart = (item) => {
    let itemsFromCart = [...this.state.selectItem];
      if (item.quantity > 1) {
        item.quantity-=1;
    } else if(item.quantity === 1){
        let index = itemsFromCart.indexOf(item);
        itemsFromCart.splice(index, 1)
    }
    this.setState({selectItem: itemsFromCart}) 

  }
  //this method render CartList and myCart and display them according to the given route 
  render(){
      return (
        <div>
          <Route exact path='/' render={() => (
            <CartList items={this.state.items} total={this.calculateTotal} addItem={this.addToCart} selectItem={this.state.selectItem}/>
          )}/>
          <Route path='/myCart' render={() => (
            <MyCart selectItem={this.state.selectItem} removeItem={this.removeFromCart}/>
          )}/>
        </div>
      )
  }
}
export default App;
