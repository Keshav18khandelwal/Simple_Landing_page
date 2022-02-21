import React from 'react'

import Fade from 'react-reveal/Fade';
// import Fade from 'react-reveal/Fade';
export default function Pricing() {
    const background={
      //   backgroundImage:`url(${picMilk})`,
        // width:"100%",
      backgroundColor:"#e1ede4",
        height:"100%",
      
    }
  return (
    <div className='Pricing ' style={background} id="features">
       <Fade top>
       <h1 className='py-3'>Features</h1>
       </Fade>
       
       <div className='container row textboxp '>
       <Fade left>
       <div className='col-md-5 textbox'>
                <h3>Lorem ipsum dolor sit.</h3>
               <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia doloremque cupiditate itaque laboriosam maiores voluptatem totam magni, tenetur fuga quibusdam nulla provident odit error! Voluptas, assumenda doloribus! Vero, placeat nobis.</p>
            </div>
       </Fade>


       <Fade right>
       <div className='col-md-5 textbox'>
                <h3>Lorem ipsum dolor sit.</h3>
               <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia doloremque cupiditate itaque laboriosam maiores voluptatem totam magni, tenetur fuga quibusdam nulla provident odit error! Voluptas, assumenda doloribus! Vero, placeat nobis.</p>
            </div>
       </Fade>
       <Fade left>
       <div className='col-md-5 textbox'>
                <h3>Lorem ipsum dolor sit.</h3>
               <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia doloremque cupiditate itaque laboriosam maiores voluptatem totam magni, tenetur fuga quibusdam nulla provident odit error! Voluptas, assumenda doloribus! Vero, placeat nobis.</p>
            </div>
       </Fade>
       <Fade right>
       <div className='col-md-5 textbox'>
                <h3>Lorem ipsum dolor sit.</h3>
               <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia doloremque cupiditate itaque laboriosam maiores voluptatem totam magni, tenetur fuga quibusdam nulla provident odit error! Voluptas, assumenda doloribus! Vero, placeat nobis.</p>
            </div>
       </Fade>
       
        </div>
    </div>
  )
}
