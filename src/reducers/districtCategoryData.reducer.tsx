import { DISTRICT_CATEGORY_DATA_FETCH_FULFILLED, DISTRICT_CATEGORY_DATA_FETCH_PENDING, DISTRICT_CATEGORY_DATA_FETCH_REJECTED } from "src/constants/types";
import { InitialStateModel } from "@/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel


export const districtCategoryDataReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case DISTRICT_CATEGORY_DATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case DISTRICT_CATEGORY_DATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: { categoryData: payload.data.categoryData }
            };
        }
        case DISTRICT_CATEGORY_DATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default districtCategoryDataReducer;