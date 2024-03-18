import { SCHOOL_DETAILS_DATA_FETCH_PENDING, SCHOOL_DETAILS_DATA_FETCH_FULFILLED,SCHOOL_DETAILS_DATA_FETCH_REJECTED } from "src/constants/types";

import { InitialStateModel } from "src/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: []
} as InitialStateModel

export const getSchoolDetailsReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case SCHOOL_DETAILS_DATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case SCHOOL_DETAILS_DATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data
            };
        }
        case SCHOOL_DETAILS_DATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};
