import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { imageSrc, productName, description, price } = this.props;

    return (
      <div className="card">
        <img src={imageSrc} className="card-img-top" alt={productName} />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Precio: {price}</p>
          <a href="#" className="btn btn-primary">Comprar</a>
        </div>
      </div>
    );
  }
}

export default ProductCard;

