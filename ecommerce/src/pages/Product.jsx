import { Add, Remove } from "@material-ui/icons";
import "./Product.css";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Product = () => {
  return (
    <div className="product-page-container">
      <Navbar />
      <Announcement />
      <div className="product-page-wrapper">
        <div className="product-page-img-container">
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="product" className="product-page-image" />
        </div>
        <div className="product-page-info-container">
          <h1 className="product-page-title">Denim Jumpsuit</h1>
          <p className="product-page-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className="product-page-price">$ 20</span>
          <div className="product-page-filter-container">
            <div className="product-page-filter">
              <span className="product-page-filter-title">Color</span>
              <span className="product-page-filter-color" style={{ backgroundColor: "black" }}></span>
              <span className="product-page-filter-color" style={{ backgroundColor: "darkblue" }}></span>
              <span className="product-page-filter-color" style={{ backgroundColor: "gray" }}></span>
            </div>
            <div className="product-page-filter">
              <span className="product-page-filter-title">Size</span>
              <select className="product-page-filter-size">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="product-page-add-container">
            <div className="product-page-amount-container">
              <Remove />
              <span className="product-page-amount">1</span>
              <Add />
            </div>
            <button className="product-page-button">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
