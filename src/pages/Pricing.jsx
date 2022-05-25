import React from 'react'
import Header from '../components/Header'
import PricingArea from '../components/hometwo/PricingArea'
import { Breadcrumb } from '../components/pricing/Breadcrumb'

const Pricing = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb />
        <PricingArea />
      </main>
    </>
  )
}

export default Pricing