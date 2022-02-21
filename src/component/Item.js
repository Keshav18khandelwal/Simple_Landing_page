import React from 'react'
import pic10 from './images/pic10.jpg';
import pic11 from './images/pic11.jpg';
import pic12 from './images/pic12.jpg';
import pic13 from './images/pic13.jpg';
import pic14 from './images/pic14.jpg';
import pic15 from './images/pic15.jpg';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Carditem from './Carditem';


export default function Item() {
  return (
    <div>
        <Zoom left>
        <h2 className='my-4' style={{"textDecoration":"Underline"}}> Items</h2>
        </Zoom>
       
        <div className='row' id="items">
        <Fade bottom>
          <div className='col-md-4'>
            <Carditem ctitle="Lorem ipsum dolor sit amet." ctext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus repellendus, odio adipisci, amet natus ea, iusto dolore tempora cum ut modi iste rerum libero dolorem! Ipsum error cupiditate delectus." curl={pic10} />
          </div>

          <div className='col-md-4'>
            <Carditem ctitle="Lorem ipsum dolor sit amet." ctext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus repellendus, odio adipisci, amet natus ea, iusto dolore tempora cum ut modi iste rerum libero dolorem! Ipsum error cupiditate delectus." curl={pic11} />
          </div>


          <div className='col-md-4'>
            <Carditem ctitle="Lorem ipsum dolor sit amet." ctext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus repellendus, odio adipisci, amet natus ea, iusto dolore tempora cum ut modi iste rerum libero dolorem! Ipsum error cupiditate delectus." curl={pic12} />
          </div>
          <div className='col-md-4'>
            <Carditem ctitle="Lorem ipsum dolor sit amet." ctext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus repellendus, odio adipisci, amet natus ea, iusto dolore tempora cum ut modi iste rerum libero dolorem! Ipsum error cupiditate delectus." curl={pic13} />
          </div>
          <div className='col-md-4'>
            <Carditem ctitle="Lorem ipsum dolor sit amet." ctext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus repellendus, odio adipisci, amet natus ea, iusto dolore tempora cum ut modi iste rerum libero dolorem! Ipsum error cupiditate delectus." curl={pic14} />
          </div>
          <div className='col-md-4'>
            <Carditem ctitle="Lorem ipsum dolor sit amet." ctext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus repellendus, odio adipisci, amet natus ea, iusto dolore tempora cum ut modi iste rerum libero dolorem! Ipsum error cupiditate delectus." curl={pic15} />
          </div>
        </Fade>
      </div>
    </div>
  )
}
