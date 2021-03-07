import { useState, useEffect } from 'react';


const Timer = ({isMoving}) => {
  const [timer, setTimer] = useState(0);
  const seconds = timer % 60;
  const minuts = parseInt(timer / 60);

  function addZero(num) {
    return `${num}`.length < 2 ? `0${num}` : `${num}`;
  }

  useEffect(() => {
    function addTime() {
      setTimer((prevTime) => prevTime += 1)
      setTimeout(addTime, 1000);
    }
    addTime();
  },[isMoving])
  return (
    <span className='time-game'>{`Время игры: ${addZero(minuts)}:${addZero(seconds)}`}</span>
  )
}

export default Timer;