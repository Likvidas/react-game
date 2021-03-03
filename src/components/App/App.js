import { useState, useEffect, } from 'react';
import './App.css';
import Snake from '../Snake';
import Food from '../Food';
import Popup from '../Popup';
import Result from '../Result';

const App = () => {
  const getRandomCoordinate = () => {
    const coordX = Math.floor((Math.random() * 50)) * 2;
    const coordY = Math.floor((Math.random() * 50)) * 2;
    return [coordX, coordY];
  }

  const [foodCoordinate, setFoodCoodinate] = useState(getRandomCoordinate());
  const [snakeBody, setSnakeBody] = useState([[0, 0], [2, 0], [4, 0]]);
  const [direction, setDirection] = useState('right');
  const [speed, setSpeed] = useState(500);
  const [isGame, setIsGame] = useState(true);
  const [isMoving, setIsMoving] = useState(true);
  const [isPopup, setIsPopup] = useState(false);
  const [reasonOfFail, setReasonOfFail] = useState('');
  const [point, setPoint] = useState(0);

  function changeDirection(e) {
    switch (e.code) {
      case 'ArrowUp':
        setDirection('up');
        break;
      case 'ArrowDown':
        setDirection('down');
        break;
      case 'ArrowLeft':
        setDirection('left');
        break;
      case 'ArrowRight':
        setDirection('right');
        break;
      default:
        setDirection('right');
    }
  }

  function moveSnake(direction) {
    if (!isMoving) {
      return;
    }
    const body = [...snakeBody];
    let head = body[body.length - 1];

    switch (direction) {
      case 'right':
        head = [head[0] + 2, head[1]];
        break;
      case 'left':
        head = [head[0] - 2, head[1]];
        break;
      case 'down':
        head = [head[0], head[1] + 2];
        break;
      case 'up':
        head = [head[0], head[1] - 2];
        break;
      default:
        head = [head[0] + 2, head[1]];
    }
    body.push(head);
    body.shift()
    setSnakeBody(body)
  }

  function shakePlayField() {
    const playField = document.querySelector('.play-field');
    playField.classList.add('shake');
    setTimeout(() => {
      setIsGame(false);
      playField.classList.remove('shake');
      setIsPopup(true)
    }, 3600);
  }

  function checkOfBoudary() {
    let head = snakeBody[snakeBody.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      setIsMoving(false);
      setReasonOfFail('boundary');
      writeResultOnStorage(point)
      shakePlayField();
    }
  }

  function checkCollisionWithBody() {
    const body = [...snakeBody]
    const head = body[body.length - 1];
    body.pop();
    body.forEach((ceil) => {
      if (head[0] === ceil[0] && head[1] === ceil[1]) {
        setIsMoving(false);
        setReasonOfFail('body');
        writeResultOnStorage(point);
        shakePlayField();
      }
    })

  }

  function eatFood() {
    const head = snakeBody[snakeBody.length - 1];
    if (head[0] === foodCoordinate[0] && head[1] === foodCoordinate[1]) {
      setPoint((prevPoint) => prevPoint += 10);
      setSnakeBody([[], ...snakeBody]);
      setSpeed((prevSpeed) => prevSpeed - 25);
      setFoodCoodinate(getRandomCoordinate());
    }
  }

  function writeResultOnStorage(val) {
    localStorage.setItem('points', val)
  }

  useEffect(() => {
    window.addEventListener('keyup', changeDirection)

    return () => window.removeEventListener('keyup', changeDirection)
  },[])

  useEffect(() => {
    checkOfBoudary();
    checkCollisionWithBody();
    eatFood();
    const intervalID = setInterval(() => {
      moveSnake(direction)
    }, speed);
    return () => clearInterval(intervalID);
  })
  
  const content = (
    <>
      <Snake bodyCoordinate={snakeBody} />
      <Food foodCoordinate={foodCoordinate} />
    </>
  )

  return (
    <div className="app">
      <div className="play-field">
        {isGame && content}
        {isPopup && <Popup reason={ reasonOfFail }/>}
      </div>
      <div className='settings-field'>
        <Result point={point} isMoving={ isMoving }/>
      </div>
    </div>
  );
}

export default App;
