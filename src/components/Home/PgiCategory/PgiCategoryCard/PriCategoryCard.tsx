import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PgiCategoryCard.scss';
const PriCategoryCard = (props: any) => {
    const navigate = useNavigate()
    const goToCategory = (catId: string) => {
        localStorage.setItem('activeCategory', catId)
        if (localStorage.getItem('activeYear')) {
            localStorage.removeItem('activeYear')
        }
        if (localStorage.getItem('activeState')) {
            localStorage.removeItem('activeState')
        }
        if (localStorage.getItem('activeDistrict')) {
            localStorage.removeItem('activeDistrict')
        }
        navigate('/category')
    }
    return (
        <div className="pgicategory-card" data-aos="fade-up">
            <div className="pgicategory-card-content">
                <img src={props.img} alt="icon" className="img-fluid" />
                <h3 className="pgicategory-card-heading">
                    {props.heading}
                </h3>
                <p className="pgicategory-card-desc">
                    {props.description}
                </p>
                <div className="pgicategory-card-link">
                    <a onClick={() => { goToCategory(props.id) }}>
                        More Insights
                        <span className="material-icons-round">
                            chevron_right
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PriCategoryCard