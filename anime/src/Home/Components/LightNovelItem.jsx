const LightNovelPage = ({categoryItem}) => {
    return (
        <>
            {
                categoryItem.map((props, index) => {
                    return (
                        <div className={props.item} id="item" key = {index}>
                            <a href={props.Link} target="_blank">
                                <img src={props.image} alt="Manga"/>
                                <p className="description">{props.description}</p>
                                <p className="price">{props.price}</p>
                            </a>
                        </div>
                    )
                    
                })
            }
        
        </>
    )
}

export default LightNovelPage;