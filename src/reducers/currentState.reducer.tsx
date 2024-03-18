import { CURRENT_STATE_FETCH_FULFILLED, CURRENT_STATE_FETCH_PENDING, CURRENT_STATE_FETCH_REJECTED } from "src/constants/types";
import { InitialStateModel } from "@/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: 'India'
} as InitialStateModel


export const currentStateReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case CURRENT_STATE_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case CURRENT_STATE_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload
            };
        }
        case CURRENT_STATE_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default currentStateReducer;