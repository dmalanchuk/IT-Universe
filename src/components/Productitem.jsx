import React from 'react'
import '../styles/components/modules/items.scss'

const Productitem = ({ id, title, location, description, price, total_area, url_to_detail_page, content_image }) => {
  return (
    <div className="product-item">
      <div className="img">
        <img src={content_image} alt="" />
      </div>
      <div className="items-block">
        <div className="main-info">
          <h3 className="title">{title}</h3>
        </div>
        <p className="description">
          {description}
        </p>
        <div className="mini-info">
          <p className="location">{location}</p>
          <p className="area">{total_area}</p>
        </div>
        <a className="href" href={url_to_detail_page}>enter</a>
      </div>
      <h4 className="price">{price}</h4>
    </div>
  )
}

export default Productitem