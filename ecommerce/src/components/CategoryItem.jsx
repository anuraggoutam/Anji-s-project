import "./CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="category-item-container">
      <img src={item.img} alt={item.title} className="category-item-image" />
      <div className="category-item-info">
        <h1 className="category-item-title">{item.title}</h1>
        <button className="category-item-button">SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
