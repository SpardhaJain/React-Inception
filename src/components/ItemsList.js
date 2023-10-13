import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = (props) => {
    const { itemCards, showItems, ind, isCart } = props;


    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // dispatch an action on click of add button
        dispatch(addItem(item));
    }

    return (
        <div id={!isCart ? `category-${ind+1}` : ''} className={`accordion-collapse collapse ${showItems? 'show' : ''}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body res-menu--details-container">
                {itemCards.map((itemCard) => {
                    const item = itemCard.card.info;
                    const { name, description, defaultPrice, price, imageId } = item;
                    return (
                        <div key={name}>
                            <div className="dish-item-details d-flex">
                                <div className="col-md-9">
                                    <div className="item-name">{name}</div>
                                    <div className="item-price">{"Rs. " + (price/100 || defaultPrice/100)}</div>
                                    <div className="item-desc">{description}</div>
                                </div>
                                <div className="col-md-3 item-image-wrapper">
                                    <button className={`btn btn-secondary ${!imageId ? 'w-100' : ''}`}
                                    onClick={() => handleAddItem(itemCard)}>
                                        {imageId && <img className="item-image" src={CDN_URL + imageId}/>}
                                        <span className={!isCart ? `add-item-cta ${!imageId ? 'p-static' : 'p-absolute'}` : 'd-none'}>Add +</span>
                                        <span className={isCart ? `add-item-cta ${!imageId ? 'p-static' : 'p-absolute'}` : 'd-none'}>Qty +</span>
                                    </button>
                                </div>
                            </div>
                            <div className="dishes-divider"></div>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
};

export default ItemsList;