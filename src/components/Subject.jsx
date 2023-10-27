
import React, { useState } from 'react';
import { FaPlus , FaRegCheckCircle } from "react-icons/fa";
import{Link} from "react-router-dom";
import '../styles/subject.css'

const Subject = () => {

  const images = {
    image1: require('../assets/1.png'),
    image2: require('../assets/2.png'),
    image3: require('../assets/3.png'),
    image4: require('../assets/4.png'),
    image5: require('../assets/5.png'),
    image6: require('../assets/6.png'),
    image7: require('../assets/7.png'),
    image8: require('../assets/8.png'),
    image9: require('../assets/9.png'),
    image10: require('../assets/10.png'),
    image11: require('../assets/11.png'),
    image12: require('../assets/12.png'),
    image13: require('../assets/13.png'),
    image14: require('../assets/14.png'),
    image15: require('../assets/15.png'),
  };
  const [imageState, setImageState] = useState('plus');
  const [imageState2, setImageState2] = useState('plus');
  const [imageState3, setImageState3] = useState('plus');
  const [imageState4, setImageState4] = useState('plus');
  const [imageState5, setImageState5] = useState('plus');
  const [imageState7, setImageState7] = useState('plus');
  const [imageState8, setImageState8] = useState('plus');
  const [imageState9, setImageState9] = useState('plus');
  const [imageState10, setImageState10] = useState('plus');
  const [imageState11, setImageState11] = useState('plus');
  const [imageState12, setImageState12] = useState('plus');
  const [imageState13, setImageState13] = useState('plus');
  const [imageState14, setImageState14] = useState('plus');
  const [imageState6, setImageState6] = useState('plus');
  const [imageState15, setImageState15] = useState('plus');

  const toggleImageState = () => {
    setImageState(imageState === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState2 = () => {
    setImageState2(imageState2 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState3 = () => {
    setImageState3(imageState3 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState4 = () => {
    setImageState4(imageState4 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState5 = () => {
    setImageState5(imageState5 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState6 = () => {
    setImageState6(imageState6 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState7 = () => {
    setImageState7(imageState7 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState8 = () => {
    setImageState8(imageState8 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState9 = () => {
    setImageState9(imageState9 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState10 = () => {
    setImageState10(imageState10 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState11 = () => {
    setImageState11(imageState11 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState12 = () => {
    setImageState12(imageState12 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState13 = () => {
    setImageState13(imageState13 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState14 = () => {
    setImageState14(imageState14 === 'plus' ? 'tick' : 'plus');
  };
  const toggleImageState15 = () => {
    setImageState15(imageState15 === 'plus' ? 'tick' : 'plus');
  };

  return (
    <div>
      <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 38, display: 'flex'}}>
        <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', marginTop:'40px'}}>
        <progress value="50" max="100"  > </progress><div>50%</div>
        </div>
        <div style={{color: '#1E1E1E', fontSize: 16, fontWeight: '400'}}>To help us personalize your experience with us please answer these short questions</div>
        <div style={{color: '#0F0740', fontSize: 26,  fontWeight: '700'}}>What subjects are you interested in?</div>

        <div className='whole' >


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image1} onClick={toggleImageState} />
              {imageState === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Design</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image2} onClick={toggleImageState2} />
              {imageState2 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Development</div>
          </div>

          
          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image3} onClick={toggleImageState3} />
              {imageState3 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Finance & Accounting</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image4} onClick={toggleImageState4} />
              {imageState4 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Photography & video</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image5} onClick={toggleImageState5} />
              {imageState5 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Officee Productivity</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image6} onClick={toggleImageState6} />
              {imageState6 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Personal Developement</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image7} onClick={toggleImageState7} />
              {imageState7 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Business & Management</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image8} onClick={toggleImageState8} />
              {imageState8 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Lifestyle</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image9} onClick={toggleImageState9} />
              {imageState9 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>IT & Software</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image10} onClick={toggleImageState10} />
              {imageState10 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Marketing</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image11} onClick={toggleImageState11} />
              {imageState11 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Health & Fitness</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image12} onClick={toggleImageState12} />
              {imageState12 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Music</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image13} onClick={toggleImageState13} />
              {imageState13 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Teaching</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image14} onClick={toggleImageState14} />
              {imageState14 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Creativity Arts & Media</div>
          </div>


          <div className="whole2">
            <div style={{width: 300, height: 75, position: 'relative'}}>
              <img style={{width: 300, height: 75, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src={images.image15} onClick={toggleImageState15} />
              {imageState15 === 'plus' ? (
          <div className="overlay plus"><FaPlus/></div>
        ) : (
          <div className="overlay tick"><FaRegCheckCircle/></div>
        )}
            </div>
            <div style={{color: '#100841', fontSize: 16,  fontWeight: '400'}}>Law</div>
          </div>
      
        </div>
        
      </div>
      <div style={{ marginTop: '80px' ,marginLeft: '210px' ,color: '#363FE8', fontSize: 16,  fontWeight: '400'}}>I’ll do this later</div>
      <Link to={'/'}><div className='btn' style={{ justifyContent:'center', alignItems:'center' , width: 96, height: 54, paddingLeft: 30, paddingRight: 30, paddingTop: 15, paddingBottom: 15, background: '#3540E8', borderRadius: 5, alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div style={{  color: 'white', fontSize: 16, fontWeight: '500', textTransform: 'capitalize'}}>next</div>
      </div></Link>

    </div>
  )
}

export default Subject