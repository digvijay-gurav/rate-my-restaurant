export const getVenueData = () => {
    return {
        type: "GETVENUEDATA"
    }
}
export const setVenueData = (data) => {
    return {
        type: "SETVENUEDATA",
        payload: data
    }
}
export const getParticipantData = () => {
    return {
        type: 'GETPARTICIPANTDATA'
    }
}