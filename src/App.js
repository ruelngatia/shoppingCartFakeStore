import Categories from './Components/Categories/Categories';
import './App.css'
import ListItems from './Components/List_items/listItems';
import Nav from './Components/Nav/Nav';
import AddingProducts from './Components/AddingProduct/AddProducts';
import { Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {


  const [items,setItems] = useState([])
  const [categoryName,setCategory] = useState('all products')

  

const getAllItems=()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItems(json))
  }
  useEffect(()=>{
    getAllItems()
    console.log('rendered again');
  },[])
  

  function getCategory(category) {

    if(category == 'All'){
      getAllItems()
      return
    }
    setCategory(category)
    fetch('https://fakestoreapi.com/products/category/'.concat(category))
    .then(res=>res.json())
    .then(json=>setItems(json))
  }


  function sortProducts(ord){
    fetch('https://fakestoreapi.com/products?sort='.concat(ord))
    .then(res=>res.json())
    .then(json=>setItems(json))
  }

  function getSingleProduct(index){
    if(index === ''){
      getAllItems()
      return
    }
    console.log('called value is: '.concat(index));
    fetch('https://fakestoreapi.com/products/'.concat(index))
    .then(res=>res.json())
    .then(json=>setItems([json]))
  }

  function addProduct(item){
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: item.title,
                    price: item.price,
                    description: item.description,
                    image: 'https://i.pravatar.cc',
                    category: item.category
                }
            )
        })
            .then(res=>res.json())
            .then(json=>setItems([...items,item]))
            .catch(()=>{console.log('items was not added');})
  }

  function limitProductList(limit){
    if(limit === 'All'){
      getAllItems()
    }
    fetch('https://fakestoreapi.com/products?limit='.concat(limit))
            .then(res=>res.json())
            .then(json=>setItems(json))
  }

  function deleteItem(index){
    let indexInArr = items.map((element)=> element.id).indexOf(index)
    items.splice(indexInArr,1)
    // console.log(arrTemp.length);
    fetch('https://fakestoreapi.com/products/'.concat(index),{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>setItems([...items]))
  }

  return (
    <div className="App">
      <Nav/>
      <div className='contents'>

        <div className='categories'>
          <Categories  changeCategory={getCategory}/>
        </div>
        <div className='list-items'>
          <Routes>
            <Route path='/' element={<ListItems limitProductList={limitProductList} deleteItem={deleteItem} searchProduct={getSingleProduct} sortProducts={sortProducts} categoryName={categoryName} itemsList= {items}/>}/>
            <Route path='/electronics' element={<ListItems limitProductList={limitProductList} deleteItem={deleteItem} searchProduct={getSingleProduct} sortProducts={sortProducts} categoryName={categoryName} itemsList= {items}/>}/>
            <Route path='/jewelery' element={<ListItems limitProductList={limitProductList} deleteItem={deleteItem} searchProduct={getSingleProduct} sortProducts={sortProducts} categoryName={categoryName} itemsList= {items}/>}/>
            <Route path='/men clothing' element={<ListItems limitProductList={limitProductList} deleteItem={deleteItem} searchProduct={getSingleProduct} sortProducts={sortProducts} categoryName={categoryName} itemsList= {items}/>}/>
            <Route path='/womenclothing' element={<ListItems limitProductList={limitProductList} deleteItem={deleteItem} searchProduct={getSingleProduct} sortProducts={sortProducts} categoryName={categoryName} itemsList= {items}/>}/>
            <Route path='/addingProducts' element={<AddingProducts addProductFunction={addProduct}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
