import { CDN_URL } from "../utils/constants";

const RestaurantCard = (resDetails) => {
    const { info } = resDetails?.resData;
    const { name, cuisines, avgRatingString, sla, cloudinaryImageId, costForTwo } = info;
    const { slaString } = sla;
    return (
        <div className="res-card-wrapper">
            <img className="card-img-top" src={CDN_URL + cloudinaryImageId} alt="Restaurant Card Logo" />
            <div className="card-body">
                <h5 className="card-title res-name">{name}</h5>
                <p className="res-cuisine">{cuisines.join(', ')}</p>
                <div className="res-details d-flex justify-content-between">
                    <div className="res-ratings">
                        <span className="icon-star"></span>
                        <span>{avgRatingString}</span>
                    </div>
                    <div>&#x2022;</div>
                    <div>{slaString}</div>
                    <div>&#x2022;</div>
                    <div>{costForTwo}</div>
                </div>
            </div>
        </div>
    );
};

//  Higher Order Function

//  input - RestaurantCard ==> output - RestaurantCardFast

export const withFastLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="res-card-badge">Fast Delivery</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard;