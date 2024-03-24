import "./index.css";

function Card({path, title, description}){
    return (
        <div className="card-container">
            <img className="icon" src={path} alt="card icon" />
            
            <div className="card-body">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default Card;