import React, { useState, useEffect } from "react";
import CardPizza from "./CardPizza";

function Home() {
  const [pizzas, setPizzas] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // Consumo de API
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas"); // Endpoint
        const data = await response.json();
        setPizzas(data); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching pizzas:", error);
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  // Mensaje de carga en caso de...
  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  return (
    <div>
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default Home;
