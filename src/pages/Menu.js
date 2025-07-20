import React from 'react';
import './Menu.css'; // لازم تستوردي ملف CSS

export default function Menu() {
  const menuItems = [
    {
      name: "Big Mac",
      image: "/img/bigmac2.jpg",
      price: "$5.99",
      description: "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
    },
    {
      name: "McChicken",
      image: "/img/McChicken.jpg",
      price: "$4.49",
      description: "Crispy chicken patty with lettuce and mayo on a toasted bun."
    },
    {
      name: "French Fries",
      image: "/img/FrenchFries.jpg",
      price: "$2.49",
      description: "Golden, crispy fries made from premium potatoes."
    },
    {
      name: "Coca-Cola",
      image: "/img/Coca-Cola.jpg",
      price: "$1.99",
      description: "Refreshing cold drink to complement your meal."
    },
    {
      name: "McFlurry",
      image: "/img/mcflurry.jpg",
      price: "$3.29",
      description: "Vanilla soft serve mixed with your favorite toppings."
    },
    {
      name: "Happy Meal",
      image: "/img/HappyMeal.jpg",
      price: "$6.99",
      description: "Perfect for kids! Includes burger, fries, drink, and a toy."
    },
  ];

  return (
    <div className="container py-5 mt-5">
      <h2 className="text-center text-danger mb-4 pt-3">🍔 Our Menu</h2>
      <div className="row g-4">
        {menuItems.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 shadow card-hover">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ maxHeight: '300px', objectFit: 'contain', background: 'white' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <p className="card-text text-muted">{item.description}</p>
                <p className="text-danger fs-5 fw-semibold">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

