import React from 'react';
import axios from 'axios';
import './App.css';
import 'macro-css';


import Card from './components/Card.js';
import Header from './components/Header.js';
import Drawer from './components/Drawer.js'

const arr =[];


  function App() {
    const [items, setItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened,setCartOpened] = React.useState(false);

React.useEffect(() => {
      axios.get('https://62add877b735b6d16a3ae0db.mockapi.io/cardItems').then((res) => {
        setItems(res.data)
      });


        axios.get('https://62add877b735b6d16a3ae0db.mockapi.io/card').then((res) => {
        setCartItems(res.data)
      });


 }, []);

const onAddToCart = (obj) =>{
   axios.post('https://62add877b735b6d16a3ae0db.mockapi.io/card', obj);
    setCartItems((prev) => [ ...prev, obj])
};



const onRemoveItem = (id) => {
   // axios.delete(`https://62add877b735b6d16a3ae0db.mockapi.io/card/'${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id))
};


const onChangeSaecrhValue = (event) => {
  setSearchValue(event.target.value);
}
 

  return (
    <div className="wrapper clear"> 
    {cartOpened && ( <Drawer items= {cartItems} onCloseCart = {() => setCartOpened(false)}  onRemove = {onRemoveItem} />)}
    <Header onClickCart = {() => setCartOpened(true)} />


    <div className="content p-40">
    <div className="d-flex justify-between align-center mb-40">  
    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все часы'}</h1>

    <div className="search-block d-flex"> 
    <img className="remove"
         src="/img/search alt 3.svg"
         alt="Search" />
    <input onChange={onChangeSaecrhValue} placeholder="Поиск..." type=" " />
    </div>

    </div>
    <div className="d-flex flex-wrap"> 
  {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (

      <Card
       key = {index}
       title = {item.title}
       price = {item.price}
       imgUrl = {item.imgUrl}
       onFavorite = {() => console.log('Добавили в закладки')}
       onPlus = {(obj) => onAddToCart(obj)} /> 

        
    ))}      

    </div>
    </div>
    </div>


    );
  }

  export default App;
