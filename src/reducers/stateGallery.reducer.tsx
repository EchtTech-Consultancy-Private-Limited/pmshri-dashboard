import { ALL_STATEGALLERY_FETCH_PENDING, ALL_STATEGALLERY_FETCH_FULFILLED, ALL_STATEGALLERY_FETCH_REJECTED } from "src/constants/types"
import { InitialStateModel } from "src/models/dpgi";

const initialGalaryList = {
    loading: false,
    loaded: false,
    error: false,
    data: []
} as InitialStateModel


export const stateGalleryReducer = function (state = initialGalaryList, action: any) {

    const { type, payload } = action
    switch (type) {
        case ALL_STATEGALLERY_FETCH_PENDING: {
            return { ...state, loading: true }
        }
        case ALL_STATEGALLERY_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data
            }
        }
        case ALL_STATEGALLERY_FETCH_REJECTED: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: true
            }
        }
        default:
            return state
    }
}