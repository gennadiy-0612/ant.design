import React from 'react'
import {Link} from "react-router-dom"

import MainHeader from './MainHeader.js'
import MainFooter from './MainFooter.js'
import Terms from "./Terms";

function TermsAndConditionsPage(props) {

    return (
        <div className="page5 twofixed">
            <MainHeader/>
            <Terms/>
            <MainFooter/>
        </div>
    )
}

export default TermsAndConditionsPage;
