import * as constants from 'src/constants/types'
import http from 'src/services/utility'

export const getMapChartData = (year: string, state: string) => ({
    type: constants.MAP_CHART_FETCH,
   // payload: http.get('getmapdata/mapdata/' + year + '/' + state)
    payload: http.get('getmapdata/mapdata/')
})

export const getstatewisedata = (StateID: string) => ({
    type: constants.STATE_WISE_FETCH,
    payload: http.get('getstatewisedata/statewisedata/'+StateID)
})
export const getallstatedata = () => ({
    type: constants.ALL_STATE_WISE_FETCH,
    payload: http.get('getstatewisemapdata/mapallstatewisedata/')
})
export const getBlockData = (stateID:Number) => ({
    type: constants.BLOCKDATA_FETCH,
    payload: http.get('block/block-list/'+stateID)
})
export const softRemoveBlockData = () => ({
    type: constants.BLOCKDATA_FETCH_SOFT_DELETE,
    payload: []

})
export const getComparisonData = (withComparedYear: string, year: string, state_name: string) => ({
    type: constants.COMPARISON_DATA_FETCH,
    payload: http.get('comparisondata/' + withComparedYear + '/' + year + '/' + state_name)
})

export const getStateWiseCategoryData = (year: string, state_name: string) => ({
    type: constants.STATEWISE_CATEGORY_DATA_FETCH,
    payload: http.get('dgpigetdata/categorywise/statewise/' + year + '/' + state_name)
})

export const getDistrictCategoryData = (year: string, district_id: number) => ({
    type: constants.DISTRICT_CATEGORY_DATA_FETCH,
    payload: http.get('dgpigetdata/categorywise/' + year + '/' + district_id)
})

export const getStateColorCodeData = (year: string, state_name: string) => ({
    type: constants.STATE_COLOR_CODE_FETCH,
    payload: http.get('getColorCode/' + year + '/' + state_name)
})

export const setCurrentState = (state_name: string) => ({
    type: constants.CURRENT_STATE_FETCH_FULFILLED,
    payload: state_name
})

export const setCurrentDistrict = (district_code: number) => ({
    type: constants.CURRENT_DISTRICT_FETCH_FULFILLED,
    payload: district_code
})


export const setCategoriesWiseData = (year: String, state: string, catId: string) => ({
    type: constants.STATE_CATEGORYWISE_DATA_FETCH,
    payload: http.get('/dgpidata/categorywise/' + year + '/' + state + '/' + catId)
})

export const getAllCategories = (year: String) => ({
    type: constants.ALL_CATEGORY_FETCH,
    payload: http.get('/getAllCategory/' + year)
})

export const getdpgiScoreData = (year: String, district_id: number) => ({
    type: constants.DPGI_SCORE_DATA_FETCH,
    payload: http.get('/dgpiscore/' + year + '/' + district_id)
})

export const getDistrictUnderGrade = (year: String, state: string) => ({
    type: constants.DISTRICT_UNDER_GRADE_DATA_FETCH,
    payload: http.get('/districts_under_grade/' + year + '/' + state)
})

export const getTopDistrictsCategoryWise = (year: String, state: string, catId: string) => ({
    type: constants.TOP_DISTRICT_CATEGORYWISE_DATA_FETCH,
    payload: http.get('/categoriestopdistrict/' + year + '/' + state + '/' + catId)
})
export const getAllStates = (year: String) => ({
    type: constants.ALL_STATES_FETCH,
    payload: http.get('/location/state-list')
})
export const getMapAllStates = (year: String) => ({
    type: constants.ALL_MAPSTATES_FETCH,
    payload: http.get('/location/mapstate-list')
})
export const getAllDistrict = (stateID: Number) => ({
    type: constants.ALL_DISTRICT_FETCH,
    payload: http.get('/location/district-list/'+stateID)
})

export const getComparisonCategoryWiseData = (withComparedYear: string, year: string, state_name: string, catId: string) => ({
    type: constants.COMPARISON_CATEGORYWISE_DATA_FETCH,
    payload: http.get('comparison/categorywise/' + withComparedYear + '/' + year + '/' + state_name + '/' + catId)
})

export const getDistrictListGradeWise = (year: string, state_name: string, grade: string) => ({
    type: constants.DISTRICT_LIST_GRADEWISE_FETCH,
    payload: http.get('districtList/gradewise/' + year + '/' + state_name + '/' + grade)
})

export const getAllYears = () => ({
    type: constants.ALL_YEAR_FETCH,
    payload: http.get('/getyear/yearmaster')
})

export const getSchoolListFilterWise = (sid: Number|null, did: Number|null, bid: Number|null, page:Number, search:string,perPageRecord:number=4,school_type:string) => ({
    type: constants.FILTER_WISE_SCHOOL_DATA_FETCH,
    payload: http.get('/school/filter?sid='+sid+'&did='+did+'&bid='+bid+'&page='+page+'&search='+search+'&perPageRecord='+perPageRecord+'&school_type='+school_type)
    //payload: http.get('/school/filter?sid=22&did=384&bid=3678&page=1')
})

export const getSchoolDetails = (udise_id:string) => ({
    type: constants.SCHOOL_DETAILS_DATA_FETCH,
    payload: http.get(`/school/details/${udise_id}`)
})

export const getCardDataFilterWise = (sid: Number, did: Number, bid: Number, page:Number) => ({
    type: constants.CARD_FILTER_DATA_FETCH,
    payload: http.get('/getstatewisedata/filterwisedata?sid='+sid+'&did='+did+'&bid='+bid+'&page='+page)
})

export const getVisitorCounter = (ip: string) => ({
    type: constants.VISITOR_COUNTER_FETCH,
    payload: http.get('getcounter/' + ip)
})

/*-----SQAF-----*/ 
export const getSQAFList = () => ({
    type: constants.SQAF_LIST_DATA_FETCH,
    payload: http.get('/sqaf/get-all-sqaf')
})

export const getSQAFDetails = (sqafID:string) => ({
    type: constants.SQAF_DETAILS_DATA_FETCH,
    payload: http.get(`/sqaf/get-sqaf-details/${sqafID}`)
})

export const getFaqsList = () => ({
    type: constants.SQAF_FAQ_DATA_FETCH,
    payload: http.get(`/faqs`)
})

export const getStateGallery = (stateID : string) => ({
    type: constants.ALL_STATEGALLERY_FETCH,
    payload: http.get('getgallery/gallerymaster/'+ stateID)
})

export const getDashboardCardDataFilterWise = (sid: Number, did: Number, bid: Number, page:Number) => ({
    type: constants.CARD_DASHBOARD_FILTER_DATA_FETCH,
    payload: http.get('/getdashboarddata/filterdashboarddata?sid='+sid+'&did='+did+'&bid='+bid+'&page='+page)
})
/*end here*/
