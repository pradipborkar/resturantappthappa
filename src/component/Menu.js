import React from 'react'

export const Menucard = ({ menuData }) => {
    return (
        <div className="coniatner">
            {
                menuData.map((ele) => {
                    const {id,name,category,image,description} = ele;
                    return (
                        <div className="card" key={id}>
                            <div className="card-header">
                                {name}
                                <span className="count">{id}</span>
                            </div>
                            <div className="card-body">
                                <img src={image} alt="image not found" />
                                <p>
                                    {description}
                                </p>
                            </div>
                            <div className="card-footer">
                                <button>Order</button>
                            </div>
                        </div>
                   )
                })
            }
         </div>
    )
}
