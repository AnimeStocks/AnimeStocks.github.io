import { useState } from "react"
import { Link } from "react-router-dom"
import MerchCategories from "./LogicPerPage/MerchCategories"
import MerchPage from "./Components/MerchItem"
import MerchPageList from "./Components/MerchPageList.js"

const Merch = () => {
    // FOR THE CATEGORIES
    const [categoryItem, setCategoryItem] = useState(MerchPageList);

    const filter = (selectedCategory) => {
        if(selectedCategory == 'all') {
            return setCategoryItem(MerchPageList);
        }

        const filteredData = MerchPageList.filter(MerchPageList => MerchPageList.category === selectedCategory)
        setCategoryItem(filteredData)
    }
    // END FOR THE CATEGORIES

    return (
        <div>
            <section id="manga--body">
                <div className="manga--bodypic">
                    <img id="manga--pic1" src="/images/Home/MerchBanner.webp" alt=""/>
                    <img id="manga--pic2" src="/images/Home/MobileMerchBanner.webp" alt=""/>
                </div>
            </section>

            <main id="main_doc" className="reveal">
            <div className="update">
                <div className="lilupdate">
                <img src="https://drive.google.com/uc?id=1HWtOM93UueTb6LxgafVr-MXXMrQ8U7Hn" alt=""/>
                <h1>Merch</h1>
                <h3>Updated: 28/07/2022</h3>
            </div>

            {/* SEARCH BAR */}
            <div className="product--searchbar">
                <input type="text" name="" id="search-item" placeholder="Search products" />
            </div>

            {/* FOR THE CATEGORIES */}
            <MerchCategories filter={filter}/>

            <div className="manga--featured">
                <button><a href="#">Find Manga</a></button>
                </div>
            </div>

            {/* CONTAINS CATEGORIES AND CATEGORYITEMS*/}
            <div id="container">
                <div id="compiler">
                    <MerchPage categoryItem={categoryItem}/>
                </div>
            </div>

            {/* BANNER SECTION */}
            <section id="banner" className="reveal">
                <div className="banner">
                    <Link to="/Manga" target="_blank">
                        <img src="/images/Home/Manga Banner.webp" alt="Banner_Image"/>
                    </Link>
                </div>
            </section>
            </main>
        </div>
    )
}

export default Merch;