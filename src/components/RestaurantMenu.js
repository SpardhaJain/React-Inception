import'./RestaurantMenu.scss';
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    if (resInfo === null) return <Shimmer />

    const resData = resInfo.cards[0]?.card?.card?.info;
    const { name, cuisines, areaName, costForTwoMessage, feeDetails, sla } = resData;
    const itemCards = resInfo.cards[2]?.groupedCard.cardGroupMap?.REGULAR.cards[2].card.card.itemCards;
    
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

            <div className="res-menu-container">
                <h3>Recommended ({itemCards.length})</h3>
                <div className="res-menu--details-container">
                    {itemCards.map((item) => {
                        const { name, description, defaultPrice, price } = item.card.info;
                        return(
                            <div key={name}>
                                <div className="dish-item-details">
                                    <div className="item-name">{name}</div>
                                    <div className="item-price">{"Rs. " + (price/100 || defaultPrice/100)}</div>
                                    <div className="item-desc">{description}</div>
                                </div>
                                <div className="dishes-divider"></div>
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    )
};

export default RestaurantMenu;