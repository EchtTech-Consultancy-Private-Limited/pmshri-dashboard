import { BLOCKDATA_FETCH_PENDING, BLOCKDATA_FETCH_FULFILLED, BLOCKDATA_FETCH_REJECTED,BLOCKDATA_FETCH_SOFT_DELETE } from "src/constants/types";
import { InitialStateModel } from "@/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel


export const blockDataReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case BLOCKDATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case BLOCKDATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data.block
            };
        }
        case BLOCKDATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        case BLOCKDATA_FETCH_SOFT_DELETE: {
            return { loading: false, loaded: false, error: false,'data.block':[] };
        }
        default:
            return state;
    }
};
