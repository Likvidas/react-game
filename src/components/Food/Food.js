import './Food.css';

const Food = ({foodCoordinate}) => {
  return (
    <>
      <div className='snake-food pulse'
        style={{left: `${foodCoordinate[0]}%`, top: `${foodCoordinate[1]}%`}}></div>
    </> 
  )
}

export default Food;