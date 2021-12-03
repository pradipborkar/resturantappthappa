import React, { useState } from 'react'
import './style.css'
import { menu } from '../Api/MenuApi'
import { Menucard } from './Menu';
import { Navbar } from './Navbar';

const uniqueList = [...new Set(menu.map((curEle) => {
    return curEle.category;
})),
"All"]
console.log(uniqueList);

export const Resturant = () => {
    const [menuData, setMenuData] = useState(menu);
    const [menuList,setMenuList] = useState(uniqueList);
    const filterItem = (category) => {
        if(category === "All"){
            setMenuData(menu);
            return;
        }
        const updatedList = menu.filter((curEle) => {
            return curEle.category === category;
        });
        setMenuData(updatedList);
    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <Menucard menuData={menuData} />
        </>
    )
}
