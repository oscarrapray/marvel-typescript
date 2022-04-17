import  { useEffect, useState } from "react";
import axios from 'axios'
import Heroe from "./Heroe";
import character from "./types";

const Heroes = () =>{
    const [state,setState] = useState<Array<character>>([])

    const consultarApi = async () =>{
        let heroesArray:Array<character>=[]
            const respuesta = await axios.get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=4531d217b229e96bad544de55c22cc51&hash=1e46284a8b81009fd3996f81fed32854')
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