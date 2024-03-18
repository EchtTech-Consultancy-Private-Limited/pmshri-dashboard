import { MAP_CHART_FETCH_FULFILLED, MAP_CHART_FETCH_PENDING, MAP_CHART_FETCH_REJECTED } from "src/constants/types";
import { InitialStateModel } from "@/models/dpgi";

const initialStateList = {
    loading: false,
    loaded: false,
    error: false,
    data: {}
} as InitialStateModel


export const mapChartReducer = function (state = initialStateList, action: any) {
    const { type, payload } = action;
    switch (type) {
        case MAP_CHART_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case MAP_CHART_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: { mapData: payload.data.mapData, chartData: payload.data.chartData, distColorCode: payload.data.distColorCode }
            };
        }
        case MAP_CHART_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
};
