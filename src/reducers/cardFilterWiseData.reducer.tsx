import { CARD_FILTER_DATA_FETCH_FULFILLED, CARD_FILTER_DATA_FETCH_REJECTED, CARD_FILTER_DATA_FETCH_PENDING } from "src/constants/types";
import { InitialStateModel } from "src/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel

export const filterWiseCardDataReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case CARD_FILTER_DATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case CARD_FILTER_DATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload
            };
        }
        case CARD_FILTER_DATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default filterWiseCardDataReducer