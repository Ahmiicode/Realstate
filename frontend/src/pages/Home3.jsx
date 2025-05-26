import React from 'react'
import Herosection from '../components/Home3/Herosection'
import Search from '../components/Home3/Search'
import Popular from '../components/Home2/Popular'
import FeartureProperty from '../components/Home1/FeartureProperty'
import Office from '../components/Home1/Office'
import Partner from '../components/Home1/Partner'
import  Peoplesay from '../components/Home1/Peoplesay'
import Latestnew from '../components/Home1/Latestnew'
import CalltoAction from '../components/Home2/CalltoAction'

const Home3 = () => {
  return (
    <div>
      <Herosection/>
      <Search/>
      <Popular/>
      <FeartureProperty/>
      <Office/>
      <Partner/>
      <Peoplesay/>
      <Latestnew/>
      <CalltoAction/>
    </div>
  )
}

export default Home3
