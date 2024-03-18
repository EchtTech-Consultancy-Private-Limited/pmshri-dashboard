import { SQAF_FAQ_DATA_FETCH_PENDING, SQAF_FAQ_DATA_FETCH_FULFILLED,SQAF_FAQ_DATA_FETCH_REJECTED
} from "src/constants/types";

import { InitialStateModel } from "src/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel

export const getFaqListReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case SQAF_FAQ_DATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case SQAF_FAQ_DATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data
            };
        }
        case SQAF_FAQ_DATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};