import React, { useRef } from 'react'
import './Testimonals.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonals = () => {
  const slider = useRef();
  const tx = useRef(0); // store translation value persistently

  const slideForward = () => {
    if (tx.current > -50) { // prevent sliding too far forward
      tx.current -= 25;     // move left by 25%
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  const slideBackward = () => {
    if (tx.current < 0) {   // prevent sliding too far back
      tx.current += 25;     // move right by 25%
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  return (
    <div className='testimonals'>
      {/* Navigation buttons */}
      <img src={next_icon} alt="next" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="back" className='back-btn' onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="Chioma Bright" />
                <div>
                  <h3>Chioma Bright</h3>
                  <span>Stars School, Nigeria</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Stars Schools is the best decision I have ever made...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="Ikechukwu Adele" />
                <div>
                  <h3>Ikechukwu Adele</h3>
                  <span>Stars School, Nigeria</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Stars Schools is the best decision I have ever made...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="Jessica Bright" />
                <div>
                  <h3>Jessica Bright</h3>
                  <span>Stars School, Nigeria</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Stars Schools is the best decision I have ever made...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="Adelke Cythnia" />
                <div>
                  <h3>Adelke Cythnia</h3>
                  <span>Stars School, Nigeria</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Stars Schools is the best decision I have ever made...</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonals
