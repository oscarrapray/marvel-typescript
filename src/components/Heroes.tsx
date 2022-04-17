import  { useEffect, useState } from "react";
import axios from 'axios'
import Heroe from "./Heroe";
import character from "./types";

const Heroes = () =>{
    const [state,setState] = useState<Array<character>>([])

    const consultarApi = async () =>{
        let heroesArray:Array<character>=[]
            const respuesta = await axios.get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=cc33eb821314e08e79183f46724d593e&hash=9507760c50ef007a5d386e426a48d5ea')
            let resp = respuesta.data.data.results
            resp.forEach((item:any)=>{
               heroesArray.push({
                  id:item.id, 
                  image:item.thumbnail.path+'.'+item.thumbnail.extension ,
                  name:item.name
               }) 
            })
            setState(heroesArray)
    }

    useEffect(()=>{
        consultarApi()
    },[])

    return (

        <div className = 'container'>
            <div className = "l-container">
                <div className="container-card">
                  {
                        state.map(hero =>(
                            <Heroe 
                                key = {hero.id}
                                hero = {hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Heroes