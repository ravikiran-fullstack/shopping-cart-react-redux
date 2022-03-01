import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckOut: false,
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };

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
                  <button
                    onClick={() => this.setState({ showCheckOut: true })}
                    className='button primary'
                  >
                    Proceed
                  </button>
                </div>
              </div>
            )}
            {this.state.showCheckOut && (
              <div className='cart'>
                <form onSubmit={this.createOrder}>
                  <ul className='form-container'>
                    <li>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        required
                        onChange={this.handleInput}
                      />
                    </li>
                    <li>
                      <label htmlFor='name'>Name</label>
                      <input
                        type='name'
                        name='name'
                        id='name'
                        required
                        onChange={this.handleInput}
                      />
                    </li>
                    <li>
                      <label htmlFor='address'>Address</label>
                      <input
                        type='address'
                        name='address'
                        id='address'
                        required
                        onChange={this.handleInput}
                      />
                    </li>
                    <li>
                      <button type='submit' className='button primary'>
                        Checkout
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
