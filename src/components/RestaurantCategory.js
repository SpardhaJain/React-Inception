import ItemsList from "./ItemsList";

const RestaurantCategory = (props) => {
    const { catIndex, categoryDetail, showItems, expandedAccordion } = props;
    const { title, itemCards } = categoryDetail;
    return (
        <div>
            <div key={title} className="accordion-item res-menu-container">
                <h2 className="accordion-header" id="headingOne">
                    <button className={`accordion-button category-title ${!showItems ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#category-${catIndex+1}`} aria-expanded="true" aria-controls="collapseOne"
                        onClick={() => expandedAccordion()}>
                        {title + " (" + itemCards.length + ")"}
                    </button>
                </h2>

                {showItems && <ItemsList ind={catIndex} itemCards={itemCards} showItems={showItems}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;