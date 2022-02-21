import React from 'react'
import Zoom from 'react-reveal/Zoom';
export default function Footer() {
    return (
        <Zoom left>
        <div className=' d-flex Footer row' id='about'>
            <div className='col-md-6'>
                <h2>More About Us!</h2>
                <p>Ever wanted to buy a xyz but could not because it was too expensive? Worry not! Because company is at your rescue! company team is committed to bring to you all kinds of best books at the minimal
                    prices ever seen anywhere to let you buy, rent or sell according to your convenience.</p>
            </div>
            <div className='col-md-3'>
                <h2>Connect_With_Us!</h2>
                <span style={{"fontSize":"1.2rem"}} className="mx-2 d-block">
                <i className="fa fa-brands fa-whatsapp mx-2"></i>
                WhatsApp
                </span>
                <span style={{"fontSize":"1.2rem"}} className="mx-2 d-block">
                <i className="fa fa-brands fa-instagram mx-2"></i>
                Instagram
                </span>
              <span style={{"fontSize":"1.2rem"}} className="mx-2 d-block">
              <i className="fa fa-brands fa-linkedin mx-2"></i>
              LinkedIn
              </span>
               <span style={{"fontSize":"1.2rem"}} className="mx-2 d-block">
               <i className="fa fa-solid fa-envelope mx-2"></i>
               Mail
               </span>
               

            </div >
            <div className='col-md-3'>
                <h2>Help</h2>
                <p>Request book & Place Order

                    Cancellation & Return

                    Payment & Shipping

                    Other</p>
            </div>

        </div>
        </Zoom>
    )
}
