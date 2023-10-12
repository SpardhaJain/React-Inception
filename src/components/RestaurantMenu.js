import'./RestaurantMenu.scss';
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import RestaurantCategory from './RestaurantCategory';
import { useParams } from "react-router-dom";
import { useState } from 'react';

const RestaurantMenu = () => {
    const [showAccordionIndex, setShowAccordionIndex] = useState(null);
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    if (resInfo === null) return <Shimmer />

    const resData = resInfo.cards[0]?.card?.card?.info;
    const { name, cuisines, areaName, costForTwoMessage, feeDetails, sla } = resData;
    
    const resCardsList = resInfo.cards[2]?.groupedCard.cardGroupMap?.REGULAR.cards;
    const categories = resCardsList.filter(resCard => resCard.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return(
        <div className="res-details-container">
            <div>
                <div className="res-header-container">
                    <div className="res-header-wrapper">
                        <div className="res-name-address-wrapper">
                            <div>
                                <p className="res-name">{name}</p>
                                <p className="res-cuisines">{cuisines.join(", ")}</p>
                            </div>
                            <div className="res-name-area">{areaName}</div>
                            <span className="res-fee-message">{feeDetails.message}</span>
                        </div>
                    </div>
                </div>

                <hr className="res-dotted-separator"/>

                <div className="res-time-cost">
                    <span>{sla.slaString}</span>
                    <span>{costForTwoMessage}</span>
                </div>
            </div>

            <div className="accordion">
                {categories.map(((category, index) => {
                    const categoryDetail = category.card?.card;
                    return (
                        <RestaurantCategory 
                            key={categoryDetail.title}
                            categoryDetail={categoryDetail}
                            catIndex={index}
                            showItems={index === showAccordionIndex && true}
                            expandedAccordion={() => {
                                setShowAccordionIndex(index);
                            }}
                        />)
                }))}
            </div>
        </div>
    )
};

export default RestaurantMenu;