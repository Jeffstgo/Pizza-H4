import React from "react";

const CardPizza = ({ pizza }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />{" "}
        
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5> 
          <ul>
            {pizza.ingredients.map(
              (
                ingrediente,
                index 
              ) => (
                <li key={index}>{ingrediente}</li>
              )
            )}
          </ul>
          <p>
            <strong>Precio:</strong> ${pizza.price}
          </p>
          <button className="btn btn-primary">Ver más</button>
          <button className="btn btn-success ms-2">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
