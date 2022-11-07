import React  from "react";  
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { MdFilterListAlt } from "react-icons/md";
import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import './Tab.css'

export default function Tab(props){
    const[sortDesc,setSortOrder] = useState(true)

    let arrLength = []
    let count = 0
    while(count < 20){
        arrLength.push((count = count + 2))
    }

    return(
        <div className="tab">
            <ul>
                <li>{props.categoryName}</li>
                <input placeholder="Search product here" type={'text'} 
                    onChange={(value)=>{
                        props.searchProduct(value.target.value)
                    }}
                />
                <li><MdOutlineSearch size={20} color='#BDBDBD'/></li>
                <li onClick={()=>{
                        setSortOrder(!sortDesc);
                        props.sortProducts(sortDesc?'desc':'asc');
                    }
                    }>{sortDesc?<FaSortAmountDown size={14} color='#BDBDBD'/>:<FaSortAmountUp size={14} color='#BDBDBD'/>}</li>
                <li>
                    <select onChange={(el)=>props.limitProductList(el.target.value)}>
                        <option>All</option>
                        {arrLength.map((ele)=> <option key={ele}>{ele}</option>)}
                    </select>
                </li>
            </ul>
        </div>
    )
}