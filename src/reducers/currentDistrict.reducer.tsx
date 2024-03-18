import { CURRENT_DISTRICT_FETCH_FULFILLED, CURRENT_DISTRICT_FETCH_PENDING, CURRENT_DISTRICT_FETCH_REJECTED } from "src/constants/types";
import { InitialStateModel } from "@/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: 0
} as InitialStateModel


export const currentDistrictReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case CURRENT_DISTRICT_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case CURRENT_DISTRICT_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload
            };
        }
        case CURRENT_DISTRICT_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default currentDistrictReducer;