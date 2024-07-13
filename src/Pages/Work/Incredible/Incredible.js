import React from 'react'
import './Incredible.css'
import IncredibleImg1 from '../../../Assets/images/explore-item-02.jpg'
import IncredibleImg2 from '../../../Assets/images/explore-item-03.jpg'

const Incredible = () => {
  return (
    <>
      <div className="incredible-container">
      <div className="incredible-img">
        <img src={IncredibleImg1} alt="incredible first" />
        <img src={IncredibleImg2} alt="incredible second" />
        </div>
        <div className="incredible-text">
            <h2>INCREDIBLE WORK</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto toril beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequida nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
        </div>
      </div>
    </>
  )
}

export default Incredible
