const driverDataReducer = (state = [], action) => {
    switch(action.type){
        case 'setDriverData':
            return action.payload;
        default:
            return state;
    }
};

export default driverDataReducer;