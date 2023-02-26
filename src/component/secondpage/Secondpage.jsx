import React from 'react'
import "./secondpage.css"


const Secondpage = () => {
  return (
    <div className='second_page_main_container'>
      <img style={{position:"absolute", height: "50%", top:"200px",left:"250px",}} src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png" alt="" />
      <img style={{position:"absolute",height: "50%", top:"200px", left:"850px"}} src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png" alt="" />
      <img style={{position:"absolute",height: "70%", top:"100px", left:"350px"}} src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png" alt="" />
      <img style={{position:"absolute", height: "70%", top:"100px",left:"700px"}} src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png" alt="" />
      <img style={{position:"absolute", height:"90%", left:"500px", top:"0px"}} src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png" alt="" />

        <div className='lower_div'></div>

    </div>
  )
}

export default Secondpage
