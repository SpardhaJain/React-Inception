import { CDN_URL } from "../utils/constants";

const RestaurantCard = (resDetails) => {
    const { data } = resDetails?.resData;
    const { name, cuisines, avgRating, slaString, cloudinaryImageId, costForTwoString } = data;
    const styleCard = {
        width: '332px',
        border: 'none'
    };
    return (
        <div className="card res-card" style={styleCard}>
            <div className="res-card-wrapper">
                <img className="card-img-top" src={CDN_URL + cloudinaryImageId} alt="Restaurant Card Logo" />
                <div className="card-body">
                    <h5 className="card-title res-name">{name}</h5>
                    <p className="res-cuisine">{cuisines.join(', ')}</p>
                    <div className="res-details d-flex justify-content-between">
                        <div className="res-ratings">
                            <span className="icon-star"></span>
                            <span>{avgRating}</span>
                        </div>
                        <div>&#x2022;</div>
                        <div>{slaString}</div>
                        <div>&#x2022;</div>
                        <div>{costForTwoString}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;