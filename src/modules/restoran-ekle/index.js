import React from 'react'
import Herobanerrestoran from './herobaner-restoran'
import Headerrestoran from '../../components/header-restoran'
import Partnerrestoranekle from './partner-restoranekle'
import Successrestoranekle from './success-stories'
import Frequentlyrestoranekle from './frequently-restoranekle'
import Footer from '../../components/footer'

export default function Restoranekle() {
  return (
    <div>
        <Headerrestoran/>
        <Herobanerrestoran/>
        <Partnerrestoranekle/>
        <Successrestoranekle/>
        <Frequentlyrestoranekle/>
        <Footer/>
    </div>
  )
}
