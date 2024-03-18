import { ALL_MAPSTATES_FETCH_FULFILLED, ALL_MAPSTATES_FETCH_REJECTED, ALL_MAPSTATES_FETCH_PENDING } from "src/constants/types";
import { InitialStateModel } from "src/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: []
} as InitialStateModel

export const allMapStatesReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case ALL_MAPSTATES_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case ALL_MAPSTATES_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: {mapData: payload.data.mapData}
            };
        }
        case ALL_MAPSTATES_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default allMapStatesReducer