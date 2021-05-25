import React, {useState} from "react";

function SearchLocation(props) {
    const [zipValue, setZipValue] = useState("");

    function getZipValue(event) {
        setZipValue(event.target.value);
    }

    function searchVenue() {
        props.fetchVenueData(zipValue);
    }
    return(
        <div className="searchRowWrapper">
            <div className="inputBoxWrapper">
                <input type="text" onChange={(e)=>getZipValue(e)} placeholder="Enter Zip" />
            </div>
            <div className="searchBtnWrapper">
                <button onClick={searchVenue}>Search</button>
            </div>
        </div>
    )
}
export default SearchLocation;