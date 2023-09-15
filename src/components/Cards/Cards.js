import React from 'react';
import ProductCard from '../Products/ProductCard';

class Cards extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-4">
            <ProductCard
              imageSrc="imagen-del-producto-1.jpg"
              productName="Espada corta"
              description="Espada corta de acero común, ligera, de una mano"
              price="2 piezas de plata"
            />
          </div>
          <div className="col-md-4 mt-4">
            <ProductCard
              imageSrc="imagen-del-producto-2.jpg"
              productName="Espada larga"
              description="Espada larga de acero común, algo pesada, a una o dos manos"
              price="10 piezas de plata"
            />
          </div>
          <div className="col-md-4 mt-4">
            <ProductCard
              imageSrc="imagen-del-producto-3.jpg"
              productName="Arco largo"
              description="Arco largo de madera, ligero y de gran alcance"
              price="4 piezas de plata"
            />
          </div>
          <div className="col-md-4 mt-4">
            <ProductCard
              imageSrc="imagen-del-producto-3.jpg"
              productName="Ballesta"
              description="Ballesta de madera y hierro, mucha fuerza, alcance limitado"
              price="6 piezas de plata"
            />
          </div>
          <div className="col-md-4 mt-4">
            <ProductCard
              imageSrc="imagen-del-producto-3.jpg"
              productName="Flechas"
              description="Flecha de madera con punta de hierro"
              price="1 pieza de bronce"
            />
          </div>
          <div className="col-md-4 mt-4">
            <ProductCard
              imageSrc="imagen-del-producto-3.jpg"
              productName="Hacha de guerra"
              description="Hacha de guerra de acero común, filo simple, bastante pesada"
              price="9 piezas de plata"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
