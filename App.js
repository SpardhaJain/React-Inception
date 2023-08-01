import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

/**
 * Header
 *  - Logo Component
 *  - Search Component
 *  - Nav Items
 * Body
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of restaurant, star rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const styleCard = {
    width: '332px',
    border: 'none'
};

const resObj = [
    {
        "data": {
            "type": "F",
            "id": "216941",
            "name": "Meghana Foods",
            "uuid": "f9f3db10-e663-48c2-993e-d138861c0748",
            "city": "1",
            "area": "KR Puram",
            "totalRatingsString": "",
            "cloudinaryImageId": "cndqc3y74jevnqk5oc99",
            "cuisines": [
                "Biryani",
                "Chinese",
                "Fast Food",
                "South Indian"
            ],
            "tags": [
                
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 40,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 40,
            "slaString": "40 MINS",
            "lastMileTravel": 0,
            "slugs": {
                "restaurant": "hotel-kavin-battarahalli-battarahalli",
                "city": "Bangalore"
            },
            "cityState": "1",
            "address": "",
            "locality": "Kuvempu Layout",
            "parentId": 99703,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
                
            ],
            "chain": [
                
            ],
            "feeDetails": {
                "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 7200,
                    "message": ""
                },
                {
                    "name": "BASE_TIME",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "ANCILLARY_SURGE_FEE",
                    "fee": 0,
                    "message": ""
                }
                ],
                "totalFees": 7200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "7200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7547860~p=2~eid=00000189-aa2e-f5af-1745-3ec8008d024f~srvts=1690777351599~80426",
            "badges": {
                "imageBased": [
                
                ],
                "textBased": [
                
                ],
                "textExtendedBadges": [
                
                ]
            },
            "lastMileTravelString": "8.3 kms",
            "hasSurge": false,
            "cta": {
                "link": "swiggy://menu?restaurant_id=216941&source=collection&query=Dosa",
                "type": "DEEPLINK",
                "text": "RESTAURANT_MENU"
            },
            "sla": {
                "restaurantId": "",
                "deliveryTime": 40,
                "minDeliveryTime": 40,
                "maxDeliveryTime": 40,
                "lastMileTravel": 0,
                "lastMileDistance": 8.3,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.9",
            "totalRatings": 0,
            "new": false
        }
    }, {
        "data": {
          "type": "F",
          "id": "103789",
          "name": "Starbucks Coffee",
          "uuid": "9fc9d619-28ac-4dc1-8116-630543d6c47f",
          "city": "1",
          "area": "Whitefield",
          "totalRatingsString": "",
          "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
          "cuisines": [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Bakery",
            "Ice Cream"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "slaString": "24 MINS",
          "lastMileTravel": 0,
          "slugs": {
            "restaurant": "starbucks-coffee-miraya-rose-whitefield",
            "city": "Bangalore"
          },
          "cityState": "1",
          "address": "",
          "locality": "Ramagondanahalli",
          "parentId": 195515,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfoV2": {
            "header": "",
            "shortDescriptionList": [
              
            ],
            "descriptionList": [
              
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3300,
                "message": ""
              },
              {
                "name": "BASE_TIME",
                "fee": 0,
                "message": ""
              },
              {
                "name": "ANCILLARY_SURGE_FEE",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3300",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7354797~p=5~eid=00000189-aa39-3ce7-1716-eba000dd0533~srvts=1690778025191~83908",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "cta": {
            "link": "swiggy://menu?restaurant_id=103789&source=collection&query=Coffee",
            "type": "DEEPLINK",
            "text": "RESTAURANT_MENU"
          },
          "sla": {
            "restaurantId": "",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "lastMileTravel": 0,
            "lastMileDistance": 3,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.4",
          "totalRatings": 0,
          "new": false
        }
    }, {
        "data": {
            "type": "F",
            "id": "50155",
            "name": "Sri Laksmi Vaibhava",
            "uuid": "461625ee-d984-4ab1-9a04-7586ac56c02f",
            "city": "1",
            "area": "Whitefield",
            "totalRatingsString": "",
            "cloudinaryImageId": "ew1qjainpgvq72n0692h",
            "cuisines": [
              "Chinese",
              "Desserts",
              "Jain",
              "North Indian",
              "South Indian",
              "Sweets"
            ],
            "tags": [
              
            ],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 16,
            "minDeliveryTime": 16,
            "maxDeliveryTime": 16,
            "slaString": "16 MINS",
            "lastMileTravel": 0,
            "slugs": {
              "restaurant": "sri-laxmi-vaibhava-marathahalli-marathahalli",
              "city": "Bangalore"
            },
            "cityState": "1",
            "address": "",
            "locality": "Vinayaka Layout",
            "parentId": 7662,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfoV2": {
              "header": "",
              "shortDescriptionList": [
                
              ],
              "descriptionList": [
                
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2700,
                  "message": ""
                },
                {
                  "name": "BASE_TIME",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2700,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2700",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.7 kms",
            "hasSurge": false,
            "cta": {
              "link": "swiggy://menu?restaurant_id=50155&source=collection&query=Coffee",
              "type": "DEEPLINK",
              "text": "RESTAURANT_MENU"
            },
            "sla": {
              "restaurantId": "",
              "deliveryTime": 16,
              "minDeliveryTime": 16,
              "maxDeliveryTime": 16,
              "lastMileTravel": 0,
              "lastMileDistance": 0.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 0,
            "new": false
        }
    }, {
        "data": {
            "type": "F",
            "id": "217506",
            "name": "Chaayos Chai+Snacks=Relax",
            "uuid": "f3ad5a5c-b250-4793-b15c-25023e9420d2",
            "city": "1",
            "area": "Whitefield",
            "totalRatingsString": "",
            "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
            "cuisines": [
              "Bakery",
              "Beverages",
              "Chaat",
              "Desserts",
              "Home Food",
              "Italian",
              "Maharashtrian",
              "Snacks",
              "Street Food",
              "Sweets"
            ],
            "tags": [
              
            ],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "slaString": "23 MINS",
            "lastMileTravel": 0,
            "slugs": {
              "restaurant": "chaayos-park-square-mall-indiranagar",
              "city": "Bangalore"
            },
            "cityState": "1",
            "address": "",
            "locality": "Ascendas Park Square",
            "parentId": 281782,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfoV2": {
              "header": "",
              "shortDescriptionList": [
                
              ],
              "descriptionList": [
                
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3300,
                  "message": ""
                },
                {
                  "name": "BASE_TIME",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 3300,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3300",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "cta": {
              "link": "swiggy://menu?restaurant_id=217506&source=collection&query=Coffee",
              "type": "DEEPLINK",
              "text": "RESTAURANT_MENU"
            },
            "sla": {
              "restaurantId": "",
              "deliveryTime": 23,
              "minDeliveryTime": 23,
              "maxDeliveryTime": 23,
              "lastMileTravel": 0,
              "lastMileDistance": 3,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 0,
            "new": false
        }
    }, {
        "data": {
            "type": "F",
            "id": "413039",
            "name": "Smoor",
            "uuid": "f8949473-6c5b-435a-87df-5d85d6b74f1b",
            "city": "1",
            "area": "Whitefield",
            "totalRatingsString": "",
            "cloudinaryImageId": "12b09df9a17e77a05819f004e7381aec",
            "cuisines": [
              "Desserts",
              "Bakery"
            ],
            "tags": [
              
            ],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 0,
            "slugs": {
              "restaurant": "smoor-whitefield-whitefield-4",
              "city": "Bangalore"
            },
            "cityState": "1",
            "address": "",
            "locality": "Forum Shantiniketan Mall",
            "parentId": 3506,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfoV2": {
              "header": "",
              "shortDescriptionList": [
                
              ],
              "descriptionList": [
                
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3900,
                  "message": ""
                },
                {
                  "name": "BASE_TIME",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 3900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7254628~p=11~eid=00000189-aa39-3ce7-1716-eba600dd0b14~srvts=1690778025191~83908",
            "badges": {
              "imageBased": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "description": "",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "lastMileTravelString": "4.3 kms",
            "hasSurge": false,
            "cta": {
              "link": "swiggy://menu?restaurant_id=413039&source=collection&query=Coffee",
              "type": "DEEPLINK",
              "text": "RESTAURANT_MENU"
            },
            "sla": {
              "restaurantId": "",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 0,
              "lastMileDistance": 4.3,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.2",
            "totalRatings": 0,
            "new": false
        }
    }, {
        "data": {
            "type": "F",
            "id": "326527",
            "name": "SLAY Coffee Bar",
            "uuid": "7a6c9dbf-84e4-473c-bdf4-70cfa5c4ff34",
            "city": "1",
            "area": "Whitefield",
            "totalRatingsString": "",
            "cloudinaryImageId": "533e9a593470bb4d064afb7f8967a485",
            "cuisines": [
              "Beverages",
              "Desserts"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 0,
            "slugs": {
              "restaurant": "slay-coffee-bar-swamy-vivekanandha-road-whitefield",
              "city": "Bangalore"
            },
            "cityState": "1",
            "address": "",
            "locality": "Whitefield",
            "parentId": 10573,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3300,
                  "message": ""
                },
                {
                  "name": "BASE_TIME",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 3300,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3300",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7254684~p=6~eid=00000189-aa39-3ce7-1716-eba100dd061d~srvts=1690778025191~83908",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "cta": {
              "link": "swiggy://menu?restaurant_id=326527&source=collection&query=Coffee",
              "type": "DEEPLINK",
              "text": "RESTAURANT_MENU"
            },
            "sla": {
              "restaurantId": "",
              "deliveryTime": 26,
              "minDeliveryTime": 26,
              "maxDeliveryTime": 26,
              "lastMileTravel": 0,
              "lastMileDistance": 3,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.4",
            "totalRatings": 0,
            "new": false
        }
    }
];

const Header = () => {
    return (
        <div className="header d-flex">
            <div className="logo-container">
                <img className="logo" src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"/>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" className="search-restaurants" id="search-input"/>
                <label htmlFor="search-input" className="search-label">
                    <button className="btn btn-primary search-cta">Search</button>
                </label>
            </div>
            <div className="nav-items">
                <ul className="d-flex">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (resDetails) => {
    const { data } = resDetails?.resData;
    const { name, cuisines, avgRating, slaString, cloudinaryImageId, costForTwoString } = data;
    return (
        <div className="card res-card" style={styleCard}>
            <div className="res-card-wrapper">
                <img className="card-img-top" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="Restaurant Card Logo" />
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

// Not using keys in loop (unacceptable) <<<<<< using index as keys <<<<<<< unique id (best practice)

const Body = () => {
    return (
        <div className="food-body">
            <div className="res-container d-flex">
                {resObj.map((restaurant, index) => (
                        <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>)
                )}
                {/* <RestaurantCard resData = {resObj[0]} /> */}
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app"> 
            <Header />
            <Body />
        </div>
    );
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)