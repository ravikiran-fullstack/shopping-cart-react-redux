import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <>
        <div>
          {cartItems.length === 0 ? (
            <div className='cart cart-header'>Cart is empty</div>
          ) : (
            <div className='cart cart-header'>
              You have {cartItems.length} items in the cart
            </div>
          )}
          <div>
            <div className='cart'>
              <ul className='cart-items'>
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div>{item.title}</div>
                    <div className='right'>
                      ${item.price} x {item.count}
                      <button
                        className='button'
                        onClick={() => this.props.removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {cartItems.length !== 0 && (
              <div className=''>
                <div className='cart-total'>
                  <div>
                    Total: $
                    {cartItems
                      .reduce((acc, item) => acc + item.price * item.count, 0)
                      .toFixed(2)}
                  </div>
                  <button className='button primary'>Proceed</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
