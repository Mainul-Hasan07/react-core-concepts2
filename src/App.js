import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='product'>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
  </div>
  )
}



function Counter() {
  const [count, setCount] = useState(54);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '3px solid blue',
    borderRadius:'10px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h2>Price: {props.price}</h2>
    </div>
  )
}

/* const products = [
  {name:"camera", price:"55000"},
  {name:"watch", price:"5500"},
  {name:"laptop", price:"150000"},
  {name:"shoe", price:"500"},
  {name:"mobile", price:"15000"}
] */

/* {
  products.map(product=><Product name={product.name} price={product.price}></Product>)
}

<Product name="mobile" price="15000"></Product>
<Product name="laptop" price="150000"></Product>
<Product name="camera" price="15000"></Product> */

export default App;
