import React from 'react'
import '../styles/components/modules/skeleton.scss'


const Skeleton = () => {
    return (
        <div className="skeleton">
            <div className="img1"></div>
            <div className="skeleton-block">
                <h3 className="title1"></h3>
                <h4 className="price1"></h4>
                <p className="description1"></p>
                <a className="href1" href=""></a>
            </div>
        </div>
    )
}

export default Skeleton