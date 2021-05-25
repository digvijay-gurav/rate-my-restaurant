import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import { getNearByVenueService } from "../services/getNearbyVenuesService";
import SearchLocation from "./searchLocation";
import ViewContent from "./resultsDisplay/viewContent";
import { getParticipantData, getVenueData, setVenueData,  } from "../actions";


function GetVenueMain() {
    const participants = useSelector(state => state.participants);
    //const [venueData, setVenueData] = useState(null);
    const dispatch = useDispatch();

    function fetchVenueData(zip) {
        getNearByVenueService(zip, function(response){
            console.log("resp", response.data.response);
            dispatch(setVenueData(response.data.response));
        });
    }
    return(
        <div className="main">
            <div className="headSection">
                <div className="pageTitle">
                    <h1>Lunchplace</h1>
                </div>
            </div>
            <div className="searchSection">
                <SearchLocation fetchVenueData={fetchVenueData} />
            </div>
            <div className="resultsSection">
                <ViewContent />
                {/* <button onClick={()=>dispatch(getParticipantData())}>Click</button> */}
                {/* <span>{participants.toString()}</span>
                <span onClick={setTestData()}>Venue obj</span> */}
            </div>
        </div>
    );
}

export default GetVenueMain;