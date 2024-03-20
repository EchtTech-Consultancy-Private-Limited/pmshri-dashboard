import { combineReducers } from 'redux';
import { comparisonDataReducer } from './comparisonData.reducer';
import currentDistrictReducer from './currentDistrict.reducer';
import currentStateReducer from './currentState.reducer';
import districtCategoryDataReducer from './districtCategoryData.reducer';
import { mapChartReducer } from './mapChart.reducer';
import { stateWiseDataReducer } from './getStateWiseData';
import { blockDataReducer } from './blockList.reducer';
import { stateColorCodeReducer } from './stateColorCode.reducer';
import stateWiseCategoryDataReducer from './stateWiseCategoryData.reducer';
import stateCategoryWiseDataReducer from './stateCategoryWiseData.reducer';
import allCategoryReducer from './allCategory.reducer';
import dpgiScoreDataReducer from './dpgiScoreData.reducer';
import districtUnderGradeDataReducer from './districtUnderGradeData.reducer';
import topDistrictCategoryWiseReducer from './topDistrictCategorywise.reducer';
import allStatesReducer from './getAllStates.reducer';
import allMapStatesReducer from './getAllMapStates.reducer';
import allDistrictReducer from './getAllDistrict.reducer';
import { comparisonCategoryWiseDataReducer } from './comparisonCategoryData.reducer';
import districtListGradeWiseReducer from './districtListGradeWise.reducer';
import allYearReducer from './allYear.reducer';
import filterWiseSchoolDataReducer from './filterWiseSchoolData.reducer';
import filterWiseCardDataReducer from './cardFilterWiseData.reducer';
import visitorCounterReducer from './getVisitorCounter.reducer';
import {getSchoolDetailsReducer} from './school.reducer';
import {getSQAFListReducer} from './sqaf.reducer';
import {getFaqListReducer} from './faq.reducer';
import {getSQAFDetailsReducer} from './sqaf.reducer';
import { stateGalleryReducer } from './stateGallery.reducer';
import filterWiseDashboardCardDataReducer from './dashboardCardFilterWiseData.reducer';

const reducers = combineReducers({
    mapChartData: mapChartReducer,
    stateWiseData: stateWiseDataReducer,
    blockData: blockDataReducer,
    comparisonData: comparisonDataReducer,
    categoryData: stateWiseCategoryDataReducer,
    state: currentStateReducer,
    district: currentDistrictReducer,
    stateColorCodes: stateColorCodeReducer,
    districtCategoryData: districtCategoryDataReducer,
    stateCategoryWiseData: stateCategoryWiseDataReducer,
    allCategory: allCategoryReducer,
    dpgiScore: dpgiScoreDataReducer,
    gradeWiseDistrict: districtUnderGradeDataReducer,
    topDistricts: topDistrictCategoryWiseReducer,
    states: allStatesReducer,
    mapstates: allMapStatesReducer,
    districtList: allDistrictReducer,
    comparisonCategoryWiseData: comparisonCategoryWiseDataReducer,
    districtListGradeWise: districtListGradeWiseReducer,
    allYears: allYearReducer,
    filterWiseSchool: filterWiseSchoolDataReducer,
    filterWiseCardDatas: filterWiseCardDataReducer,
    visitorCounter: visitorCounterReducer,
    schoolDetails:getSchoolDetailsReducer,
    sqafList:getSQAFListReducer,
    faqsList:getFaqListReducer,
    sqafDetails:getSQAFDetailsReducer,
    statesGallery:stateGalleryReducer,
    filterWiseDashboardCardDatas: filterWiseDashboardCardDataReducer,

})

export default reducers