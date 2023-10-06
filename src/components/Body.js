import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";

// Not using keys in loop (unacceptable) <<<<<< using index as keys <<<<<<< unique id (best practice)

const Body = () => {

    const [resList, setResList] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);

        //Optional Chaining
        const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(restaurants);
        setFilteredRestaurants(restaurants);
    };

    const [searchText, setsearchText] = useState("");

    const searchResChangeHandler = (e) => {
        setsearchText(e.target.value);
    };
    const searchResClickHandler = () => {
        const searchedResList = resList.filter((response) => {
            return response?.info?.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredRestaurants(searchedResList)
    }


    // Conditional Rendering
    return resList.length === 0 ? (
        // Shimmer UI
        <Shimmer/>
    ) : (
        <div className="food-body">
            <div className="nav-items">
                <input type="text" placeholder="Search" className="search-restaurants" id="search-input"
                    value={searchText} onChange={searchResChangeHandler}/>
                <button className="btn btn-primary search-cta"
                    onClick={searchResClickHandler}>Search</button>
                <button className="btn btn-primary top-restaurants-cta" 
                    onClick={() => {
                        const filteredList = resList.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setResList(filteredList);   
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container d-flex">
                { filteredRestaurants.length ? 
                    filteredRestaurants.map((restaurant, index) => (
                        <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
                    ) :  
                    ( <h3>No Restaurants Found</h3> )
                }
                {/* <RestaurantCard resData = {resObj[0]} /> */}
            </div>
        </div>
    );
};

export default Body;