import React, {useState} from 'react'
import './Css/Search.css'

export default function Search(props) {


    return (
        <div className="container-search">
              <div className="row">
                    <div className="col text-center">
                    <h1>Search For Items</h1>
                    <p className="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
                    </div>
                </div>
            <div class="dropdown">
            <input type="text" className="search-query form-control" value={props.ItemValue} onChange={props.onChangeFilter} placeholder="Enter Product Name" />

            <div className="dropdown-content">
               
            {
                     props.items.map((data)=>(
                            
                     <div  onClick={()=>props.handleItemClick(data)} key={data.id}>
                            <a href="#" className="list-inline-item items-style">
                            {data.img}&nbsp;&nbsp;&nbsp;
                            {data.name}&nbsp;&nbsp;&nbsp;
                            {data.description}&nbsp;&nbsp;&nbsp;
                            </a>
                     </div>
                     ))
                }

        </div>
            </div>

            
            {
                props.added.map((data)=>
                    <div key={data.id} className="d-inline-block radious m-2">
                        <span>{data.name}</span> 
                        <a href="#" 
                            onClick={()=>props.delete(data.id)} className="badge badge-danger ml-2">X</a>
                    </div>)
            }
      
      
    </div>
    )
}
