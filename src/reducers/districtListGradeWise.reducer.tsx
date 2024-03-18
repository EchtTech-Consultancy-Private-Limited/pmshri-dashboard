import { DISTRICT_LIST_GRADEWISE_FETCH_FULFILLED, DISTRICT_LIST_GRADEWISE_FETCH_PENDING, DISTRICT_LIST_GRADEWISE_FETCH_REJECTED } from "src/constants/types";
import { InitialStateModel } from "@/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: []
} as InitialStateModel


export const districtListGradeWiseReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case DISTRICT_LIST_GRADEWISE_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case DISTRICT_LIST_GRADEWISE_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data.data
            };
        }
        case DISTRICT_LIST_GRADEWISE_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default districtListGradeWiseReducer;