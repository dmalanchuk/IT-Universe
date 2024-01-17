import React from 'react'
import Skeleton from './Skeleton'
import Productitem from './Productitem'

const Product = ({ items, isLoading, searchValue, onChangeSearchValue }) => {
    return (
        <div className="product">
            <div className="nav-search">
                <input
                    value={searchValue}
                    onChange={onChangeSearchValue}
                    className="search" type="text" placeholder="search..."
                />
            </div>
            {isLoading ? (
                <div className="skeleton-list" >
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />

                </div >
            ) : (
                <ul product-list>
                    <div className="prod">
                        {
                            items.filter(obj => {
                                const FullName = (obj.title + obj.description + obj.total_area + obj.location).toLowerCase()
                                return FullName.includes(searchValue.toLowerCase()) || obj.price.toLowerCase().includes(searchValue.toLowerCase())
                            }).map(
                                obj => <Productitem key={obj.id} {...obj} />
                            )
                        }
                    </div>
                </ul>
            )
            }
        </div>
    )
}

export default Product