import { TOP_DISTRICT_CATEGORYWISE_DATA_FETCH_FULFILLED, TOP_DISTRICT_CATEGORYWISE_DATA_FETCH_REJECTED, TOP_DISTRICT_CATEGORYWISE_DATA_FETCH_PENDING } from "src/constants/types";
import { InitialStateModel } from "src/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel

export const topDistrictCategoryWiseReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case TOP_DISTRICT_CATEGORYWISE_DATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case TOP_DISTRICT_CATEGORYWISE_DATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data
            };
        }
        case TOP_DISTRICT_CATEGORYWISE_DATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default topDistrictCategoryWiseReducer