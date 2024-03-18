import { DPGI_SCORE_DATA_FETCH_FULFILLED, DPGI_SCORE_DATA_FETCH_REJECTED, DPGI_SCORE_DATA_FETCH_PENDING } from "src/constants/types";
import { InitialStateModel } from "src/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel

export const dpgiScoreDataReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case DPGI_SCORE_DATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case DPGI_SCORE_DATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data.data
            };
        }
        case DPGI_SCORE_DATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default dpgiScoreDataReducer