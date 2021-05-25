import React from 'react'
import LocationDetailsView from "./locationDetailsView";
export default function viewContent() {
    function addVoterRow() {
        const newRow = `<div className="VotersSection">
            <div className="rowCell participantcell"><input type="text" /></div>
            <div className="cell">A</div>
            <div className="cell">B</div>
            <div className="cell">C</div>
        </div>`
        let div = document.createElement('div');
        div.innerHTML = newRow;
        let parentElement = document.getElementsByClassName('tableWrpper');
        console.log("par", parentElement);
        parentElement[0].appendChild(div);
    }
    return (
        <div className="resultsTable">
            <div className="tableWrpper">
                <div className="resultsTableHeader">
                    <LocationDetailsView />
                </div>
            </div>
            
            {/* <div className="VotersSection">

            </div> */}
            <div className="addParticipantBtnWrapper">
                <button onClick={addVoterRow}>Add participant</button>
            </div>
        </div>
    )
}
