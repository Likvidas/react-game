import { useState, useEffect } from 'react';
import './Result.css';

const Result = ({ point, isMoving }) => {
  const res = point ? point : 0;
  
  const [timer, setTimer] = useState(0);
  const seconds = timer % 60;
  const minuts = parseInt(timer / 60);

  function addZero(num) {
    return `${num}`.length < 2 ? `0${num}` : `${num}`;
  }

  

  useEffect(() => {
    function addTime() {
    setTimer((prevTime) => prevTime += 1)
      if (isMoving) {
        setTimeout(addTime, 1000)
      }
    }
    addTime();
  },[isMoving])
  return (
    <div className='result-group'>
      <span className='bonus-point'>{`Ваш результат: ${res}`}</span>
      <span className='time-game'>{ `Время игры: ${addZero(minuts)}:${addZero(seconds)}` }</span>
    </div>
  )
}

export default Result;
