const ParticipantReducer = (state = true, action) => {
    switch(action.type) {
        case 'SETPARTICIPANTDATA':
            return !state;
        case 'GETPARTICIPANTDATA':
            return !state;
        default:
            return state;
    }
}
export default ParticipantReducer;