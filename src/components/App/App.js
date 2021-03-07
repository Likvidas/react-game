import { useState } from 'react';
import './App.css';
import Game from '../Game';
import Popup from '../Popup';
import Result from '../Result';
import Timer from '../Timer';
import Footer from '../Footer/Footer';

const App = () => {

  const [isGame, setIsGame] = useState(true);
  const [isMoving, setIsMoving] = useState(true);
  const [reasonOfFail, setReasonOfFail] = useState('');
  const [point, setPoint] = useState(0);

  console.log(isMoving);
  

  return (
    <div className="app">
      {isGame && <Game setIsGame={setIsGame} isMoving={isMoving} setIsMoving={setIsMoving} setReasonOfFail={setReasonOfFail} point={point} setPoint={setPoint} />}
      {!isGame && <Popup reason={ reasonOfFail }/>}
      <div className='settings-field'>
        <Result point={point}/>
        <Timer isMoving={ isMoving }/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
