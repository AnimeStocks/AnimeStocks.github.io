const MangaSec = (props) => {
    return (
    <div>
        <div className="container">
            <a href={props.Link} target="_blank">
                <img src={props.image} alt="Manga"/>
                <p className="description">{props.description}</p>
                <p className="price">{props.price}</p>
            </a>
        </div>
    </div>
    )
}

export default MangaSec;