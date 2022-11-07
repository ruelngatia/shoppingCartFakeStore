import React from "react"; 
import './AddingProducts.css' 

export default function AddingProducts(props){

    let title = document.getElementById('inTitle')
    let description = document.getElementById('inDescription')
    let price = document.getElementById('inPrice')
    let category = document.getElementById('inCactegory')

    function formValidator(){
        
       
        if(title == '' || title == null){
            alert('input missing value title')
        }
        if(description == '' || title == null){
            alert('input missing value')
        }
        if(price == '' || title == null){
            alert('input missing value')
        }
        if(category == '' || title == null){
            alert('input missing value')
        }
    }

    return(
        <div className="adding-products">
            <h2>Add your items here</h2>
          <form>
            
            <div>
                <label>Title</label>
                <br/>
                <input id="inTitle" type={'text'}/>     
            </div>
            <div>
                <label>Category</label>
                <br/>
                <select id="inCactegory">
                    <option>Electornics</option>
                    <option>Jewelery</option>
                    <option>Men's clothing</option>
                    <option>Womens's clothing</option>
                </select>
            </div>
            <div>
                <label>Description</label>
                <br/>
                <textarea id="inDescription" rows={5}/>
            </div>

            <div>
                <label>Price {'(Ksh)'}</label>
                <br/>
                <input id="inPrice"  type={'number'}/>
            </div>

            <div className="add-image">

            </div>

            <button type="button" onClick={()=>{
                
                formValidator()
                let product ={
                    id: Math.random().toFixed(1),
                    title: title.value,
                    price: price.value,
                    description: description.value,
                    image: 'https://i.pravatar.cc',
                    category: category.value
                }
                props.addProductFunction(product)

            }}>Add element</button>
            <br/>

          </form>

        </div>
    )
}