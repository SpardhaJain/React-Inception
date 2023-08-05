import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resObj from "../utils/mockData";

// Not using keys in loop (unacceptable) <<<<<< using index as keys <<<<<<< unique id (best practice)

const Body = () => {

    const [resList, setListOfRestaurants] = useState(resObj);


    return (
        <div className="food-body">
            <div className="res-container d-flex">
            <div className="nav-items">
                    <button className="filter-res" 
                    onClick={() => {
                        const filteredList = resObj.filter(
                            (res) => res.data.avgRating > 4.2
                        );
                        setListOfRestaurants(filteredList);   
                    }}>
                    Filter</button>
            </div>
                {resList.map((restaurant, index) => (
                        <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>)
                )}
                {/* <RestaurantCard resData = {resObj[0]} /> */}
            </div>
        </div>
    );
};

export default Body;