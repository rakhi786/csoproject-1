import React from 'react'
import Info8 from "../CLAss/C8"
import { homeObjSport,homeObjFood, homeObjMental, homeObjPhysical, homeObjacad } from './DataC0'
const Index0 = () => {
    return (
        <>
         <Info8 {...homeObjFood}/>
        <Info8 {...homeObjSport}/>
        <Info8 {...homeObjPhysical}/>
        <Info8 {...homeObjMental}/>
        <Info8 {...homeObjacad}/>
        </>
    )
}

export default Index0
