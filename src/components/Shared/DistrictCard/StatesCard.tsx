import { useEffect, useState } from "react";
import './DistrictCard.scss';
import Learning from "src/assets/images/learning.svg";

const StatesCard = (props: any) => {
    const { data } = props
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (Object.keys(data).length) {
            setIsLoading(false)
        }
    }, [])
    return <div className="districtcard-list">
        {!isLoading &&
            <div className="row">
                {
                    data.data.map((category: any, index: number) => {
                        return <div key={index} className="col-md-12">
                            <div className={"category-card-wrap card-" + (category.card_color)}>
                                <div className="category-card">
                                    <div className="category-card-content">
                                        <img src={require('src/assets/images/' + (category.image) + '.svg')} alt="icon" className="img-fluid" />
                                        <h3 className="category-card-header">{category.desc}</h3>
                                    </div>
                                    <div className="category-card-box card-box">
                                        <span className="category-card-no">{category.score}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        }

    </div>
}

export default StatesCard;