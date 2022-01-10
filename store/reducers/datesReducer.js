import {
    SET_INITIAL_YEAR,
    SET_FINISH_YEAR,
    GET_COMMODITIES,
} from "../constants";

const INITIAL_STATE = {
    initialYear: new Date("2016/12/31").getFullYear(),
    finishYear: new Date("2016/12/31").getFullYear(),
    commodities: [],
    loading: true,
};

const datesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_INITIAL_YEAR:
            return {
                ...state,
                initialYear: action.payload,
            };
        case SET_FINISH_YEAR:
            return {
                ...state,
                finishYear: action.payload,
            };
        case GET_COMMODITIES:
            return {
                ...state,
                commodities: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default datesReducer;
