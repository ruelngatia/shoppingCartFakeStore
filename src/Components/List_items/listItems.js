import React from "react";
import Tab from "../Tabs/Tab";
import Items from "./Items";

export default function ListItems(props){
    return (
        <div>
            <Tab limitProductList={props.limitProductList} searchProduct={props.searchProduct} sortProducts={props.sortProducts} categoryName={props.categoryName}/>
            <Items deleteItem={props.deleteItem} itemsList={props.itemsList}/>
        </div>
    )
}