import { Add, Remove } from "@material-ui/icons";
import "./Cart.css";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <div className="cart-container">
      <Navbar />
      <Announcement />
      <div className="cart-wrapper">
        <h1 className="cart-title">YOUR BAG</h1>
        <div className="cart-top">
          <button className="cart-top-button">CONTINUE SHOPPING</button>
          <div className="cart-top-texts">
            <span className="cart-top-text">Shopping Bag(2)</span>
            <span className="cart-top-text">Your Wishlist (0)</span>
          </div>
          <button className="cart-top-button cart-top-button-filled">CHECKOUT NOW</button>
        </div>
        <div className="cart-bottom">
          <div className="cart-info">
            <div className="cart-product">
              <div className="cart-product-detail">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="product" className="cart-image" />
                <div className="cart-details">
                  <span className="cart-product-name">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="cart-product-id">
                    <b>ID:</b> 93813718293
                  </span>
                  <span className="cart-product-color" style={{ backgroundColor: "black" }}></span>
                  <span className="cart-product-size">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="cart-price-detail">
                <div className="cart-product-amount-container">
                  <Add />
                  <div className="cart-product-amount">2</div>
                  <Remove />
                </div>
                <div className="cart-product-price">$ 30</div>
              </div>
            </div>
            <hr className="cart-hr" />
            <div className="cart-product">
              <div className="cart-product-detail">
                <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="product" className="cart-image" />
                <div className="cart-details">
                  <span className="cart-product-name">
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span className="cart-product-id">
                    <b>ID:</b> 93813718293
                  </span>
                  <span className="cart-product-color" style={{ backgroundColor: "gray" }}></span>
                  <span className="cart-product-size">
                    <b>Size:</b> M
                  </span>
                </div>
              </div>
              <div className="cart-price-detail">
                <div className="cart-product-amount-container">
                  <Add />
                  <div className="cart-product-amount">1</div>
                  <Remove />
                </div>
                <div className="cart-product-price">$ 20</div>
              </div>
            </div>
          </div>
          <div className="cart-summary">
            <h1 className="cart-summary-title">ORDER SUMMARY</h1>
            <div className="cart-summary-item">
              <span className="cart-summary-item-text">Subtotal</span>
              <span className="cart-summary-item-price">$ 80</span>
            </div>
            <div className="cart-summary-item">
              <span className="cart-summary-item-text">Estimated Shipping</span>
              <span className="cart-summary-item-price">$ 5.90</span>
            </div>
            <div className="cart-summary-item">
              <span className="cart-summary-item-text">Shipping Discount</span>
              <span className="cart-summary-item-price">$ -5.90</span>
            </div>
            <div className="cart-summary-item cart-summary-item-total">
              <span className="cart-summary-item-text">Total</span>
              <span className="cart-summary-item-price">$ 80</span>
            </div>
            <button className="cart-button">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
