const initialState = {
    user_id: 0,
    dropoff_id: 0,
    pickup_id: 0,
    fare: 0,
    vehicle_typeID: 1
}

const rideNowRequestReducer = (state = initialState, action) => {
    switch(action.type){
        case 'setUserId':
            return {...state, user_id: action.payload};
        case 'setDropoffId':
            return {...state, dropoff_id: action.payload};
        case 'setPickupId':
            return {...state, pickup_id: action.payload};
        case 'setFare':
            return {...state, fare: action.payload};
        case 'setVehicleId':
            return {...state, vehicle_typeID: action.payload};
        default:
            return state;
    }
};

export default rideNowRequestReducer;