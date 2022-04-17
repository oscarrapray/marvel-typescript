import React from "react"
import character from "./types"

interface props {
    hero:character
}
const Heroe= ({hero}:props) =>{
    const{name,image} = hero
    return (
        <div className="card">
                <div className="card-img">
                    <img src={image} alt = {name}/>
                </div>
                <div className ="card-container">
                   <p className ="card-title">{name}</p>
                </div>
            </div>     
    )
}
export default Heroe