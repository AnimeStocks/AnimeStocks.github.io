const SearchBar = () => {
    return (
        <>
            {/* SEARCH BAR */}
            <div className="product--searchbar">
                <input type="text" name="" id="search-item" placeholder="Search products" onChange={(e) => console.log(e.target.value)}/>
            </div>
        </>
    )
}

export default SearchBar;