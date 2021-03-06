import './Result.css';

const Result = ({ point}) => {
  const res = point ? point : 0;
  
  return (
    <div className='result-group'>
      <span className='bonus-point'>{`Ваш результат: ${res}`}</span>
      
    </div>
  )
}

export default Result;
