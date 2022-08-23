const NovelSec = (props) => {
    return (
    <div>
        <div className="container">
            <a href={props.Link} target="_blank">
                <img src={props.image} alt=""/>
                <p className="description">{props.description}</p>
                <p className="price">{props.price}</p>
            </a>
        </div>
    </div>
    )
}

export default NovelSec;