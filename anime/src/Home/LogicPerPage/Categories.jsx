const Categories = ({filter}) => {
    return (
        <div id="categories">
            <ul>
                <li className="active" onClick={() => filter('all')}>All</li>
                <li onClick={() => filter('drama')}>Drama</li>
                <li onClick={() => filter('romance')}>Romance</li>
                <li onClick={() => filter('fantasy')}>Fantasy</li>
                <li onClick={() => filter('action')}>Action</li>
                <li onClick={() => filter('other')}>Others</li>
            </ul>
        </div>
    )
}

export default Categories;