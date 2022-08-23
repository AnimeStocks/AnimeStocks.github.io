const MerchCategories = ({filter}) => {
    return (
        <div id="categories">
            <ul>
                <li className="active" onClick={() => filter('all')}>All</li>
                <li onClick={() => filter('tshirt')}>T-shirt</li>
                <li onClick={() => filter('hoodie')}>Hoodie</li>
                <li onClick={() => filter('figure')}>Figure</li>
                <li onClick={() => filter('shoes')}>Shoes</li>
                <li onClick={() => filter('other')}>Others</li>
            </ul>
        </div>
    )
}

export default MerchCategories;