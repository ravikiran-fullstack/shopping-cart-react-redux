import React from "react";
import data from "./data.json";

import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
      cartItems: [],
    };
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice(); // clone copy of state cartItems
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        console.log("item already there ");
        item.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }

    this.setState({ cartItems });
  };

  removeFromCart = (product) => {
    // console.log(product._id);
    const cartItems = this.state.cartItems.slice();
    const newCartItems = cartItems.filter((item) => {
      // console.log(item._id, product._id, item._id != product._id);
      return item._id != product._id;
    });
    // console.log(newCartItems);
    this.setState({ cartItems: newCartItems });
  };

  sortProducts = (event) => {
    console.log(event.target.value);
  };

  filterProducts = (event) => {
    console.log(event.target.value);

    if (event.target.value === "") {
      this.setState({
        size: "",
        products: data.products,
      });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <div className='grid-container'>
        <header>
          <a href='/'>React Shopping Cart</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
            </div>
            <div className='sidebar'>
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
              ></Cart>
            </div>
          </div>
        </main>
        <footer>All Rights Reserved</footer>
      </div>
    );
  }
}

export default App;
