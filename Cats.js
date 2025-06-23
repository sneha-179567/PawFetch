import React, { useState } from 'react';

function Cats() {
  const [selectedCat, setSelectedCat] = useState(null);

  const catsData = [
    {
      name: 'Persian Cat',
      age: 2,
      color: 'White',
      gender: 'Female',
      img: 'https://tse4.mm.bing.net/th?id=OIP.6EyrdfLP7abAUuAk1a5tLQHaE8&pid=Api&P=0&h=220',
      fullName: 'Luna Persian',
      breed: 'Persian',
    },
    {
      name: 'Siamese Cat',
      age: 3,
      color: 'Cream & Brown',
      gender: 'Male',
      img: 'https://tse2.mm.bing.net/th?id=OIP.r83GTwJDcKI5O2l2cO2fpQHaJQ&pid=Api&P=0&h=220',
      fullName: 'Max Siamese',
      breed: 'Siamese',
    },
    {
      name: 'Maine Coon',
      age: 4,
      color: 'Brown Tabby',
      gender: 'Male',
      img: 'https://tse2.mm.bing.net/th?id=OIP.nEbN_zbW3_o09YmKYXn7SgHaJx&pid=Api&P=0&h=220',
      fullName: 'Charlie Coon',
      breed: 'Maine Coon',
    },
    {
      name: 'British Shorthair',
      age: 2,
      color: 'Gray',
      gender: 'Female',
      img: 'https://tse4.mm.bing.net/th?id=OIP.YO81Jnc6UWnhWsO1644aBAHaEo&pid=Api&P=0&h=220',
      fullName: 'Misty Shorty',
      breed: 'British Shorthair',
    },
    {
      name: 'Bengal Cat',
      age: 3,
      color: 'Spotted',
      gender: 'Male',
      img:'https://tse2.mm.bing.net/th?id=OIP.8sbTEJrPfTI-F5Q2xXD-eAHaLI&pid=Api&P=0&h=220',
      fullName: 'Leo Bengal',
      breed: 'Bengal',
    },
    {
      name: 'Ragdoll',
      age: 4,
      color: 'White & Grey',
      gender: 'Female',
      img: 'https://tse2.mm.bing.net/th?id=OIP.2CkQhkO9edbEFCjfvRPqhAHaE8&pid=Api&P=0&h=220',
      fullName: 'Daisy Ragdoll',
      breed: 'Ragdoll',
    }
  ];

return (
    <div className="Cats">
      <h2>Cats</h2>
      <p>Welcome to the Cats page</p>
      <div className="cat-container">
        {catsData.map((cat, index) => (
          <div className="cat-card" key={index}>
            <img src={cat.img} alt={cat.name} />
            <h3>{cat.name}</h3>
            <p>Age: {cat.age}</p>
            <p>Color: {cat.color}</p>
            <p>Gender: {cat.gender}</p>
            <button className="call-btn">Call</button>
            <button className="details-btn" onClick={() => setSelectedCat(cat)}>View Details</button>
          </div>
        ))}
      </div>

      {selectedCat && (
        <div className="details-modal">
          <h4>Cat Details</h4>
          <p><strong>Full Name:</strong> {selectedCat.fullName}</p>
          <p><strong>Breed:</strong> {selectedCat.breed}</p>
          <button className="send-btn">Send</button>
          <button onClick={() => setSelectedCat(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Cats;
