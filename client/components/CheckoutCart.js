import React, { Component } from "react";

class CheckoutCart extends Component {
  render() {
    return (
      <div>
        {/* need to be able to see all items, so map it! */}

        <box className="checkout-div">
          <div className="checkout-items-box">
            <h1 className="title">Shopping Cart</h1>
            <hr />
            <div className="singeitem-div">
              <img src="https://blog.williams-sonoma.com/wp-content/uploads/2018/06/jun-23-Vanilla-Ombre-Layer-Cake.jpg" />
              <div className="detail">
                <h2>name</h2>
                <h2>price</h2>
              </div>
              <div className="addorremove">
                <select value="" onChange="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
                <button>delete</button>
              </div>
            </div>
            <div className="singeitem-div">
              <img src="https://blog.williams-sonoma.com/wp-content/uploads/2018/06/jun-23-Vanilla-Ombre-Layer-Cake.jpg" />
              <div className="detail">
                <h2>name</h2>
                <h2>price</h2>
              </div>
              <div className="addorremove">
                <select value="" onChange="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
                <button>delete</button>
              </div>
            </div>
            <hr />
            <div className="checkout">
              <button>CONTINUE TO CHECKOUT</button>
            </div>
          </div>
          <div className="checkout-box">
            <h1 className="title">Summary</h1>
            <hr />
            <div className="total">
              <h3>SUBTOTAL $95</h3>
              <h3>SHIPPING FREE</h3>
              <h3>TAXES $10</h3>
              <hr />
              <h3>Total $100</h3>
            </div>
          </div>
        </box>
      </div>
    );
  }
}

export default CheckoutCart;