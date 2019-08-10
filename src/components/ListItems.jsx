import React from 'react'

export default function ListItems(props) {
    
    return (

        <div >
            <a href="#">
                <ul className="list-inline" onClick={()=>props.handleItemClick(props.data)}>
                <li className="list-inline-item">{props.data.img}</li>
                <li className="list-inline-item">{props.data.name}</li>
                <li className="list-inline-item">{props.data.description}</li>
                </ul>
            </a>
        </div>
    )
}
