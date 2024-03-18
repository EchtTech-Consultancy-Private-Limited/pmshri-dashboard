import { VISITOR_COUNTER_FETCH_FULFILLED, VISITOR_COUNTER_FETCH_REJECTED, VISITOR_COUNTER_FETCH_PENDING } from "src/constants/types";
import { InitialStateModel } from "src/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: 0
} as InitialStateModel

export const visitorCounterReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case VISITOR_COUNTER_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case VISITOR_COUNTER_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data.data
            };
        }
        case VISITOR_COUNTER_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default visitorCounterReducer