import './Popup.css';

const Popup = ({ reason }) => {
  
  let reasonOfFail;
  if (reason === 'boundary') {
    reasonOfFail = 'выход за границы'
  } if (reason === 'body') {
    reasonOfFail = 'столкновение с телом'
  }
  return (
    <div className='popup__inner'>
      <p className='popup-message'>{`Ууупс!!! Кажется Вы проиграли. Причина провала: ${reasonOfFail}`}</p>
      <p className='popup-result'></p>
    </div>
  )
}

export default Popup;