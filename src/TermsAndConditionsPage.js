import React from 'react'
import { Link } from "react-router-dom"

import MainHeader from './MainHeader.js'
import MainFooter from './MainFooter.js'
import Images from '../../Images'

function TermsAndConditionsPage(props) {

  return (
    <div className="page5 twofixed">
      <div className="First_Screen">
        <MainHeader />
      </div>

      <MainFooter />
    </div>
  )
}

export default TermsAndConditionsPage;
