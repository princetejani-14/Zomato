import React from 'react'
import Herobanerhome from './herobaner-home'
import Orderzomato from './order'
import Collectionzomato from './collection'
import Popularzomato from './popular'
import Zomatoapp from './zoamtoapp'
import Nearmezomato from './nearme'
import Footer from '../../components/footer'

export default function Home() {
  return (
    <div>
      <Herobanerhome/>
      <Orderzomato/>
      <Collectionzomato/>
      <Popularzomato/>
      <Zomatoapp/>
      <Nearmezomato/>
      <Footer/>
    </div>
  )
}
