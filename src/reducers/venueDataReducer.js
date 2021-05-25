const VenueReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SETVENUEDATA':
            state = action.payload;
            return state;
        case 'GETVENUEDATA':
            return state;
        default:
            return state;
    }
}
export default VenueReducer;