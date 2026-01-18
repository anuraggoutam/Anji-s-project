import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import "./Product.css";

const Product = ({ item }) => {
  return (
    <div className="product-container">
      <div className="product-image-container">
        <div className="product-circle"></div>
        <img src={item.img} alt={item.title || "Product"} className="product-image" />
        <div className="product-info">
          <div className="product-icon">
            <ShoppingCartOutlined />
          </div>
          <div className="product-icon">
            <SearchOutlined />
          </div>
          <div className="product-icon">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
      <div className="product-details">
        <div className="product-name">{item.title || "Product Name"}</div>
        <div className="product-price">${item.price || "00"}</div>
      </div>
    </div>
  );
};

export default Product;
