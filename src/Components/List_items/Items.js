import React from "react";
import Card from "./Card";
import './Items.css'

 export default function Items(props){
    const myItemsList = props.itemsList
  
    const listItems = myItemsList.map((item) =>
        <Card key={item.id} id={item.id} img={item.image} title={item.title}  price={item.price} deleteItem={props.deleteItem}></Card>
    );

    return(
        <div className="items">
           {listItems}
        </div>
    )
 }