import React, { useState } from 'react';
function Dogs() {
  const [selectedDog, setSelectedDog] = useState(null);

  const dogsData = [
    {
      name: 'German Shepherd',
      age: 4,
      color: 'Black & Tan',
      gender: 'Male',
      img: 'https://tse4.mm.bing.net/th?id=OIP.NRsZMDAGZ95bgweplhS8swHaEo&pid=Api&P=0&h=220',
      fullName: 'Max Shepherd',
      breed: 'German Shepherd',
    },
    {
      name: 'Golden Retriever',
      age: 3,
      color: 'Golden',
      gender: 'Female',
      img: 'https://tse4.mm.bing.net/th?id=OIP.kAMCjX7G_1inCivhWgX_7QHaHN&pid=Api&P=0&h=220',
      fullName: 'Bella Golden',
      breed: 'Golden Retriever',
    },
    {
      name: 'Labrador',
      age: 5,
      color: 'Cream',
      gender: 'Male',
      img:'https://tse4.mm.bing.net/th?id=OIP.byyw3RUlS341tFQO9TePZwHaGX&pid=Api&P=0&h=220',
      fullName: 'Charlie Lab',
      breed: 'Labrador',
    },
    {
    name: 'Beagle',
    age: 2,
    color: 'Tri-color',
    gender: 'Female',
    img: 'https://tse1.mm.bing.net/th?id=OIP.tjLeqlIGI9RDR7115w_ffgHaE7&pid=Api&P=0&h=220',
    fullName: 'Luna Beagle',
    breed: 'Beagle',
  },
  {
    name: 'Poodle',
    age: 4,
    color: 'White',
    gender: 'Male',
    img: 'https://tse4.mm.bing.net/th?id=OIP.NGfpIsE2awzHT_1qaPspQwHaE8&pid=Api&P=0&h=220',
    fullName: 'Rocky Poodle',
    breed: 'Poodle',
  },
  {
    name: 'Husky',
    age: 3,
    color: 'Gray & White',
    gender: 'Female',
    img: 'https://tse1.mm.bing.net/th?id=OIP.BplSTy2d47Q6j5VQou3aegHaIR&pid=Api&P=0&h=220',
    fullName: 'Sky Husky',
    breed: 'Siberian Husky',
  }
  ];

  return (
    <div className="Dogs">
      <h2>Dogs</h2>
      <p>Welcome to the Dogs page</p>
      <div className="dog-container">
        {dogsData.map((dog, index) => (
          <div className="dog-card" key={index}>
            <img src={dog.img} alt={dog.name} />
            <h3>{dog.name}</h3>
            <p>Age: {dog.age}</p>
            <p>Color: {dog.color}</p>
            <p>Gender: {dog.gender}</p>
            <button className="call-btn">Call</button>
            <button className="details-btn" onClick={() => setSelectedDog(dog)}>View Details</button>
          </div>
        ))}
      </div>

      {selectedDog && (
        <div className="details-modal">
          <h4>Dog Details</h4>
          <p><strong>Full Name:</strong> {selectedDog.fullName}</p>
          <p><strong>Breed:</strong> {selectedDog.breed}</p>
          <button className="send-btn">Send</button>
          <button onClick={() => setSelectedDog(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Dogs;
