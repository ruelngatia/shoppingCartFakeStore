import React from "react";  
import './Card.css'
import { RiDeleteBinLine } from "react-icons/ri";

export default function Card(props){
    return(
        <div className="card">
            <div className="image-container">
                <img src={props.img} alt="prduct name"/>
            </div>
            <span className="title">{props.title}</span>
            <p className="description">
                {props.description}
            </p>
            <span className="price">{props.price}</span>
            <div id="del"><RiDeleteBinLine
                onClick={()=>{
                    props.deleteItem(props.id)
                }}
            /></div>
        </div>
    )
}