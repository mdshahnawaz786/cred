import React from 'react'
import "./firstpage.css"
const Firstpage = () => {
  return (
    <div className='first_page_main_container'>

      <div className='header'>
    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="cred_logo"/>
    <div className='textHeader'>
        <h3 style={{color:"white"}}>credit score check</h3>
        <h3 style={{color:"white"}}>CRED pay</h3>
    </div>
      </div>

        <div className="contentContainer">
            <h1>rewards for paying</h1>
            <h1>credit card bills.</h1>
            <h3>join 9M+ members who win rewards and cashbacks everyday</h3>
            <button>Download CRED</button>
        </div>

    </div>
  )
}

export default Firstpage
