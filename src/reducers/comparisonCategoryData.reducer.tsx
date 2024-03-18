import { COMPARISON_CATEGORYWISE_DATA_FETCH_FULFILLED, COMPARISON_CATEGORYWISE_DATA_FETCH_PENDING, COMPARISON_CATEGORYWISE_DATA_FETCH_REJECTED } from "src/constants/types";
import { InitialStateModel } from "@/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel


export const comparisonCategoryWiseDataReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case COMPARISON_CATEGORYWISE_DATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case COMPARISON_CATEGORYWISE_DATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: { withComparedData: payload.data.withComparedData, toComparedData: payload.data.toComparedData }
            };
        }
        case COMPARISON_CATEGORYWISE_DATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};
