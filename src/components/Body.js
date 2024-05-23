import RestaurantCard, { withFastLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import { RES_LIST_API } from '../utils/constants';
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
import { Link } from 'react-router-dom';
const styleCard = {
    width: '332px',
    border: 'none'
};

// Not using keys in loop (unacceptable) <<<<<< using index as keys <<<<<<< unique id (best practice)

const Body = () => {

    const [resList, setResList] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_LIST_API);
        const json = await data.json();

        //Optional Chaining
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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
    const RestaurantCardFast = withFastLabel(RestaurantCard);

    const { loggedInUser, setUserName } = useContext(UserContext);

    // Conditional Rendering
    return resList?.length === 0 ? (
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
                        setFilteredRestaurants(filteredList);  
                    }}>
                    Top Rated Restaurants
                </button>

                <label className="m-4" htmlFor="user-name">User Name:</label>
                <input id="user-name" type="text" placeholder="UserName" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="res-container d-flex">
                { filteredRestaurants?.length ? 
                    filteredRestaurants.map((restaurant, index) => (
                        <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id} className="card res-card" style={styleCard}>
                            {
                                restaurant.info.sla?.deliveryTime && restaurant.info.sla?.deliveryTime < 25 ?
                                (
                                    <RestaurantCardFast resData = {restaurant}/>
                                ) : (
                                    <RestaurantCard resData = {restaurant}/>
                            )}
                        </Link>
                    )) :  
                    ( <h3>No Restaurants Found</h3> )
                }
            </div>
        </div>
    );
};

export default Body;