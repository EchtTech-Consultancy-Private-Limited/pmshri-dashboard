import { STATEWISE_CATEGORY_DATA_FETCH_FULFILLED, STATEWISE_CATEGORY_DATA_FETCH_PENDING, STATEWISE_CATEGORY_DATA_FETCH_REJECTED } from "src/constants/types";
import { InitialStateModel } from "@/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel


export const stateWiseCategoryDataReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case STATEWISE_CATEGORY_DATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case STATEWISE_CATEGORY_DATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: { categoryData: payload.data.categoryData }
            };
        }
        case STATEWISE_CATEGORY_DATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default stateWiseCategoryDataReducer;