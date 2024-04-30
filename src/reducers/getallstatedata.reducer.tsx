import { ALL_STATE_WISE_FETCH_FULFILLED, ALL_STATE_WISE_FETCH_PENDING, ALL_STATE_WISE_FETCH_REJECTED } from "src/constants/types";
import { InitialStateModel } from "@/models/dpgi";
import { Console } from "console";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel


export const allstateDataReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    //console.log(payload,"payload")
    switch (type) {
        case ALL_STATE_WISE_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case ALL_STATE_WISE_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data
            };
        }
        case ALL_STATE_WISE_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};
