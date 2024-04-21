// Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.First, import useState from React:

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

/*function MyButton() {
 return (
    // The markup syntax you’ve seen  is called JSX.JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:
    //JSX
    <>
    
    <div className="awesome" style={{ border: "1px solid red" }}>
      <label htmlFor="name">Enter your name: </label>
      <input type="text" id="name" />
    </div>
    <p>Enter your HTML here</p>
  </>
  
  );
}*/
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);
function ProductList(){
  return(
    <ul>{listItems}</ul>
);
}
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    //Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button.
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
function MyButton1(){
  const[count,setCount]= useState(0);
  function handleClick(){
    setCount(count+1)
  }
  return (
    <button onClick={handleClick}>
      clicked {count} times
    </button>
  )
}
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
  }
  return (
   /* <div>
       <h1>Welcome to app</h1>
     <MyButton />
    </div> */
    <>
     <div style={{ border: "2px solid black", padding: 10 }}>
      <h1>Counters that update together</h1>
      <MyButton2 count={count} onClick={handleButtonClick} />
      <MyButton2 count={count} onClick={handleButtonClick} />
    </div>
    <div style={{ border: "2px solid red", padding: 10 }}>
    <MyButton />
    <MyButton1/>
    <MyButton1/>
    </div>
   <div style={{ border: "2px solid black", padding: 10 }}>
   <ProductList />
   </div>
     <div style={{ border: "2px solid green", padding: 10 }} >
     <h1>{user.name}</h1>
    <img
      className="avatar"
      src={user.imageUrl}
      alt={'Photo of ' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
    />
     </div>
  
   
  </>
  );
 
}
function MyButton2({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}


