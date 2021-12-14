import React from 'react'
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer--ul">
        <li className="footer--li"><FaTwitterSquare/></li>
        <li className="footer--li"><FaFacebookSquare/></li>
        <li className="footer--li"><FaInstagramSquare/></li>
        <li className="footer--li"><FaGithubSquare/></li>
      </ul>
    </div>
  )
}

export default Footer

