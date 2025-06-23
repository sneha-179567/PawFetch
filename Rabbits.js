import React, { useState } from 'react';

function Rabbits() {
  const [selectedRabbit, setSelectedRabbit] = useState(null);

  const rabbitsData = [
    {
      name: 'Holland Lop',
      age: 1,
      color: 'Fawn',
      gender: 'Female',
      img: 'https://tse1.mm.bing.net/th?id=OIP.wW5yecH0QxN_hwPj1l3l5gHaE7&pid=Api&P=0&h=220',
      fullName: 'Lily Lop',
      breed: 'Holland Lop',
    },
    {
      name: 'White Rabbit',
      age: 2,
      color: 'Pure White',
      gender: 'Male',
      img: 'https://tse4.mm.bing.net/th?id=OIP.iaMSs_UaoLcOgV4fOP5y1gHaGl&pid=Api&P=0&h=220',
      fullName: 'Snowy White',
      breed: 'White Rabbit',
    },
    {
      name: 'English Angora',
      age: 3,
      color: 'White & Grey',
      gender: 'Female',
      img: 'https://tse2.mm.bing.net/th?id=OIP.IPlrMdQzs70G3lAkInqixgHaHe&pid=Api&P=0&h=220',
      fullName: 'Fluffy Angora',
      breed: 'English Angora',
    },
    {
      name: 'Netherland Dwarf',
      age: 1,
      color: 'Grey',
      gender: 'Male',
      img: 'https://tse4.mm.bing.net/th?id=OIP.XoZN_Qf_kv0f9pQq06McAAHaFX&pid=Api&P=0&h=220',
      fullName: 'Tiny Dwarf',
      breed: 'Netherland Dwarf',
    },
    {
      name: 'Lionhead',
      age: 2,
      color: 'Tan & White',
      gender: 'Female',
      img: 'https://tse4.mm.bing.net/th?id=OIP.gKd_hZj-1FMsa1egU2v74gHaJN&pid=Api&P=0&h=220',
      fullName: 'Queen Lion',
      breed: 'Lionhead',
    },
    {
      name: 'Flemish Giant',
      age: 4,
      color: 'Steel Grey',
      gender: 'Male',
      img: 'https://tse4.mm.bing.net/th?id=OIP.dYc2V33NfYIicAUdGBHjcwHaHC&pid=Api&P=0&h=220',
      fullName: 'Giant Max',
      breed: 'Flemish Giant',
    }
  ];
return (
    <div className="Rabbits">
      <h2>Rabbits</h2>
      <p>Welcome to the Rabbits page</p>
      <div className="rabbit-container">
        {rabbitsData.map((rabbit, index) => (
          <div className="rabbit-card" key={index}>
            <img src={rabbit.img} alt={rabbit.name} />
            <h3>{rabbit.name}</h3>
            <p>Age: {rabbit.age}</p>
            <p>Color: {rabbit.color}</p>
            <p>Gender: {rabbit.gender}</p>
            <button className="call-btn">Call</button>
            <button className="details-btn" onClick={() => setSelectedRabbit(rabbit)}>View Details</button>
          </div>
        ))}
      </div>

      {selectedRabbit && (
        <div className="details-modal">
          <h4>Rabbit Details</h4>
          <p><strong>Full Name:</strong> {selectedRabbit.fullName}</p>
          <p><strong>Breed:</strong> {selectedRabbit.breed}</p>
          <button className="send-btn">Send</button>
          <button onClick={() => setSelectedRabbit(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Rabbits;

