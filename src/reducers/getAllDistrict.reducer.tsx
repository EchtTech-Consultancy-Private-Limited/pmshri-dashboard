import { ALL_DISTRICT_FETCH_FULFILLED, ALL_DISTRICT_FETCH_REJECTED, ALL_DISTRICT_FETCH_PENDING } from "src/constants/types";
import { InitialStateModel } from "src/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: []
} as InitialStateModel

export const allDistrictReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case ALL_DISTRICT_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case ALL_DISTRICT_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data.district
            };
        }
        
        case ALL_DISTRICT_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default allDistrictReducer