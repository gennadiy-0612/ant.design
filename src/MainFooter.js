import React from 'react'
import { Link } from "react-router-dom"

function MainFooter(props) {

  return (
    <div className="Screen9 P1-S9 X1023">
      <Link to="/" className="idn-img"></Link>
      <div className="foot-lists">
        <ul className="foot-ul">
          <li className="foot-li foot-li-head">Users</li>
          <li className="foot-li opacity6"><Link className="footA" to="/investors">Investors</Link></li>
          <li className="foot-li opacity6"><Link className="footA" to="/advisor">Senior Advisors</Link></li>
        </ul>
        <ul className="foot-ul">
          <li className="foot-li foot-li-head">Sectors</li>
          <li className="foot-li opacity6"><Link className="footA" to="/sectors">Sectors</Link></li>
        </ul>
        <ul className="foot-ul">
          <li className="foot-li foot-li-head">About</li>
          <li className="foot-li opacity6"><Link className="footA" to="/about">About Us</Link></li>
          <li className="foot-li opacity6"><Link className="footA" to="/terms-and-conditions">Terms & Conditions</Link></li>
        </ul>
        <ul className="foot-ul">
          <li className="foot-li foot-li-head">Contact</li>
          <li className="foot-li opacity6"><a className="footA" href="mailto:info@infradeals.net">info@infradeals.net</a></li>
          <li className="foot-li opacity6"><a className="footA" href="tel:+23232323232"> + 23232323232</a></li>
          <li className="foot-li"><a href="/" className="in"></a></li>
        </ul>
      </div>
    </div>
  )
}

export default MainFooter
