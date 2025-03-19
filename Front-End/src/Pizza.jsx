import React, { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  
  const pizzaId = "p001";

  // Consumo de API
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/pizzas/${pizzaId}`
        ); // Endpoint de la API
        if (!response.ok) {
          throw new Error("Error al obtener la pizza");
        }
        const data = await response.json();
        setPizza(data); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching pizza:", error);
        setError(error.message); 
        setLoading(false);
      }
    };

    fetchPizza();
  }, [pizzaId]);

  // Mensajes de carga y error
  if (loading) {
    return <p>Cargando pizza...</p>;
  }

  
  if (error) {
    return <p>Error: {error}</p>;
  }

  
  if (!pizza) {
    return <p>No se encontró la pizza.</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />{" "}
          
        </div>
        <div className="col-md-6">
          <h1>{pizza.name}</h1> 
          <p>
            <strong>Precio:</strong> ${pizza.price} 
          </p>
          <p>
            <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}{" "}
            
          </p>
          <p>
            <strong>Descripción:</strong> {pizza.desc}{" "}
            
          </p>
          <button className="btn btn-success">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
