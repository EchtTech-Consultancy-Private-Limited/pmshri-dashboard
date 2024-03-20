import { CARD_DASHBOARD_FILTER_DATA_FETCH_PENDING, CARD_DASHBOARD_FILTER_DATA_FETCH_FULFILLED, CARD_DASHBOARD_FILTER_DATA_FETCH_REJECTED } from "src/constants/types";
import { InitialStateModel } from "src/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel

export const filterWiseDashboardCardDataReducer = function (state = initialStateList, action: any) {
    
    const { type, payload } = action;
    
    switch (type) {
        case CARD_DASHBOARD_FILTER_DATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case CARD_DASHBOARD_FILTER_DATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload
            };
        }
        case CARD_DASHBOARD_FILTER_DATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default filterWiseDashboardCardDataReducer