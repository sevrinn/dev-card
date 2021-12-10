import React from 'react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import profilePic from '../images/profileImage.jpeg'
const Info = () => {
  return (
    <div>
      <img src={profilePic} className="profile-pic" alt="Sev looking cute as hell. lol" />
      <h1>Sevrinn Welker</h1>
      <h2>Fullstack Developer</h2>
      <a href="https://www.sevwelker.com">sevwelker.com</a>
      <div className="buttons">
        <button className="btn email">
          <FaEnvelope/> Email
        </button>
        <button className="btn email">
          <FaLinkedin/> LinkedIn
        </button>
      </div>
    </div>
  )
}

export default Info


