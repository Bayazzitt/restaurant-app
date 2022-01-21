import React from 'react';

const restaurant = {
    "id": 9196,
    "uid": "54a94572-7733-4a9f-94d4-a78daffbfbc7",
    "name": "Blue Plate Spoon",
    "type": "Argentinian",
    "description": "Delhaize Group will achieve leading positions in food retailing in key mature and emerging markets. We accomplish our goal by developing strong regional companies benefiting from and contributing to the Groups strength, expertise and successful practices. Delhaize Group goes to market with a variety of food store formats. The Group is committed to offer a locally differentiated shopping experience to its customers in each of its markets, to deliver superior value and to maintain high social, environmental and ethical standards.",
    "review": "For dessert, we ordered the chocolate drizzled churros and they were delicious too! They even came with some fresh fruit (blueberries and strawberries).",
    "logo": "https://loremflickr.com/500/500/restaurant",
    "phone_number": "1-942-791-0740",
    "address": "Apt. 833 2923 Spinka Glen, New Rubyeberg, NH 83604",
    "hours": {
        "monday": {
            "opens_at": "10:46 AM",
            "closes_at": "6:55 PM",
            "is_closed": true
        },
        "tuesday": {
            "opens_at": "8:32 AM",
            "closes_at": "6:55 PM",
            "is_closed": true
        },
        "wednesday": {
            "opens_at": "8:58 AM",
            "closes_at": "5:11 PM",
            "is_closed": false
        },
        "thursday": {
            "opens_at": "6:45 AM",
            "closes_at": "10:59 PM",
            "is_closed": false
        },
        "friday": {
            "opens_at": "11:33 AM",
            "closes_at": "1:35 PM",
            "is_closed": true
        },
        "saturday": {
            "opens_at": "6:59 AM",
            "closes_at": "10:57 PM",
            "is_closed": false
        },
        "sunday": {
            "opens_at": "11:55 AM",
            "closes_at": "1:46 PM",
            "is_closed": false
        }
    }
}

function Restaurant({restaurant}) {
    return (
        <div className='restaurantDiv'>
            <div className='restaurant'>
                <div className='logo'>
                    <img src={restaurant.logo} alt="" />
                </div>
                <div className='restaurantInfo'>
                    <div className='restaurantNameType'>
                        <h1 className='restaurantName'> {restaurant.name}</h1>
                        <h2 className='restaurantType'> <span style={{color: "yellow"}}>Type :</span>  {restaurant.type}</h2>
                    </div>
                    <div className='restaurantDesc'> <span style={{color: "yellow"}}>Description :</span>  {restaurant.description}</div>
                    <div className='restaurantAdr'> <span style={{color: "yellow"}}>Addresses :</span>  {restaurant.address}</div>
                    <div className='restaurantDaysDiv'>
                        <div style={{color: "yellow"}}>↓ Days ↓ </div>
                        <div className='restaurantDays'>
                            {Object.keys(restaurant.hours).map(day => <p key={day} style={{ color: restaurant.hours[day].is_closed ? "red" : "black" }} className='day'>{day}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;
