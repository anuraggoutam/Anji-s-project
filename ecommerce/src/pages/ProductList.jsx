import "./ProductList.css";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const ProductList = () => {
  return (
    <div className="product-list-container">
      <Navbar />
      <Announcement />
      <h1 className="product-list-title">Dresses</h1>
      <div className="product-list-filter-container">
        <div className="product-list-filter">
          <span className="product-list-filter-text">Filter Products:</span>
          <select className="product-list-select">
            <option className="product-list-option" disabled defaultValue>
              Color
            </option>
            <option className="product-list-option">White</option>
            <option className="product-list-option">Black</option>
            <option className="product-list-option">Red</option>
            <option className="product-list-option">Blue</option>
            <option className="product-list-option">Yellow</option>
            <option className="product-list-option">Green</option>
          </select>
          <select className="product-list-select">
            <option className="product-list-option" disabled defaultValue>
              Size
            </option>
            <option className="product-list-option">XS</option>
            <option className="product-list-option">S</option>
            <option className="product-list-option">M</option>
            <option className="product-list-option">L</option>
            <option className="product-list-option">XL</option>
          </select>
        </div>
        <div className="product-list-filter">
          <span className="product-list-filter-text">Sort Products:</span>
          <select className="product-list-select">
            <option className="product-list-option" defaultValue>Newest</option>
            <option className="product-list-option">Price (asc)</option>
            <option className="product-list-option">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
