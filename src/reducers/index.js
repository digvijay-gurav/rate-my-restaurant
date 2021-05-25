import VenueReducer from "./venueDataReducer";
import ParticipantReducer from "./participantDataReducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    venues: VenueReducer,
    participants: ParticipantReducer
});

export default allReducers;