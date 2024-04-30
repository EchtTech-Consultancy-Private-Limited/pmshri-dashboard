export interface InitialStateModel {
    loading: boolean
    loaded: boolean
    error: boolean
    data: any
}

export interface StoreModel {
    mapChartData: InitialStateModel
    stateWiseData: InitialStateModel
    allStateData:InitialStateModel
    blockData: InitialStateModel
    comparisonData: InitialStateModel
    categoryData: InitialStateModel
    state: InitialStateModel
    district: InitialStateModel
    stateColorCodes: InitialStateModel
    districtCategoryData: InitialStateModel
    stateCategoryWiseData: InitialStateModel
    allCategory: InitialStateModel
    dpgiScore: InitialStateModel
    gradeWiseDistrict: InitialStateModel
    topDistricts: InitialStateModel
    states: InitialStateModel
    mapstates: InitialStateModel
    districtList: InitialStateModel
    comparisonCategoryWiseData: InitialStateModel
    districtListGradeWise: InitialStateModel
    allYears: InitialStateModel
    filterWiseSchool: InitialStateModel
    filterWiseCardDatas: InitialStateModel
    visitorCounter: InitialStateModel
    schoolDetails: InitialStateModel
    sqafList: InitialStateModel
    sqafDetails: InitialStateModel
    faqsList: InitialStateModel
    statesGallery:InitialStateModel
    filterWiseDashboardCardDatas:InitialStateModel
}

export interface ActionModel {
    type: string
    payload: any
}

export interface StateBannerModel {
    onChangeYear: any
    years: any
    filterWiseCardDetail:any
    isLoadingStateData:any
    onSchoolChange:any
    schoolType:string,
    setSchoolType:any,
    setCurrentPage:any
}

export interface StateScoresModel {
    year: string
    

}

export interface ScoresTabModel {
    data: any
    state: string
}

export interface StateMapModel {
    state: string
    colorCodeData: any
    hoverData: any
}

export interface DistrictMapModel {
    state: string
    district_id: string
    activeColor: string
}
export interface ScoresTabDataModel {
    short_name: string
    name: string
    district: any
    total_score: number
}

export interface MapOptionsModel {
    chart: any
    title: any
    credits: any
    subtitle: any
    legend: any
    mapNavigation: any
    tooltip: any
}

export interface EventModel {
    target: TargetModel
}

export interface TargetModel {
    value: string
    options?: any
}

export interface gradeColorModel {
    "Daksh": string
    "Utkarsh": string
    "Ati-Uttam": string
    "Uttam": string
    "Prachesta-1": string
    "Prachesta-2": string
    "Prachesta-3": string
    "Akanshi-1": string
    "Akanshi-2": string
    "Akanshi-3": string
}

export interface MapModel {
    data: any
    onSelectState: any
    onChangeDistrict: any
    colorCodeData: any
    year: string
}

export interface MultiColorGraphModel {
    data: any
    state: string
    year: string
}

export interface chartOptionsModel {
    chart: any
    title: any
    subtitle: any
    xAxis: any
    yAxis: any
    legend: any
    tooltip: any
    series: any
    plotOptions: any
}

export interface PgiGradeGraphModel {
    withComparedData: any
    toComparedData: any
    withComparedYear?: string
    toComparedYear?: string
}