import { CDN_URL } from "../utils/constants";
import { Link } from 'react-router-dom';

const RestaurantCard = (resDetails) => {
    const { info } = resDetails?.resData;
    const { name, cuisines, avgRatingString, sla, cloudinaryImageId, costForTwo, id } = info;
    const { slaString } = sla;
    const styleCard = {
        width: '332px',
        border: 'none'
    };
    return (
        <Link to={"/restaurants/" + id} className="card res-card" style={styleCard}>
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
        </Link>
    );
};

export default RestaurantCard;