

function Card({image, title, price,rating, description}){

    return(
        <>
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>${price}</p>
            <p>⭐️ {rating}</p>
            <p>{description}</p>

        </div>
        </>
    )
}

export default Card