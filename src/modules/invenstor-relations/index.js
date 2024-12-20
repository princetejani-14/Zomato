import React from 'react'
import Herobanerinvestor from './herobaner-investor'
import Havellsheader from '../../components/header'
import Offeringsinvestor from './offerings-investor'
import Beyondbusinessinvestor from './beyondbusiness'
import Announcementsinvestor from './announcements-investor'
import Blogsinvestor from './blogs-investor'
import Subscribeinvestor from './subscribe-investor'
import Footer from '../../components/footer'

export default function Invenstorrelations() {
  return (
    <div>
        <Havellsheader/>
        <Herobanerinvestor/>
        <Offeringsinvestor/>
        <Beyondbusinessinvestor/>
        <Announcementsinvestor/>
        <Blogsinvestor/>
        <Subscribeinvestor/>
        <Footer/>
      
    </div>
  )
}
