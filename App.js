/*import React,{useState} from 'react'
import './App.css';*/
/*function clickme(){
  alert('you clicked');
}
function App(){
  return(
    <div className="apple">
      <div className="item">
        <div className="click-button">Click me!</div>
        <input text="enter the name" placeholder="select name"></input>
   <button onClick={clickme}>click me</button>
      <h1>hi welcome to warangal</h1>
     <img src="https://cdn.britannica.com/30/150930-120-D3D93F1E/lion-Namibia.jpg" width="300" height="400"/>
      <apple/>
      <item/>
      </div>
    </div>
  );
export default App;*/
/*import { PieChart, Pie, Tooltip,BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid } from "recharts";
const Fun = () => {
  const data =[
    {name:"Facebook",value:90000000},
    {name:"Instagram",value:430000000},
    {name:"Twitter",value:234000000},
    {name:"Snapchat",value:85000000},
  ];
  return(
    <div className="fun">
      <div className="sun"></div>
      <h1>social media users</h1>
      <PieChart width={400} height={400}>
        <Pie
           datakey="value"
           isAnimationActive={true}
           data={data}
           cx={200}
           cy={200}
           outerRadius={90}
           fill="#8884d8"
           label
           />
           <Tooltip />
      </PieChart>
    <div>
      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top:5,
        right:30,
        left:20,
        bottom:5,
      }}
      barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{left:10,right:10}}/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Bar dataKey="pv" fill="#8884d8" background={{fill:"#eee"}}/>
        </BarChart>
    </div>
  </div>
  );
}
export default Fun;*/

/*function App(){
  const [sname,setSname]=useState("");
  const[srno,setSrno]=useState("");
  const handleSubmit=async(event)=>
    {
    event.preventDefault();//stop the reloading page
    const sdata={name:sname,rno:srno};//object
    const response = await fetch("http://localhost:4000/save",
      {
      method:'POST',
      headers:{'Content-Type':'application/josn'},
      body:JSON.stringify(sdata)
    });
    const msg=await response.text();
    alert(msg);
  }
  return (
  <div>    
    <form onSubmit={handleSubmit}>
      Sname:<input type="text" name="t1" onChange={(e)=>{setSname(e.target.value)}}></input>
      Srno:<input type="text" name="t2" onChange={(e)=>{setSrno(e.target.value)}}></input>
      <input type='submit' value='Save info'></input>
    </form>
   </div >
  );
}
export default App;
*/

/*import React from 'react';
import './App.css';
import About from './About';

function App() {
  return (
    <div className="App">
      <About />
    </div>
  );
}

export default App;
*/
/*import React from "react";
import {useState} from "react";
import './App.css';
function App(){
  /*const[sname,setSname]=useState("")
  const[srollno,setSrno]=useState("");
  const[scontact,setScontact]=useState("");
  const handleSubmit=async(event)=>{
    event.preventDefault();
    const sdata={name:sname,rno:srollno,contact:scontact};
    try {
    const response=await fetch("http://localhost:4000/save",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(sdata)

    });
    const msg=await response.text();
    alert(msg);
    }
    catch(error){
      alert("Error: " + error.message);
  }
};
  return(
    <div>
      <form onSubmit={handleSubmit}>
        name:<input type="text" name="t1" onChange={(e)=>{setSname(e.target.value)}}/><br/>
        rollno:<input type="text" name="t2" onChange={(e)=>{setSrno(e.target.value)}}/><br/>
        contact:<input type="text" name="t3" onChange={(e)=>{setScontact(e.target.value)}}/><br/>
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
}*/
/*const[file,setFile]=useState(null);
const uploadFile = async(event)=>{
  event.preventDefault();
  const data = new FormData();
  data.append('File',file);
     const response = await fetch("http://localhost:4000/uploadfile",{
      method:'POST',
      body:data,
     });
     const msg = await response.text();
     alert(msg);
    };
    return(
      <div>
        <form onSubmit={uploadFile}>
          file:<input type="file" accept="image/*" onChange={(e)=>{setFile(e.target.files)}}/><br />
            <button type="submit">upload</button>
            </form>
            </div>
    );
}
export default App;
*/
import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Cats from './Components/Cats';
import Dogs from './Components/Dogs';
import Rabbits from './Components/Rabbits';
import './App.css';
import Login from './Components/Login';
import About from './Components/About';
import Contact from './Components/Contact';
import Signin from './Components/Signin';
import Menu from './Components/Menu';
function App() {
  return (
    <Router>
      <div style={{ marginLeft: '220px', padding: '20px' }}>
      <Menu/>
        {/* Header and Menu inside Router */}
        <Header/>

        {/* Sidebar */}
        <div style={{ display: 'flex' }}>
          <Sidebar />
        </div>
        <div>
          <h1>🐾 Welcome to PawFetch! 🐾</h1>
<h4>
At PawFetch, we believe that every paw has a story.<br></br>
 Whether it's a fluffy kitten, a loyal pup, or a curious bunny, our mission is to bring you the cutest,
  most lovable info about your favorite furry friends! 🐶🐱🐰<br></br>
From adorable pictures and fun facts to breed guides and care tips,<br></br>
 PawFetch is your one-stop destination for everything pawsome.<br></br>
 Whether you're a pet parent or just a fan of cuddly creatures,<br></br>
  we've got something  make your tail wag with joy!<br></br>
So go ahead—fetch some smiles,<br></br>
explore the fluff, and fall in love one paw at a time.<br></br>
</h4>
        </div>
        {/* Main Content Routing */}
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/cats" element={<Cats/>} />
          <Route path="/dogs" element={<Dogs/>} />
          <Route path="/rabbits" element={<Rabbits/>} />
        </Routes>
<Routes>
          <Route path="/Login" element={<Login/>} /><Route/>
          <Route path="/About" element={<About/>} /><Route/>
          <Route path="/Contact" element={<Contact/>} /><Route/>
          <Route path="/Signin" element={<Signin/>} /><Route/>
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
