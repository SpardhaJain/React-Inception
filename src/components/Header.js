import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
// import resObj from "../utils/mockData";

// const toggleDropdown =() => {
//     const dropdownContentEl = document.querySelector('.filter-dropdown');
//     if (dropdownContentEl.classList.contains(HIDDEN_CLASS)) {
//         dropdownContentEl.classList.remove(HIDDEN_CLASS);
//     } else {
//         dropdownContentEl.classList.add(HIDDEN_CLASS);
//     }
// };

// let resList = [{
//     "data": {
//         "id": "216941",
//         "name": "Meghana Foods",
//         "cloudinaryImageId": "cndqc3y74jevnqk5oc99",
//         "cuisines": [
//             "Biryani",
//             "Chinese",
//             "Fast Food",
//             "South Indian"
//         ],
//         "costForTwo": 20000,
//         "costForTwoString": "₹200 FOR TWO",
//         "slaString": "40 MINS",
//         "avgRating": "3.9",
//         "totalRatings": 0
//     }
// }, {
//     "data": {
//       "id": "103789",
//       "name": "Starbucks Coffee",
//       "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
//       "cuisines": [
//         "Beverages",
//         "Cafe",
//         "Snacks",
//         "Desserts",
//         "Bakery",
//         "Ice Cream"
//       ],
//       "costForTwo": 40000,
//       "costForTwoString": "₹400 FOR TWO",
//       "slaString": "24 MINS",
//       "lastMileTravel": 0,
//       "avgRating": "4.4"
//     }
// }, {
//     "data": {
//         "type": "F",
//         "id": "50155",
//         "name": "Sri Laksmi Vaibhava",
//         "cloudinaryImageId": "ew1qjainpgvq72n0692h",
//         "cuisines": [
//           "Chinese",
//           "Desserts",
//           "Jain",
//           "North Indian",
//           "South Indian",
//           "Sweets"
//         ],
//         "costForTwo": 10000,
//         "costForTwoString": "₹100 FOR TWO",
//         "slaString": "16 MINS",
//         "avgRating": "4.3",
//     }
// }];

const Header = () => {
    const [resList, setListOfRestaurants] = useState([
        {
            "data": {
                "id": "216941",
                "name": "Meghana Foods",
                "cloudinaryImageId": "cndqc3y74jevnqk5oc99",
                "cuisines": [
                    "Biryani",
                    "Chinese",
                    "Fast Food",
                    "South Indian"
                ],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "slaString": "40 MINS",
                "avgRating": "3.9",
                "totalRatings": 0
            }
        }, {
            "data": {
            "id": "103789",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "slaString": "24 MINS",
            "lastMileTravel": 0,
            "avgRating": "4.4"
            }
        }, {
            "data": {
                "type": "F",
                "id": "50155",
                "name": "Sri Laksmi Vaibhava",
                "cloudinaryImageId": "ew1qjainpgvq72n0692h",
                "cuisines": [
                "Chinese",
                "Desserts",
                "Jain",
                "North Indian",
                "South Indian",
                "Sweets"
                ],
                "costForTwo": 10000,
                "costForTwoString": "₹100 FOR TWO",
                "slaString": "16 MINS",
                "avgRating": "4.3",
            }
        }
    ]);
    return (
        <div className="header d-flex">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" className="search-restaurants" id="search-input"/>
                <label htmlFor="search-input" className="search-label">
                    <button className="btn btn-primary search-cta">Search</button>
                </label>
            </div>
            <div className="nav-items">
                <ul className="d-flex">
                    <li className="filter-res" 
                    onClick={() => {
                        const filteredList = resList.filter(
                            (res) => res.data.avgRating > 4
                        );
                    setListOfRestaurants(filteredList);   
                    }}>
                    Filter</li>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;