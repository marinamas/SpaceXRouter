import React, { useEffect, useState } from 'react'
import '../App.css';

 function Rockets({match}) {

    const [item, setItem] = useState({})
    useEffect(()=> {
        fetchItem()
    }, [])
   

    const fetchItem = async() =>
    {
        const data = await fetch(`https://api.spacexdata.com/v3/rockets/${match.params.id}`)
        const item = await data.json()

        setItem(item)
    }
    return (
        <div className = "rocket" >
         <h2 style={{textAlign : 'center'}} > {item.rocket_name}</h2>
         <p>{item.description}</p>
         <h3> <a href={item.wikipedia} target= "_blank">{item.rocket_name}</a> </h3>
        </div>
    )
}
export default Rockets