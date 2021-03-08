import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"


 function Rockets() {

    const [items, setItem] = useState([ ])
    useEffect(()=> {
        fetchItems()
    }, [])

    const fetchItems = async() =>
    {
        const data = await fetch('https://api.spacexdata.com/v3/rockets')
        const items = await data.json()
        setItem(items)
    }
    return (
        <div style={{textAlign : 'center'}}>
            <h1 > List of Rockets</h1>
           {items.map((item,index)=> <h2 key ={index}> <Link to={`rockets/${item.rocket_id}`} > {item.rocket_name} </Link></h2>)}
        </div>
    )
}

export default Rockets