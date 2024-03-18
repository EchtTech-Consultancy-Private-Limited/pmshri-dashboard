import React from 'react';

const Pagination = () => {

    
    return (
        <section className="pgicategory Pagination-sec bg-grey">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="pagination">
                            <button className="arrow" id="prevPage" disabled>← <span className="nav-text">PREV</span></button>
                            <div className="pages">
                                <div className="page-number active">1</div>
                                <div className="page-number">2</div>
                                <div className="page-number">3</div>
                                <div className="page-number">4</div>
                                <div className="page-number">5</div>
                            </div>
                            <button className="arrow" id="nextPage"><span className="nav-text">NEXT</span> →</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pagination;