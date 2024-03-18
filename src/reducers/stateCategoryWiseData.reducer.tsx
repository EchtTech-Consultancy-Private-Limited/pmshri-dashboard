import { STATE_CATEGORYWISE_DATA_FETCH_FULFILLED, STATE_CATEGORYWISE_DATA_FETCH_REJECTED, STATE_CATEGORYWISE_DATA_FETCH_PENDING } from "src/constants/types";
import { InitialStateModel } from "src/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel

export const stateCategoryWiseDataReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case STATE_CATEGORYWISE_DATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case STATE_CATEGORYWISE_DATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: { categoryWiseData: payload.data.categorywiseData }
            };
        }
        case STATE_CATEGORYWISE_DATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default stateCategoryWiseDataReducer