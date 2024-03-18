import ScoresCard from "src/components/Shared/ScoresCard/ScoresCard"
import { useNavigate } from "react-router-dom";

const DistrictScoresCardsTab = (props: any) => {
    const { data, year } = props
    const navigate = useNavigate()
    const goToCategory = (catId: string) => {
        localStorage.setItem('activeCategory', JSON.stringify(catId))
        localStorage.setItem('activeYear', year)
        navigate('/category')
    }
    return <>
        <div className="col-md-12">
            <h2 className="heading-sm">
                Categories Wise Score of {data.district_name}
            </h2>
        </div>
        {data.data.map((category: any, index: number) => {
            return <div key={index} className="col-md-2" onClick={() => { goToCategory(category.catId) }}>
                <div className={"scores-card-wrap card-" + (category.card_color) + " ptb-30"}>
                    <ScoresCard
                        heading={category.desc}
                        icon={category.image}
                        score={category.score}
                        description={"Out of " + (category.weight)}
                    />
                </div>
            </div>
        })}
        {/* <div className="col-md-2">
            <div className="scores-card-wrap card-orange ptb-30">
                <ScoresCard
                    heading="Outcomes"
                    icon={learning}
                    score={data[0].cat1}
                    description="Out of 290"
                />
            </div>
        </div>
        <div className="col-md-2">
            <div className="scores-card-wrap card-green ptb-30">
                <ScoresCard
                    heading="Effective Classroom Transaction"
                    icon={teaching}
                    score={data[0].cat2}
                    description="Out of 90"
                />
            </div>
        </div>
        <div className="col-md-2">
            <div className="scores-card-wrap card-red ptb-30">
                <ScoresCard
                    heading="Infrastructure, Facilities, Student Entitlements"
                    icon={infrastructure}
                    score={data[0].cat3}
                    description="Out of 51"
                />
            </div>
        </div>
        <div className="col-md-2">
            <div className="scores-card-wrap card-purple ptb-30">
                <ScoresCard
                    heading="School Safety and Child Protection"
                    icon={team}
                    score={data[0].cat4}
                    description="Out of 35"
                />
            </div>
        </div>
        <div className="col-md-2">
            <div className="scores-card-wrap card-pink ptb-30">
                <ScoresCard
                    heading="Digital Learning"
                    icon={videoCall}
                    score={data[0].cat5}
                    description="Out of 50"
                />
            </div>
        </div>
        <div className="col-md-2">
            <div className="scores-card-wrap card-blue ptb-30">
                <ScoresCard
                    heading="Governance Processes"
                    icon={growth}
                    score={data[0].cat6}
                    description="Out of 84"
                />
            </div>
        </div> */}
    </>
}

export default DistrictScoresCardsTab;