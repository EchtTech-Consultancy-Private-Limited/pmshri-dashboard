import React from 'react'

function DataSource() {
  return (
    <>
    <div className='container'>
    <div className='py-4'>
    <h3>
        Data Source
    </h3>
    <p>
    {`PGI-D is constructed based on identified indicators and domains. The data for PGI-D drawn from several sources, viz., Unified District Information System for Education Plus (UDISE +), National Achievement Survey (NAS) 2017 and data provided by respective Districts.             
    The district wise data for the indicators related to minimum proficiency (Proficient and Advanced) of Class 3, Class 5 and Class 8 are provided by National Council for Education Research & Training (NCERT) from NAS 2017. For the Class 10, district wise proficiency data were not available. However, district wise data on distribution of students who answered NAS questions correctly are available. The rank correlation of proficiency data and data of students who answered NAS question correctly were computed for class 3, 5 & 8 and found highly corrected with rank correlation of above 0.95 and insignificant P value ( i.e < 0.05) (Annexure-4) implying proposed alternate data is highly capable of capturing proficiency of students. Accordingly, for the indicators on minimum proficiency in Class 10, data on distribution of students who answered NAS questions correctly (50% or more) are taken. Further, in some of the districts NAS for Class 10 was not held (all districts of West Bengal, and Uttar Pradesh etc) and class 8 proficiency score of the respective subject is substituted while arriving PGI-D.
    UDISE + data were pre-filled in PGI –D portal and State/ district entered data of about 55 indicators from their MIS. The final PGI-D score for 2018-19 and 2019-20 are computed based on the final figures reflected in PGI portal.`}
    </p>
    
    </div>
    </div>
    </>
  )
}

export default DataSource