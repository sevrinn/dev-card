import React from 'react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import profilePic from '../images/profileImage.jpeg'
const Info = () => {
  return (
    <div className="innerWrapper">
      <div className="info">
        <img src={profilePic} className="info--img" alt="Sev looking cute as hell. lol" />
        <h1 className="info--name">Sevrinn Welker</h1>
        <h2 className="info--title">Fullstack Developer</h2>
        <a href="https://www.sevwelker.com" className="info--link">sevwelker.com</a>
      </div>
      <div className="info--buttons">
        <button className="info--btn email">
          <FaEnvelope/> Email
        </button>
        <button className="info--btn linked-in">
          <FaLinkedin/> LinkedIn
        </button>
      </div>
    </div>
  )
}

export default Info


