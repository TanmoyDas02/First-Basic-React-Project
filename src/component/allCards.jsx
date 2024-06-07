
function AllCards(){
    return (
        <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>

            {data.map(singleItem => (
                <div key={singleItem.id} style={{backgroundColor:"purple", width:"250px", height:"300px", overflow:"hidden"}}>
                <img src={singleItem.thumbnail} style={{width:"60%", objectFit:"cover"}} />
                <h2>{singleItem.title}</h2>
                <p>{singleItem.price}$</p>
                <p>{singleItem.description}</p>
            </div>
            ))}
            
        </div>
    )
}

export default AllCards;