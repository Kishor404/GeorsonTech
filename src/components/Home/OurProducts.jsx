import "../../styles/Home.css";
import productImg from "../../assets/Home/goalinnumImg.png";

function OurProducts() {

  const products = [
    {
      title: "Industrial Automation Project",
      image: productImg
    },
    {
      title: "Industrial Automation Project",
      image: productImg
    },
    {
      title: "Industrial Automation Project",
      image: productImg
    },
    {
      title: "Industrial Automation Project",
      image: productImg
    },
    {
      title: "Industrial Automation Project",
      image: productImg
    },
    {
      title: "Industrial Automation Project",
      image: productImg
    },

  ]

  return (
    <section className="products-section">

      <h2 className="products-title">OUR PRODUCTS</h2>

      <div className="products-container">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="products-btn-wrapper">
        <button className="products-btn">Show More</button>
      </div>

    </section>
  );
}

export default OurProducts;