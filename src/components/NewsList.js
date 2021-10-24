import { useState } from "react";
import News from './News.js'
import React from 'react'

class Order2 extends React.Component
{   
    render()
    {
        return <h2>Compontnt</h2>;
    }
}

function NewsList()
{
    const orderItems =  [{id:1, name:'Шапка', count:1}, {id:2, name:'Яке', count:2}, {id:3, name:'Блуза', count:3}, {id:4, name:'Тениска', count:4}]
    
    const [items, setItems] = useState(orderItems);

    function increaceItemCount(id)
    {
        const orderCopy = JSON.parse(JSON.stringify(items));       
        
        for(let i=0 ; i<orderCopy.length ; i++)
            if(orderCopy[i].id===id)
            {
                let itemCopy = orderCopy[i];
                itemCopy.count++;
                //orderCopy[i] = itemCopy;

                console.log(itemCopy)
                console.log(orderCopy)

                setItems(orderCopy);
            }
    }

    return  items.map(item=><News key={item.id} singleItem={item} increaceItemCount={increaceItemCount}/>);
}

export default NewsList;
