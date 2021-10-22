//import './News.css'

function News(props)
{
    return  <div className="news">
                {props.singleItem.name}, брой: {props.singleItem.count} <button onClick={()=>props.increaceItemCount(props.singleItem.id)}>+</button>
            </div>;
}


export default News;