import React from 'react'
import './thirdpage.css'


const Thirdpage = () => {
  return (
    <div className='third_page_main_container'>
        <div className='inner_container'>
            <div className="one">
                <h1>feel special</h1>
                <h1>more often.</h1>
                <h4>exclusive rewards for paying your bills</h4>
            </div>
            <div className="two"></div>
            <div className="three">
               <div className='para_cont'>
               <p>every time you pay your credit card bills on CRED, you receive CRED coins.</p>
                <p>you can use these to win exclusive rewards or get special access to curated</p>
                <p>products and experiences. on CRED, good begets good.</p>
               </div>

                <div className='button_cont'>
                        <button>Explore Rewards</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Thirdpage
