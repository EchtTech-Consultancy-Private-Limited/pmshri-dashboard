import axios from 'axios'

export default axios.create({
    // baseURL: 'http://localhost:8055/performance/',
    // baseURL: 'http://125.63.90.217:8066/performance/',
    // baseURL: 'https://dpgi.inroad.in/apiadm/performance/',
    // baseURL: 'https://dpgi.udiseplus.gov.in/apis/backend/',
    baseURL: 'https://pmshriapi.staggings.in/api/v1/',

    // baseURL: 'http://localhost:4100/api/v1/',
    //baseURL: 'https://sqafpmshri.education.gov.in/',        
    // baseURL: 'https://dashboardpmshri.education.gov.in/api/v1/',    
   // baseURL: 'https://pmshri.education.gov.in/apipmshridashboard/api/v1/',

    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer $2y$10$Y8lv.M9vBmgHTVTTSrNMHeeXHBE/onZ2en1d0.rjlpyLUPglgX4/2"
    }
})