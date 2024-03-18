import { STATE_COLOR_CODE_FETCH_FULFILLED, STATE_COLOR_CODE_FETCH_PENDING, STATE_COLOR_CODE_FETCH_REJECTED } from "src/constants/types";
import { InitialStateModel } from "@/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel


export const stateColorCodeReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case STATE_COLOR_CODE_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case STATE_COLOR_CODE_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: { distColorCode: payload.data.data, hoverData: payload.data.hoverData, grade: payload.data.grade }
            };
        }
        case STATE_COLOR_CODE_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};
