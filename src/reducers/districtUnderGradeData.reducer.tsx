import { DISTRICT_UNDER_GRADE_DATA_FETCH_FULFILLED, DISTRICT_UNDER_GRADE_DATA_FETCH_REJECTED, DISTRICT_UNDER_GRADE_DATA_FETCH_PENDING } from "src/constants/types";
import { InitialStateModel } from "src/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel

export const districtUnderGradeDataReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case DISTRICT_UNDER_GRADE_DATA_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case DISTRICT_UNDER_GRADE_DATA_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: { chartData: payload.data.chartData, displayData: payload.data.displayData }
            };
        }
        case DISTRICT_UNDER_GRADE_DATA_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};

export default districtUnderGradeDataReducer