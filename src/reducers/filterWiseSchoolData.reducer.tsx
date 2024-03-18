import { FILTER_WISE_SCHOOL_DATA_FETCH_FULFILLED, FILTER_WISE_SCHOOL_DATA_FETCH_REJECTED, FILTER_WISE_SCHOOL_DATA_FETCH_PENDING } from "src/constants/types";
import { InitialStateModel } from "src/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel

export const filterWiseSchoolDataReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case FILTER_WISE_SCHOOL_DATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case FILTER_WISE_SCHOOL_DATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload
            };
        }
        case FILTER_WISE_SCHOOL_DATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default filterWiseSchoolDataReducer