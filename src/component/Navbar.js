import React from 'react'

export const Navbar = ({ filterItem, menuList }) => {
    return (
        <nav className="navbar">
            {
                menuList.map((curEle) => {
                    return (
                        <button onClick={() => filterItem(curEle)}>{curEle}</button>
                    );
                })
            }
        </nav>
    )
}
