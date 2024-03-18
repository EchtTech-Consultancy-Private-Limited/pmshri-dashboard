import { StoreModel } from '@/models/dpgi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Barlist.scss';

const year = {
    '1': '2018-2019',
    '2': '2019-2020',
    '3': '2020-2021',
    '4': '2021-2022',
} as any

const Barlist = () => {
    const navigate = useNavigate()
    const activeBar = localStorage.getItem('activeBar')?.split('_') || []
    const districtListData = useSelector<StoreModel>(store => store.districtListGradeWise) as any
    const [districtList, setDistrictList] = useState([])
    useEffect(() => {
        if (districtListData.loaded && !districtListData.loading) {
            setDistrictList(districtListData.data)
        }
    }, [districtListData])
    const goToBackPage = () => {
        navigate(-1)
    }

    const goToDistrict = (state: string, district_id: string) => {
        localStorage.setItem('activeState', JSON.stringify(state.toLowerCase()))
        localStorage.setItem('activeDistrict', JSON.stringify(district_id))
        localStorage.setItem('activeYear', activeBar[0])
        window.location.href = '/district'
    }
    return (
        <section className="barlist bg-grey ptb-60">
            <div className="container">
                <div className='d-flex align-items-center justify-content-between pb-5'>
                    <h2 className="heading-sm">List of Districts in {activeBar[1].split(' ').map((element: string, index: number) => {
                        return element.charAt(0).toUpperCase() + element.slice(1) + ' '
                    })} under {activeBar[2]} Grade ({year[activeBar[0]]})
                        <span className="text-sm">(In Alphabetically order)</span>
                    </h2>
                    <div className="btn-wrap d-flex align-items-center justify-content-end">
                        <div onClick={goToBackPage} className="btn-bdr">
                            <span className="material-icons-round">
                                chevron_left
                            </span>
                            Back
                        </div>
                    </div>

                </div>
                <div className="row">
                    {districtList.length &&
                        districtList.map((district: any, index: number) => {
                            return <div key={district.district_name} className="col-md-3" onClick={() => { goToDistrict(district.state_name, district.district_id) }}>
                                <div className="barlist-content">
                                    <span>{index + 1}.</span>
                                    <a>
                                        {district.district_name}
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section >
    )
}

export default Barlist