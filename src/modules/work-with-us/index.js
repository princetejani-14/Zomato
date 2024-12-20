import React from 'react'
import Herobanerworkwithus from './herobaner-workwithus'
import Headerworkwithus from '../../components/header-workwithus'
import Footer from '../../components/footer'
import Obsessionworkwithus from './obsession-workwithus'
import Employeebenefits_workwithus from './employee-benefits-workwithus'
import Buildingzomato from './buildingzomato-workwithus'
import Lifeat_zoamto from './lifeat-zomato'
import Everday_workwithus from './everyday-workwithus'

export default function Workwithus() {
  return (
    <div>
        <Headerworkwithus/>
        <Herobanerworkwithus/>
        <Obsessionworkwithus/>
        <Employeebenefits_workwithus/>
        <Buildingzomato/>
        <Lifeat_zoamto/>
        <Everday_workwithus/>
        <Footer/>
    </div>
  )
}
