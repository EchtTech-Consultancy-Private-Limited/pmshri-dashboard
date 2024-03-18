import { STATE_WISE_FETCH_FULFILLED, STATE_WISE_FETCH_PENDING, STATE_WISE_FETCH_REJECTED } from "src/constants/types";
import { InitialStateModel } from "@/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel


export const stateWiseDataReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case STATE_WISE_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case STATE_WISE_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload
            };
        }
        case STATE_WISE_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};
