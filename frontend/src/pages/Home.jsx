import React from 'react'
import Herosection from '../components/Home1/Herosection'
import FeatureProperty from '../components/Home1/FeartureProperty'
import RecentProperty from '../components/Home1/RecentProperty'
import Places from '../components/Home1/Places'
import Office from '../components/Home1/Office'
import Partner from '../components/Home1/Partner'
import Peoplesay from '../components/Home1/Peoplesay'
import Contact from '../components/Home1/Contact'
import Latestnew from '../components/Home1/Latestnew'

const Home = () => {
  return (
    <div>
     <Herosection/>
     <FeatureProperty/>
     <RecentProperty/>
     <Places/>
     <Office/>
     <Partner/>
     <Peoplesay/>
     <Contact />
     <Latestnew/>
    </div>
  )
}

export default Home
