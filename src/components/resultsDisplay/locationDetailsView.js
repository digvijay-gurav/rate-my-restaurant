import React from 'react';
import {useSelector} from "react-redux";
import "./locationDetailsView.css";

function LocationDetailsView() {
    const venues = useSelector(state => state.venues);
    function displayRestaurants() {
        const displayVenues = venues?.groups?.[0]?.items;
        console.log("disp", displayVenues);
        if(displayVenues && displayVenues.length > 0) {
            let restaurants = displayVenues.map((venue) => {
                return (
                    <div className="restaurantCellMain" key={venue.venue?.id}>
                        <div className="restaurantName">{venue.venue?.name}</div>
                        <div className="restaurantCategory">{venue.venue?.categories[0].name}</div>
                    </div>
                );
                // return `<div>${venue.venue.name}</div>
            });
            const displayRestaurantRow = <div className="venueContainer"><div className="venueleftBlock"></div>{restaurants}</div>;
            return displayRestaurantRow;
        } else {
            return <div className="nodata"></div>;
        }
    }
    return (
        <div className="displayVenuesMain">
            {displayRestaurants()}
        </div>
    )
}
export default LocationDetailsView;