import React from 'react'
import {Link} from "react-router-dom"

import MainHeader from './MainHeader.js'
import MainFooter from './MainFooter.js'

function TermsAndConditionsPage(props) {

    return (
        <div className="page5 twofixed">
            <div className="First_Screen">
                <MainHeader/>
            </div>
            <div>
                <p className="window1-descript">The Infrastructure Deals Network Ltd</p>
                <p className="window1-descript">Company Number 12894864</p>
                <p className="window1-descript"> Kemp House, 160 City Road, London, EC1V 2NX, United Kingdom</p>
                <p className="window1-descript">7 January 2021</p>
            </div>
            <h2>Website Privacy Policy</h2>
            <ol>
                <li>INTRODUCTION</li>
                <li>
                    <ol>
                        <li>
                            <p>Important information and who we are</p>
                            <p>Welcome to The Infrastructure Deals Network Ltd’s Privacy and Data Protection Policy (“
                                <strong>Privacy Policy</strong>”).</p>
                            <p>At The Infrastructure Deals Network Ltd (“<strong>we</strong>”, “<strong>us</strong>”, or
                                “<strong>our</strong>”) we are committed to protecting
                                and respecting your privacy and Personal Data in compliance with the United Kingdom
                                General Data Protection Regulation (“<strong>GDPR</strong>”), the DPA 2018 and all other
                                mandatory laws and
                                regulations of the United Kingdom.</p>
                            <p>This Privacy Policy explains how we collect, process and keep your data safe. The Privacy Policy
                                will tell you about your privacy rights, how the law protects you, and inform our employees
                                and staff members of all their obligations and protocols when processing data.</p>
                        </li>
                        <li>Customers
                            Suppliers
                            Business contacts
                        </li>
                    </ol>
                </li>
            </ol>
            <MainFooter/>
        </div>
    )
}

export default TermsAndConditionsPage;
